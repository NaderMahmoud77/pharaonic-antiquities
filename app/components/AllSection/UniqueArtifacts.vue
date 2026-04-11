<template>
  <section class="my-40! text-primaryTwo dark:text-textsecondary">
    <div class="container mx-auto px-4">
      <div
        v-gsap.entrance.slide-left.stagger="{
          duration: 1.5,
          stagger: 0.6,
        }"
      >
        <!-- Title -->
        <h2
          class="text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
        >
          {{ $t("section_unique_artifacts.title") }}
        </h2>
        <!-- DECORATIVE LINE -->
        <div dir="ltr" class="flex items-center justify-center gap-4 mb-6">
          <div
            class="h-px w-20 bg-gradient-to-r from-transparent to-primaryTwo dark:to-secondary"
          ></div>
          <div class="w-2 h-2 rotate-45 bg-primaryTwo dark:bg-secondary"></div>
          <div
            class="h-px w-20 bg-gradient-to-l from-transparent to-primaryTwo dark:to-secondary"
          ></div>
        </div>

        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {{ $t("section_unique_artifacts.subtitle") }}
        </p>
      </div>

      <!-- Main Content Card -->
      <div
        class="button-container flex! m-[21px]!"
        v-gsap.entrance.slide-left.stagger="{
          duration: 1.5,
          stagger: 0.6,
        }"
      >
        <button class="button-3d" @click="prevSlide">
          <div class="button-top">
            <span class="material-icons">❮</span>
          </div>
          <div class="button-bottom"></div>
          <div class="button-base"></div>
        </button>
        <button class="button-3d" @click="nextSlide">
          <div class="button-top">
            <span class="material-icons">❯</span>
          </div>
          <div class="button-bottom"></div>
          <div class="button-base"></div>
        </button>
      </div>

      <!-- ========= Swiper ======== -->
      <ClientOnly>
        <Swiper
          @swiper="onSwiper"
          effect="coverflow"
          grab-cursor
          :slides-per-view="'auto'"
          :centered-slides="true"
          :spaceBetween="-40"
          :coverflow-effect="coverflowEffect"
          :pagination="{ clickable: true, el: '.bullet-pagination' }"
          :breakpoints="breakpoints"
          :initial-slide="initialSlide"
          :loop="true"
          :modules="modules"
          v-gsap.entrance.slide-right="{
            duration: 2,
          }"
        >
          <SwiperSlide
            v-for="(artifact, idx) in artifacts"
            :key="idx"
            class="rounded-2xl mb-2 w-[330px] shadow-sm backdrop-blur-2xl dark:shadow-gray-300/20 overflow-hidden"
          >
            <div class="overflow-hidden">
              <img
                :src="artifact.image"
                :alt="$t(artifact.name)"
                class="w-full h-64 hover:scale-105 duration-300"
                loading="lazy"
              />
            </div>
            <!-- ============= Content ============= -->
            <div class="p-5! flex flex-col items-center">
              <h3
                class="text-md font-bold my-2 text-center text-primaryTwo dark:text-secondary"
              >
                {{ $t(artifact.name) }}
              </h3>

              <p class="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <v-icon size="16">mdi-timeline-clock</v-icon>
                {{ $t(artifact.period) }}
              </p>

              <p class="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <v-icon size="16">mdi-map-marker</v-icon>
                {{ $t(artifact.location) }}
              </p>
              <p
                class="text-gray-600 dark:text-gray-400 text-[13px] my-3 px-4 text-center line-clamp-6"
              >
                {{ $t(artifact.description) }}
              </p>

              <div class="flex gap-3 items-center">
                <!-- Button Show Detelis -->
                <BtnShowDeteils :data="artifact" />
                <BtnFavorites :item="artifact" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
      <!-- Pagination -->
      <div class="bullet-pagination mt-6 flex justify-center"></div>
    </div>
  </section>
</template>

<!-- ========== JS ========= -->
<script setup>
import { onMounted, ref } from "vue";

// Btn Show Deteils
import BtnShowDeteils from "../UI/BtnShowDeteils.vue";
// Btn Favorite
import BtnFavorites from "../UI/BtnFavorites.vue";
// Swiper Controls
const swiperInstance = ref(null);

function onSwiper(swiper) {
  swiperInstance.value = swiper;
}

function nextSlide() {
  swiperInstance.value?.slideNext();
}

function prevSlide() {
  swiperInstance.value?.slidePrev();
}
// Swiper Imports
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const modules = [EffectCoverflow, Pagination];

const coverflowEffect = ref({
  rotate: 0,
  stretch: 0,
  depth: 180,
  modifier: 2.5,
  slideShadows: false,
});

const breakpoints = {
  320: {
    slidesPerView: 1.2,
    spaceBetween: -10,
  },
  480: {
    slidesPerView: 1.8,
    spaceBetween: -20,
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: -30,
  },
  1024: {
    slidesPerView: 3.5,
    spaceBetween: -40,
  },
  1280: {
    slidesPerView: 5,
    spaceBetween: -40,
  },
};

// Adjust coverflow for responsive
onMounted(() => {
  const width = window.innerWidth;

  if (width <= 480)
    coverflowEffect.value = {
      rotate: 0,
      stretch: 0,
      depth: 80,
      modifier: 1.2,
      slideShadows: false,
    };
  else if (width <= 768)
    coverflowEffect.value = {
      rotate: 0,
      stretch: 0,
      depth: 120,
      modifier: 1.5,
      slideShadows: false,
    };
  else if (width <= 1024)
    coverflowEffect.value = {
      rotate: 0,
      stretch: 0,
      depth: 150,
      modifier: 2,
      slideShadows: false,
    };
});
console.log([] + []);
// Data
import { artifacts } from "~/data/uniqueArtifacts";

const initialSlide = Math.floor(artifacts.length / 2);
</script>

<!-- = Style = -->
<style>
.bullet-pagination .swiper-pagination-bullet {
  width: 10px !important;
  height: 10px !important;
  background: #fff !important;
  opacity: 0.4;
  transition: all 0.3s ease;
}

.bullet-pagination .swiper-pagination-bullet-active {
  width: 30px !important;
  border-radius: 9999px !important;
  background-color: var(--color-textmain) !important;
  opacity: 1;
}
.dark .bullet-pagination .swiper-pagination-bullet {
  background: var(--color-textsecondary) !important;
}
</style>
