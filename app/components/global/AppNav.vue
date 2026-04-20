<template>
  <header
    class="bg-textsecondary! fixed top-0 left-0 z-2010 w-full h-[85px] dark:bg-primaryTwo/70! shadow-md! shadow-black/30 dark:shadow-gray-300/20 font-bold uppercase"
  >
    <div
      class="container mx-auto flex items-center justify-between h-full px-4"
    >
      <!-- ── Logo ────────────────────────────────────────────────── -->
      <a
        href="/"
        class="flex-shrink-0 transition-transform duration-300 hover:scale-105 active:scale-95"
      >
        <NuxtImg
          src="/images/logo/logoHero.png"
          alt="Logo"
          :class="[
            'object-cover transition-all duration-500',
            scrolled ? 'w-[100px]' : 'w-[125px]',
          ]"
        />
      </a>

      <!-- ── Desktop Nav ─────────────────────────────────────────── -->
      <nav class="hidden xl:block" aria-label="Main navigation">
        <ul
          class="flex items-center gap-1 text-[14px] font-semibold uppercase tracking-wide"
        >
          <li v-for="link in navLinks" :key="link.title">
            <!-- Plain link -->
            <nuxt-link
              v-if="!link.items"
              :to="localePath(link.to)"
              :prefetch="link.prefetch !== false"
              :class="[
                'relative flex items-center gap-1.5 px-3 py-2 rounded-lg',
                'transition-all duration-200 group',
                isDarkMode
                  ? 'text-textsecondary hover:text-secondary hover:bg-secondary/10!'
                  : 'text-textmain hover:text-primaryTwo hover:bg-primary/15!',
              ]"
            >
              <v-icon size="13" class="opacity-70">{{ link.icon }}</v-icon>
              {{ $t(link.title) }}
            </nuxt-link>

            <!-- Dropdown link -->
            <v-menu
              v-else
              open-on-hover
              z-index="3000"
              :open-delay="80"
              :close-delay="120"
            >
              <template #activator="{ props, isActive }">
                <div
                  v-bind="props"
                  :class="[
                    'relative flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer',
                    'transition-all duration-200 group select-none',
                    isDarkMode
                      ? 'text-textsecondary hover:text-secondary hover:bg-secondary/10'
                      : 'text-textmain hover:text-primaryTwo hover:bg-primary/15',
                  ]"
                >
                  <v-icon size="13" class="opacity-70">{{ link.icon }}</v-icon>
                  {{ $t(link.title) }}

                  <v-icon
                    :icon="mdiChevronDown"
                    size="14"
                    :class="[
                      'transition-transform duration-300 ms-0.5',
                      isActive ? 'rotate-180' : '',
                    ]"
                  />
                </div>
              </template>

              <!-- Dropdown panel -->
              <div
                :class="[
                  'mt-1 min-w-[220px] rounded-2xl overflow-hidden',
                  'border shadow-2xl',
                  isDarkMode
                    ? 'bg-primaryTwo/90 backdrop-blur-xl border-white/8 shadow-black/50'
                    : 'bg-white/95 backdrop-blur-xl border-black/8 shadow-black/15',
                ]"
              >
                <nuxt-link
                  v-for="child in link.items"
                  :key="child.title"
                  :to="localePath(child.to)"
                  :prefetch="link.prefetch !== false"
                  :class="[
                    'flex items-center gap-3 px-4 py-3',
                    'text-[13px] font-semibold uppercase tracking-wide',
                    'transition-all duration-200 group/item',
                    lang === 'ar' ? 'flex-row-reverse' : '',
                    isDarkMode
                      ? 'text-textsecondary hover:text-secondary hover:bg-secondary/10'
                      : 'text-textmain hover:text-primaryTwo hover:bg-primary/10',
                  ]"
                >
                  <span>
                    <v-icon size="13">{{ child.icon }}</v-icon>
                  </span>
                  <span>{{ $t(child.title) }}</span>
                </nuxt-link>
              </div>
            </v-menu>
          </li>
        </ul>
      </nav>

      <!-- ── Right Controls ─────────────────────────────────────── -->
      <div class="flex items-center gap-2">
        <BtnMode />
        <BtnLang />

        <!-- ===== Show Drawer ===== -->
        <button
          class="flex items-center gap-1.5 me-5! xl:hidden!"
          :class="[
            'h-[37px] px-3 rounded-xl',
            'text-sm font-medium tracking-wide',
            'transition-all duration-300 ease-out',
            'hover:scale-105 active:scale-95 group',
            isDarkMode
              ? 'bg-secondary! text-primary! border border-primary/20! hover:shadow-lg hover:shadow-primary/20!'
              : 'bg-primary! text-secondary! border border-secondary/20! hover:shadow-lg hover:shadow-secondary/20!',
          ]"
          @click="toggleDrawer"
        >
          <v-icon>mdi-menu</v-icon>
        </button>
      </div>
    </div>
  </header>
</template>

<!-- ── JS ──────────────────────────────────────────────────────── -->
<script setup>
// icons
import { mdiChevronDown } from "@mdi/js";
import { navLinks } from "~/data/navLinks";
import BtnMode from "../UI/BtnMode";
import BtnLang from "../UI/BtnLang";

const localePath = useLocalePath();
const { isDarkMode } = useDarkMode();
const { lang } = useLang();

// Drawer
const drawer = useDrawer();
function toggleDrawer() {
  drawer.value = !drawer.value;
}

// Scroll-aware shrink
const scrolled = ref(false);
function onScroll() {
  scrolled.value = window.scrollY > 30;
}
onMounted(() => window.addEventListener("scroll", onScroll, { passive: true }));
onBeforeUnmount(() => window.removeEventListener("scroll", onScroll));
</script>

<!-- ── Style  -->
<style scoped>
.router-link-active {
  color: var(--color-primaryTwo);
  background-color: color-mix(in oklab, var(--color-primary) 20%, transparent);
}

.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 0.75rem;
  right: 0.75rem;
  height: 1px;
  border-radius: 999px;
  background: var(--color-primaryTwo);
  transform: scaleX(1);
}

.dark .router-link-active {
  color: var(--color-secondary);
  background-color: color-mix(
    in oklab,
    var(--color-secondary) 15%,
    transparent
  );
}

.dark .router-link-active::after {
  background: var(--color-secondary);
}
</style>
