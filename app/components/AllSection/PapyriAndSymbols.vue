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
          class="text-4xl font-bold text-center mb-3 text-primaryTwo dark:text-secondary"
        >
          {{ $t(props.title) }}
        </h2>
        <p
          class="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-14"
        >
          {{ $t(props.subtitle) }}
        </p>
      </div>

      <!-- Swiper Buttons -->
      <div
        class="button-container flex m-[21px] mb-4"
        v-gsap.entrance.slide-left.stagger="{
          duration: 1.5,
          stagger: 0.6,
        }"
      >
        <button class="button-3d" @click="prevSlide">
          <div class="button-top"><span class="material-icons">❮</span></div>
          <div class="button-bottom"></div>
          <div class="button-base"></div>
        </button>
        <button class="button-3d" @click="nextSlide">
          <div class="button-top"><span class="material-icons">❯</span></div>
          <div class="button-bottom"></div>
          <div class="button-base"></div>
        </button>
      </div>

      <!-- Swiper -->
      <ClientOnly>
        <Swiper
          @swiper="onSwiper"
          :spaceBetween="30"
          :slidesPerView="3"
          :centeredSlides="true"
          :autoplay="{ delay: 2000, pauseOnMouseEnter: true }"
          :pagination="{ el: paginationRef, clickable: true }"
          :modules="modules"
          :breakpoints="{
            320: { slidesPerView: 1, spaceBetween: 15 }, // الهواتف الصغيرة
            640: { slidesPerView: 2, spaceBetween: 20 }, // الهواتف الكبيرة / تابلت صغير
            1024: { slidesPerView: 3, spaceBetween: 30 }, // شاشات متوسطه / لابتوب
          }"
          loop="true"
          v-gsap.entrance.slide-right.stagger="{
            duration: 2,
          }"
        >
          <SwiperSlide
            v-for="(pap, idx) in props.data"
            :key="idx"
            class="w-[320px] sm:w-[340px] mb-6 rounded-2xl shadow-sm backdrop-blur-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
          >
            <!-- Card -->
            <div
              class="overflow-hidden transition-transform duration-500 hover:-translate-y-2"
            >
              <!-- Image -->
              <img
                :src="pap.image"
                :alt="$t(pap.name)"
                class="h-[268px] w-full"
                loading="lazy"
              />

              <!-- Content -->
              <div class="p-3! text-center">
                <h3
                  class="text-lg font-semibold my-4 text-primaryTwo dark:text-secondary"
                >
                  {{ $t(pap.name) }}
                </h3>

                <!-- Period -->
                <p
                  class="flex items-center justify-center gap-2 text-sm text-gray-500 mt-1"
                >
                  <v-icon size="16">mdi-timeline-clock</v-icon>
                  {{ $t(pap.period) }}
                </p>

                <!-- Location -->
                <p
                  class="flex items-center justify-center gap-2 text-sm text-gray-500 mt-1"
                >
                  <i class="mdi mdi-map-marker text-[16px]"></i>
                  {{ $t(pap.location) }}
                </p>

                <!-- Description -->
                <p class="text-sm text-gray-600 dark:text-gray-400 my-4">
                  {{ truncateWords($t(pap.description)) }}
                </p>

                <!-- Button Show Detelis And Btn Favorites -->
                <div class="flex items-center gap-3 justify-center">
                  <BtnShowDeteils :data="pap" />
                  <BtnFavorites :item="pap" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </ClientOnly>
      <!-- Pagination -->
      <div
        ref="paginationRef"
        class="hieroglyphs-pagination mt-6 flex justify-center"
      ></div>
    </div>
  </section>
</template>

<!-- ============ JS ============= -->
<script setup>
// Btn Show Deteils
import BtnShowDeteils from "../UI/BtnShowDeteils.vue";
// Btn Favorite
import BtnFavorites from "../UI/BtnFavorites.vue";

// Data Import
import { defineProps, ref } from "vue";
let props = defineProps({
  data: {
    type: Array,
    requerd: true,
  },
  title: {
    type: String,
  },
  subtitle: {
    type: String,
  },
});

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
const modules = [EffectCoverflow, Pagination, Autoplay];

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

// reactive pagination
let paginationRef = ref(null);

// splice Words desc
let truncateWords = (text, limit = 6) => {
  let words = text.split(/\s+/);
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};
</script>

<!-- ========== Style ========= -->
<style>
.hieroglyphs-pagination .swiper-pagination-bullet {
  width: 10px !important;
  height: 10px !important;
  background: #fff !important;
  opacity: 0.4;
  transition: all 0.3s ease;
}

.hieroglyphs-pagination .swiper-pagination-bullet-active {
  width: 30px !important;
  border-radius: 9999px !important;
  background-color: var(--color-textmain) !important;
  opacity: 1;
}
.dark .hieroglyphs-pagination .swiper-pagination-bullet {
  background: var(--color-textsecondary) !important;
}
</style>
