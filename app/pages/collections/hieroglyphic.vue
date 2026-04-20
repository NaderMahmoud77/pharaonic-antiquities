<template>
  <section class="container mx-auto px-3">
    <!-- Head -->
    <div
      class="relative z-50 p-4! mt-22! mb-10 md:my-22! bg-textsecondary! dark:bg-[#ffffff1a]! backdrop-blur-2xl"
    >
      <div class="head text-center">
        <div
          class="absolute top-1/2 left-1/2 font-semibold text-lg sm:text-4xl -translate-y-1/2 -translate-x-1/2 tracking-widest"
        >
          <h1 class="text-bold animate-pulse">
            {{ $t("pages.hieroglyphic.title") }}
          </h1>
          <p class="text-lg sm:text-2xl font-extralight text-textsecondary!">
            {{ $t("pages.hieroglyphic.subtitle") }}
          </p>
        </div>
      </div>
    </div>

    <!-- Select -->
    <div class="w-[90%] md:w-1/2! mx-auto!">
      <v-select
        v-model="model"
        :items="items"
        item-title="title"
        item-value="value"
        class="bg-textmain dark:bg-transparent!"
      >
        <template v-slot:item="{ props, item }">
          <v-list-item v-bind="props" :title="null">
            <template #prepend>
              <v-icon
                size="18"
                :icon="item.raw.icon"
                class="text-primaryTwo! dark:text-secondary!"
              />
            </template>

            <v-list-item-title>
              {{ item.raw.title }}
            </v-list-item-title>
          </v-list-item>
        </template>

        <template #selection="{ item }">
          <div class="flex items-center gap-2">
            <v-icon
              size="18"
              :icon="item.raw.icon"
              class="text-primaryTwo! dark:text-secondary!"
            />
            <span>{{ item.raw.title }}</span>
          </div>
        </template>
      </v-select>
    </div>

    <!-- Content -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 my-8">
      <div
        v-for="item in data"
        :key="item.id"
        class="rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
        v-gsap.entrance.slide-left.stagger="{
          duration: 1,
          stagger: 0.4,
        }"
      >
        <!-- IMAGE -->
        <div class="overflow-hidden">
          <img
            :src="item.image"
            :alt="$t(item.name)"
            class="w-full h-60 object-cover hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
        </div>

        <!-- CONTENT -->
        <div class="p-5! pb-2!">
          <h3
            class="text-lg font-semibold mb-2 text-primaryTwo dark:text-secondary"
          >
            {{ $t(item.name) }}
          </h3>

          <div class="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <div
              class="w-6 h-6 rounded-full bg-primaryTwo/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0"
            >
              <v-icon :icon="mdiMapMarker" size="16" />
            </div>
            {{ $t(item.location) }}
          </div>

          <p
            class="text-gray-600 dark:text-gray-400 text-[15px] mb-4 line-clamp-3"
          >
            {{ truncateWords($t(item.description)) }}
          </p>
        </div>
        <div class="flex gap-3 items-center px-5! pb-4!">
          <!-- Button Show Detelis -->
          <BtnShowDeteils :data="item" />
          <BtnFavorites :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<!-- ======= JS ======== -->
<script setup>
import { mdiFileDocumentOutline, mdiFormatText, mdiMapMarker } from "@mdi/js";
let { t } = useI18n();
// Head Title
useHead({
  title: t("all.hieroglyphic_page_title"),
});

// Data
const { data: hieroglyphic } = await useAsyncData("hieroglyphic", () =>
  import("~/data/hieroglyphicPage").then((m) => m.default),
);

// Btns
import BtnFavorites from "~/components/UI/BtnFavorites.vue";
import BtnShowDeteils from "~/components/UI/BtnShowDeteils.vue";

/// splice Words desc
let truncateWords = (text, limit = 14) => {
  let words = text.split(/\s+/);
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

// Select
const items = [
  {
    title: t("pages.hieroglyphic.papyri"),
    icon: mdiFileDocumentOutline,
    value: "papyrus",
  },
  {
    title: t("pages.hieroglyphic.inscriptions"),
    icon: mdiFormatText,
    value: "inscriptions",
  },
];

const model = ref(items[0].value);

// Filtered Data Based on Toggle Selection
let data = computed(() => {
  return hieroglyphic.value?.filter((item) => item.type === model.value);
});
</script>

<!-- ======= Style ======= -->
<style scoped>
.head {
  background-image: url("/images/imagePages/hieroglyphic/hieroglyphic_header.jpg");
  width: 100% !important;
  height: 400px;
  background-position: center;
  background-size: cover;
}
@media (max-width: 767px) {
  .head {
    height: 200px;
  }
}
</style>
