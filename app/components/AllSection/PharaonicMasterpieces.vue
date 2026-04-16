<template>
  <section class="text-primaryTwo dark:text-[#F2F2F2]">
    <div class="container mx-auto px-4">
      <div
        v-gsap.entrance.slide-right.stagger="{
          duration: 1,
          stagger: 0.6,
        }"
      >
        <!-- Title -->
        <h2
          class="text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
        >
          {{ $t("section_pharaonic_masterpieces.title") }}
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
        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-14">
          {{ $t("section_pharaonic_masterpieces.subtitle") }}
        </p>
      </div>

      <!-- ====== Toggle Buttons ====== -->
      <div
        class="d-flex justify-center mb-10"
        v-gsap.entrance.slide-left.stagger="{
          duration: 1,
          stagger: 0.6,
        }"
      >
        <v-btn-toggle
          v-model="toggle"
          class="sm:rounded-lg grid! grid-cols-2! gap-0.5! md:grid-cols-4!"
          divided
          mandatory
        >
          <v-btn
            v-for="button in buttons"
            :key="button.value"
            :value="button.value"
            class="text-textsecondary! bg-textmain! dark:bg-gray-800/30! text-sm! font-serif! px-3! md:px-4!"
          >
            {{ $t(button.label) }}
          </v-btn>
        </v-btn-toggle>
      </div>
      <!-- ====== Artifacts Grid ====== -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <div
          v-for="artifact in data"
          :key="artifact.id"
          class="rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
        >
          <div
            class="overflow-hidden"
            v-gsap.entrance.slide-right="{
              duration: 1.5,
            }"
          >
            <NuxtImg
              :src="artifact.image"
              :alt="$t(artifact.name)"
              class="w-full h-64 object-cover hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>
          <v-divider></v-divider>
          <!-- ====== Content ====== -->
          <div
            class="p-4!"
            v-gsap.entrance.slide-right.stagger="{
              duration: 1.5,
              stagger: 0.3,
            }"
          >
            <h3
              class="text-lg font-semibold my-4 text-primaryTwo dark:text-secondary"
            >
              {{ $t(artifact.name) }}
            </h3>

            <!-- Period -->
            <div class="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <div
                class="w-8 h-8 rounded-full bg-primaryTwo/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0"
              >
                <v-icon size="16">mdi-timeline-clock</v-icon>
              </div>
              {{ $t(artifact.period) }}
            </div>

            <!-- Location -->
            <div class="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <div
                class="w-8 h-8 rounded-full bg-primaryTwo/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0"
              >
                <v-icon size="16">mdi-map-marker</v-icon>
              </div>
              {{ $t(artifact.location) }}
            </div>

            <p class="text-gray-600 dark:text-gray-400 text-[13px] my-2">
              {{ truncateWords($t(artifact.description)) }}
            </p>

            <div class="flex gap-3 items-center">
              <!-- Button Show Detelis -->
              <BtnShowDeteils :data="artifact" />
              <BtnFavorites :item="artifact" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- ========= JS ========= -->
<script setup>
import { computed, ref } from "vue";
// Btn Show Deteils
import BtnShowDeteils from "../UI/BtnShowDeteils.vue";
// Btn Favorite
import BtnFavorites from "../UI/BtnFavorites.vue";
// Data for Pharaonic Masterpieces
import { masterpieces } from "@/data/pharaonicMasterpieces.js";

// Toggle Button State
let toggle = ref("art_sculpture");
// Filtered Data Based on Toggle Selection
let data = computed(() => {
  return masterpieces.filter((item) => item.type === toggle.value);
});

// splice Words desc
let truncateWords = (text, limit = 14) => {
  let words = text.split(/\s+/);
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

// Data Buttons
let buttons = [
  {
    value: "art_sculpture",
    label: "section_pharaonic_masterpieces.categories.art_sculpture",
  },
  {
    value: "architecture",
    label: "section_pharaonic_masterpieces.categories.architecture",
  },
  {
    value: "writing_knowledge",
    label: "section_pharaonic_masterpieces.categories.writing_knowledge",
  },
  {
    value: "rituals_religion",
    label: "section_pharaonic_masterpieces.categories.rituals_religion",
  },
];
</script>

<!-- ========= Style ========= -->
<style scoped>
.v-btn--active {
  font-weight: bold !important;
}
</style>
