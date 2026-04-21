<template>
  <section>
    <div class="container mx-auto px-4 my-32!">
      <div>
        <!-- Title -->
        <h2
          class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
        >
          {{ $t("pages.favorite.title") }}
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
        <p class="item text-center text-textmain max-w-2xl mx-auto mb-16!">
          {{ $t("pages.favorite.desc") }}
        </p>
      </div>

      <!-- EMPTY STATE -->
      <div
        v-if="store.favorites.length === 0"
        class="flex flex-col items-center justify-center text-center mt-20 py-16 px-6 rounded-3xl bg-gray-50 dark:bg-gray-800/40 border border-dashed border-gray-200 dark:border-gray-700 max-w-lg mx-auto"
      >
        <!-- Icon bubble -->
        <div
          class="w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-rose-50 dark:bg-rose-900/30 text-rose-400 dark:text-rose-300"
        >
          <v-icon size="40" :icon="mdiHeartOffOutline" />
        </div>

        <h3 class="text-xl font-semibold text-gray-700 dark:text-gray-200 mb-2">
          {{ $t("all.favorites.no_favorites") }}
        </h3>

        <p
          class="text-sm text-gray-400 dark:text-gray-500 max-w-xs leading-relaxed"
        >
          {{ $t("all.favorites.no_favorites_hint") }}
        </p>

        <!-- CTA -->
        <NuxtLink
          :to="$localePath('/')"
          class="mt-8 inline-flex items-center gap-2 px-5! py-2.5! rounded-xl text-sm font-medium bg-primaryTwo! dark:bg-secondary! text-white! dark:text-gray-900! hover:opacity-90! transition-all"
        >
          <v-icon size="16" :icon="mdiCompassOutline" />
          {{ $t("all.favorites.explore_btn") }}
        </NuxtLink>
      </div>

      <!-- GRID -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-gsap.entrance.slide-left.stagger="{ duration: 1, stagger: 0.4 }"
          v-for="temp in store.favorites"
          :key="temp.id"
          class="rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
        >
          <div class="overflow-hidden">
            <img
              :src="temp.image"
              :alt="safeT(temp.name)"
              class="w-full h-60 object-cover hover:scale-105 transition-all duration-300"
              loading="lazy"
            />
          </div>

          <div class="p-5! pb-2!">
            <h3
              class="text-lg font-semibold mb-2 text-primaryTwo dark:text-secondary"
            >
              {{ safeT(temp.name) }}
            </h3>

            <div
              v-if="temp.period"
              class="flex items-center gap-2 text-sm text-gray-500 mt-1"
            >
              <div
                class="w-6 h-6 rounded-full bg-primaryTwo/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0"
              >
                <v-icon size="16" :icon="mdiTimelineClock" />
              </div>
              {{ safeT(temp.period) }}
            </div>

            <div class="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <div
                class="w-6 h-6 rounded-full bg-primaryTwo/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0"
              >
                <v-icon size="16" :icon="mdiMapMarker" />
              </div>
              {{ safeT(temp.location) }}
            </div>

            <!--  safeT + truncate — no more crash on raw description text -->
            <p
              class="text-gray-600 dark:text-gray-400 text-[15px] mb-4 line-clamp-3"
            >
              {{ truncateWords(safeT(temp.description)) }}
            </p>
            <!-- Remove from favorites button -->
            <button
              @click.stop="removeItem(temp)"
              :title="$t('all.favorites.remove')"
              class="w-[34px] h-[34px] rounded-full flex items-center justify-center bg-white/80! dark:bg-[#1e2025]/80! text-[#E24B4A]! dark:text-[#F09595]! hover:bg-[#E24B4A]! dark:hover:bg-[#A32D2D]! hover:text-white! dark:hover:text-[#FCEBEB]! transition-all duration-200 active:scale-90!"
            >
              <v-icon size="18" :icon="mdiTrashCanOutline" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<!-- ====== JS ====== -->
<script setup>
// Icons
import {
  mdiHeartOffOutline,
  mdiCompassOutline,
  mdiTimelineClock,
  mdiMapMarker,
  mdiTrashCanOutline,
} from "@mdi/js";

const { t } = useI18n();

useHead({
  title: t("all.favorites_page_title"),
});

// Load favorites once when the component is mounted
const store = useFavoritesStore();
onMounted(() => {
  store.loadFavorites();
});

const removeItem = (item) => {
  store.toggleFavorite(item); // toggleFavorite removes if already favorited
};

//  Safe translate: if the key doesn't exist in i18n, return it as raw text
const safeT = (key) => {
  if (!key || typeof key !== "string") return key ?? "";
  try {
    const result = t(key);
    // vue-i18n returns the key itself when not found — that's fine
    return result;
  } catch {
    return key;
  }
};

const truncateWords = (text, limit = 14) => {
  if (!text) return "";
  const words = text.split(/\s+/);
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};
</script>
