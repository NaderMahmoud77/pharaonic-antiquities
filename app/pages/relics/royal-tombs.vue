<template>
  <section class="container mx-auto px-4 my-32!">
    <div v-gsap.magnetic.strong class="cursor-pointer">
      <!-- TITLE -->
      <h2
        class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
      >
        {{ $t("pages.royal_tombs.title") }}
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
        {{ $t("pages.royal_tombs.subtitle") }}
      </p>
    </div>

    <!-- Tombs Grid -->
    <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="tomb in paginatedTombs"
        :key="tomb.id"
        class="rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
        v-gsap.entrance.slide-left.stagger="{
          duration: 1.5, // مدة أطول من default
          stagger: 0.6, // كل عنصر يتأخر عن اللي قبله 0.3s
        }"
      >
        <!-- IMAGE -->
        <div class="overflow-hidden">
          <img
            :src="tomb.image"
            :alt="$t(tomb.name)"
            class="w-full h-60 object-cover hover:scale-105 transition-all duration-300"
            loading="lazy"
          />
        </div>

        <!-- CONTENT -->
        <div class="p-5! pb-2!">
          <h3
            class="text-lg font-semibold mb-2 text-primaryTwo dark:text-secondary"
          >
            {{ $t(tomb.name) }}
          </h3>

          <p class="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <v-icon size="16">mdi-timeline-clock</v-icon>
            {{ $t(tomb.period) }}
          </p>

          <p class="flex items-center gap-2 text-sm text-gray-500 mt-1">
            <v-icon size="16">mdi-map-marker</v-icon>
            {{ $t(tomb.location) }}
          </p>

          <p
            class="text-gray-600 dark:text-gray-400 text-[15px] mb-4 line-clamp-3"
          >
            {{ $t(tomb.description) }}
          </p>
        </div>
        <!-- Buttons -->
        <div class="flex gap-3 items-center px-5! pb-4!">
          <!-- Button Show Detelis -->
          <BtnShowDeteils :data="tomb" />
          <BtnFavorites :item="tomb" />
        </div>
      </article>
    </div>

    <!-- Pagination -->
    <div class="flex justify-center mt-10">
      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        color="primary"
        size="large"
        circle
      />
    </div>
  </section>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
// Head title
useHead({
  title: t("all.royal_tombs_page_title"),
});

// Data
import { royalTombs } from "~/data/royalTombs";
// Btn Show Deteils
import BtnShowDeteils from "~/components/UI/BtnShowDeteils.vue";
// Btn Favorite
import BtnFavorites from "~/components/UI/BtnFavorites.vue";

import { ref, computed } from "vue";

// Pagination
const currentPage = ref(1);
const itemsPerPage = 6; // عدد العناصر لكل صفحة

const totalPages = computed(() => Math.ceil(royalTombs.length / itemsPerPage));

const paginatedTombs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return royalTombs.slice(start, end);
});
</script>
