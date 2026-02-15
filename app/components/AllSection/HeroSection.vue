<template>
  <section
    class="text-center text-textsecondary relative overflow-hidden min-h-screen"
  >
    <!-- NAVBAR -->
    <NavInHero />
    <!-- Home -->
    <ul class="hero-slider">
      <li
        class="slider-item absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full z-10 grid place-content-center"
        v-for="item in items"
        :key="item.id"
      >
        <div
          v-if="
            (item.id === 'one' && one) ||
            (item.id === 'two' && two) ||
            (item.id === 'three' && three)
          "
        >
          <div
            class="slider-bg absolute top-0 left-0 w-full h-full -z-1 pointer-events-none user-select-none"
          >
            <img
              :src="item.img"
              alt="hero"
              class="w-full h-full object-cover"
            />
          </div>
          <!-- Content -->
          <v-container fluid>
            <div class="relative z-10 tracking-wider container! mx-auto!">
              <!-- Label -->
              <div class="text-center mb-8 item item-1">
                <p
                  class="text-sm font-semibold uppercase text-secondary! tracking-[0.3em]"
                >
                  {{ $t(item.label) }}
                </p>
                <img
                  src="/images/hero/separator.svg"
                  alt="icon"
                  :class="`mx-auto mt-2 ${
                    $i18n.locale === 'ar' ? 'w-[70px]' : 'w-[100px]'
                  }`"
                />
              </div>

              <div class="item item-2">
                <!-- Title  -->
                <h1 class="text-3xl sm:text-5xl md:text-6xl font-semibold mb-4">
                  {{ $t(item.titleOne) }}
                </h1>

                <!-- Title Two -->
                <h2 class="text-2xl sm:text-4xl md:text-5xl font-bold mb-8!">
                  {{ $t(item.titleTwo) }}
                </h2>
              </div>

              <!-- Description -->
              <p class="text-sm sm:text-base text-gray-300 item item-3">
                {{ $t(item.desc) }}
              </p>
            </div>
            <button
              class="btn mt-6 item item-4 animate-bounce absolute z-1000 top-[70%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-secondary! hover:text-[#F2F2F2]! transition-colors! font-semibold! p-3! rounded-2xl overflow-hidden w-[150px] border-2! border-secondary"
            >
              {{ $t("links_nav.artifacts_3d") }}
            </button>
          </v-container>
        </div>
      </li>
    </ul>
    <div
      class="footer absolute bottom-10 z-50 w-[60px] bg-secondary! me-6! sm:me-8! md:me-15! lg:me-25!"
      :class="lang === 'ar' ? 'left-0' : 'right-0'"
    >
      <img src="/images/hero/hero.png" alt="Logo" class="w-full!" />
    </div>
  </section>
</template>

<!-- ============= JS =============== -->
<script setup>
import { ref, onMounted } from "vue";
import { useLang } from "../../composables/UseChangeLang";
let { lang } = useLang();
// Component
import NavInHero from "~/components/AllSection/NavInHero.vue";

// Data
import items from "../../data/hero";

// Slider Logic
const one = ref(false);
const two = ref(true);
const three = ref(false);
onMounted(() => {
  setInterval(() => {
    if (two.value) {
      one.value = true;
      two.value = false;
      three.value = false;
    } else if (one.value) {
      one.value = false;
      two.value = false;
      three.value = true;
    } else if (three.value) {
      one.value = false;
      two.value = true;
      three.value = false;
    }
  }, 9000);
});
</script>

<!-- ============== Style ============== -->
<style scoped>
.slider-bg img {
  animation: smoothScal 7s linear forwards;
}

@keyframes smoothScal {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.15);
  }
}

.item {
  opacity: 0;
  animation: show 1s ease-out forwards;
}

.item-1 {
  animation-delay: 0.5s;
}
.item-2 {
  animation-delay: 2s;
}
.item-3 {
  animation-delay: 3s;
}
.item-4 {
  animation-delay: 4s;
}

@keyframes show {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 0;
  background: var(--color-secondary);
  transition: 0.5s;
  z-index: -1;
}
.btn:hover::after {
  width: 100%;
}

.footer::after {
  content: "";
  position: absolute;
  inset: 0;
  border: 1px solid var(--color-secondary);
  animation: rotate 13s linear infinite;
  z-index: -1;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(1turn);
  }
}
</style>
