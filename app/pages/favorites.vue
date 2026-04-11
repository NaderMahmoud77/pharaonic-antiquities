<template>
  <section>
    <div class="container mx-auto px-4 my-32!">
      <div v-gsap.magnetic.strong class="cursor-pointer">
        <h2
          class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
        >
          {{ $t("pages.favorite.title") }}
        </h2>
        <p class="item text-center text-gray-600 max-w-2xl mx-auto mb-16!">
          {{ $t("pages.favorite.desc") }}
        </p>
      </div>

      <!-- EMPTY STATE -->
      <div
        v-if="store.favorites.length === 0"
        class="text-center text-gray-400 mt-20"
      >
        <v-icon size="48">mdi-heart-off-outline</v-icon>
        <p class="mt-4 text-lg">{{ $t("all.no_favorites") }}</p>
      </div>

      <!-- GRID -->
      <div v-else class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-gsap.entrance.slide-left.stagger="{ duration: 1.5, stagger: 0.6 }"
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

            <p class="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <v-icon size="16">mdi-timeline-clock</v-icon>
              {{ safeT(temp.period) }}
            </p>

            <p class="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <v-icon size="16">mdi-map-marker</v-icon>
              {{ safeT(temp.location) }}
            </p>

            <!-- ✅ safeT + truncate — no more crash on raw description text -->
            <p
              class="text-gray-600 dark:text-gray-400 text-[15px] mb-4 line-clamp-3"
            >
              {{ truncateWords(safeT(temp.description)) }}
            </p>
          </div>

          <div class="flex gap-3 items-center px-5! pb-4!">
            <BtnShowDeteils :data="temp" />
            <BtnFavorites :item="temp" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n();

useHead({
  title: t("all.favorites_page_title"),
});

const store = useFavoritesStore();
await callOnce(() => store.loadFavorites());

// ✅ Safe translate: if the key doesn't exist in i18n, return it as raw text
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
