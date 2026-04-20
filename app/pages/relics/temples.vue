<template>
  <section>
    <div class="container mx-auto px-4 my-32!">
      <div>
        <!-- TITLE -->
        <h2
          class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
        >
          {{ $t("pages.temples.templesTitle") }}
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
        <!-- SUBTITLE -->
        <p class="item text-center text-gray-600 max-w-2xl mx-auto mb-16!">
          {{ $t("pages.temples.templesSubtitle") }}
        </p>
      </div>

      <!-- GRID -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-gsap.entrance.slide-left.stagger="{
            duration: 1, // مدة أطول من default
            stagger: 0.4, // كل عنصر يتأخر عن اللي قبله 0.4s
          }"
          v-for="temp in temples"
          :key="temp.name"
          class="rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
        >
          <!-- IMAGE -->
          <div class="overflow-hidden">
            <NuxtImg
              :src="temp.image"
              :alt="$t(temp.name)"
              class="w-full h-60 object-cover hover:scale-105 transition-all duration-300"
              loading="lazy"
              format="webp"
            />
          </div>

          <!-- CONTENT -->
          <div class="p-5! pb-2!">
            <h3
              class="text-lg font-semibold mb-2 text-primaryTwo dark:text-secondary"
            >
              {{ $t(temp.name) }}
            </h3>

            <div class="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <div
                class="w-7 h-7 rounded-full bg-primaryTwo/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0"
              >
                <v-icon :icon="mdiTimelineClock" size="16" />
              </div>
              {{ $t(temp.period) }}
            </div>

            <div class="flex items-center gap-2 text-sm text-textmain mt-1">
              <div
                class="w-7 h-7 rounded-full bg-primaryTwo/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0"
              >
                <v-icon :icon="mdiMapMarker" size="16" />
              </div>
              {{ $t(temp.location) }}
            </div>

            <p
              class="text-gray-600 dark:text-gray-400 text-[15px] mb-4 line-clamp-3"
            >
              {{ truncateWords($t(temp.description)) }}
            </p>
          </div>
          <!-- Buttons -->
          <div class="flex gap-3 items-center px-5! pb-4!">
            <!-- Button Show Detelis -->
            <BtnShowDeteils :data="temp" />
            <BtnFavorites :item="temp" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- =========== JS  =========== -->
<script setup>
import { mdiTimelineClock, mdiMapMarker } from "@mdi/js";
const { t } = useI18n();
// Page Title
useHead({
  title: t("all.temples_page_title"),
});
// Museums Data
const { data: temples } = await useAsyncData("temples", () =>
  import("~/data/temples").then((m) => m.temples),
);
// Btn Show Deteils
import BtnShowDeteils from "~/components/UI/BtnShowDeteils.vue";
// Btn Favorite
import BtnFavorites from "~/components/UI/BtnFavorites.vue";

// splice Words desc
let truncateWords = (text, limit = 14) => {
  let words = text.split(/\s+/);
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};
</script>
