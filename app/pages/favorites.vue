<template>
  <section>
    <div class="container mx-auto px-4 my-32!">
      <div v-gsap.magnetic.strong class="cursor-pointer">
        <!-- TITLE -->
        <h2
          class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
        >
          {{ $t("pages.temples.templesTitle") }}
        </h2>
        <p class="item text-center text-gray-600 max-w-2xl mx-auto mb-16!">
          {{ $t("pages.temples.templesSubtitle") }}
        </p>
      </div>

      <!-- GRID -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-gsap.entrance.slide-left.stagger="{
            duration: 1.5, // مدة أطول من default
            stagger: 0.6, // كل عنصر يتأخر عن اللي قبله 0.3s
          }"
          v-for="temp in store.favorites"
          :key="temp.name"
          class="rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
        >
          <!-- IMAGE -->
          <div class="overflow-hidden">
            <img
              :src="temp.image"
              :alt="$t(temp.name)"
              class="w-full h-60 object-cover hover:scale-105 transition-all duration-300"
              loading="lazy"
            />
          </div>

          <!-- CONTENT -->
          <div class="p-5! pb-2!">
            <h3
              class="text-lg font-semibold mb-2 text-primaryTwo dark:text-secondary"
            >
              {{ $t(temp.name) }}
            </h3>

            <p class="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <v-icon size="16">mdi-timeline-clock</v-icon>
              {{ $t(temp.period) }}
            </p>

            <p class="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <v-icon size="16">mdi-map-marker</v-icon>
              {{ $t(temp.location) }}
            </p>

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
import { onMounted } from "vue";
// Btn Show Deteils
import BtnShowDeteils from "~/components/UI/BtnShowDeteils.vue";
// Btn Favorite
import BtnFavorites from "~/components/UI/BtnFavorites.vue";
// Store Favorites
import { useFavoritesStore } from "~/stores/FavoritesStore";

let store = useFavoritesStore();

// onMounted(() => {
//   store.loadFavorite();
//   console.log(store.favorites)
// });
// splice Words desc
let truncateWords = (text, limit = 14) => {
  let words = text.split(/\s+/);
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};
</script>
