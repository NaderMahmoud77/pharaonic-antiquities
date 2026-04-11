<template>
  <section
    class="relative overflow-hidden min-h-screen text-center text-textsecondary"
  >
    <NavInHero />

    <!-- ─── Slides ────────────────────────────────────────────────── -->
    <!--
      FIX: v-show is on the <li> itself, not a child div.
      Inactive slides become display:none and pointer-events:none,
      so they can never intercept clicks intended for the active slide.
    -->
    <ul>
      <li
        v-for="item in items"
        :key="item.id"
        v-show="activeIndex === item.index"
        class="slide"
        :class="{ 'is-active': activeIndex === item.index }"
        :aria-hidden="activeIndex !== item.index"
      >
        <!-- Background -->
        <img :src="item.img" alt="" aria-hidden="true" class="slide-bg" />

        <!-- Content -->
        <v-container fluid class="slide-content">
          <div class="relative z-10 tracking-wider container mx-auto">
            <!-- Label -->
            <div class="content-item delay-1 text-center mb-8">
              <p
                class="text-sm font-semibold uppercase text-secondary tracking-[0.3em]"
              >
                {{ $t(item.label) }}
              </p>
              <img
                src="/images/hero/separator.svg"
                alt=""
                aria-hidden="true"
                class="mx-auto mt-2"
                :class="$i18n.locale === 'ar' ? 'w-[70px]' : 'w-[100px]'"
              />
            </div>

            <!-- Titles -->
            <div class="content-item delay-2">
              <h1 class="text-3xl sm:text-5xl md:text-6xl font-semibold mb-4">
                {{ $t(item.titleOne) }}
              </h1>
              <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold mb-8">
                {{ $t(item.titleTwo) }}
              </h2>
            </div>

            <!-- Description -->
            <p class="content-item delay-3 text-sm sm:text-base text-gray-300">
              {{ $t(item.desc) }}
            </p>

            <!--
              FIX: CTA is now in normal document flow inside the slide,
              not absolutely positioned outside the stacking context.
              z-index fights become irrelevant.
            -->
            <NuxtLink
              to="/artifacts-3d"
              class="cta-btn content-item delay-4 inline-block mt-8"
            >
              {{ $t("links_nav.artifacts_3d") }}
            </NuxtLink>
          </div>
        </v-container>
      </li>
    </ul>

    <!-- ─── Dot indicators ───────────────────────────────────────── -->
    <div class="absolute bottom-24 left-1/2 -translate-x-1/2 z-50 flex gap-3">
      <button
        v-for="item in items"
        :key="item.id"
        class="dot"
        :class="{ 'is-active': activeIndex === item.index }"
        :aria-label="`Go to slide ${item.index + 1}`"
        @click="goTo(item.index)"
      />
    </div>

    <!-- ─── Brand mark ────────────────────────────────────────────── -->
    <div
      class=" brand-mark absolute bottom-10 z-50 w-[60px] bg-secondary! me-6! sm:me-8! md:me-15! lg:me-25!"
      :class="lang === 'ar' ? 'left-0' : 'right-0'"
    >
      <img src="/images/hero/hero.png" alt="Logo" class="w-full!" />
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { useLang } from "~/composables/UseChangeLang";
import NavInHero from "~/components/AllSection/NavInHero.vue";

// In HeroSection.vue <script setup>
import heroItems from "~/data/hero";
import { isRef } from "vue";

const raw = isRef(heroItems) ? heroItems.value : heroItems;
const items = raw.map((item, index) => ({ ...item, index }));

// ── Language ──────────────────────────────────────────────────────────
const { lang } = useLang();

// ── Slider — single source of truth ──────────────────────────────────
const SLIDE_DURATION = 9000;
const activeIndex = ref(0);
let timer = null;

function next() {
  activeIndex.value = (activeIndex.value + 1) % items.length;
}

function goTo(index) {
  activeIndex.value = index;
  resetTimer(); // restart countdown from this slide
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(next, SLIDE_DURATION);
}

onMounted(() => resetTimer());
onBeforeUnmount(() => clearInterval(timer)); // prevent memory leak
</script>

<style scoped>
/* ── Slide shell ──────────────────────────────────────────────────── */
.slide {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  opacity: 0;
  /*
    Belt-and-suspenders: even if display:none somehow fails,
    inactive slides cannot receive pointer events.
  */
  pointer-events: none;
  transition: opacity 0.8s ease;
}

.slide.is-active {
  opacity: 1;
  pointer-events: auto;
  z-index: 1; /* lift active slide above transition ghost of previous */
}

/* ── Background zoom ──────────────────────────────────────────────── */
.slide-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  pointer-events: none;
  user-select: none;
}

.slide.is-active .slide-bg {
  animation: zoom 9s linear forwards;
}

@keyframes zoom {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.15);
  }
}

/* ── Content stagger ──────────────────────────────────────────────── */
.slide-content {
  position: relative;
  z-index: 2; /* above .slide-bg */
}

.content-item {
  opacity: 0;
  animation: rise 0.8s ease-out forwards;
}

.delay-1 {
  animation-delay: 0.4s;
}
.delay-2 {
  animation-delay: 1.4s;
}
.delay-3 {
  animation-delay: 2.4s;
}
.delay-4 {
  animation-delay: 3.4s;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ── CTA button ───────────────────────────────────────────────────── */
.cta-btn {
  position: relative;
  overflow: hidden;
  padding: 0.75rem 1.5rem;
  width: 150px;
  border: 2px solid var(--color-secondary);
  border-radius: 1rem;
  font-weight: 600;
  color: var(--color-secondary);
  text-decoration: none;
  transition: color 0.4s ease;
  z-index: 2;
}

.cta-btn::after {
  content: "";
  position: absolute;
  inset: 0;
  background: var(--color-secondary);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
  z-index: -1;
}

.cta-btn:hover {
  color: #f2f2f2;
}
.cta-btn:hover::after {
  transform: scaleX(1);
}

/* ── Dot indicators ───────────────────────────────────────────────── */
.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: rgba(255 255 255 / 0.4);
  cursor: pointer;
  transition:
    background 0.3s,
    transform 0.3s;
}

.dot.is-active {
  background: var(--color-secondary);
  transform: scale(1.35);
}

/* ── Brand mark ───────────────────────────────────────────────────── */
.brand-mark {
  width: 60px;
}

.brand-mark::after {
  content: "";
  position: absolute;
  inset: -2px;
  border: 1px solid var(--color-secondary);
  animation: spin 13s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(1turn);
  }
}
</style>
