<template>
  <div>
    <v-snackbar
      v-model="snackFavorite"
      location="bottom left"
      :timeout="2500"
      width="auto"
      class="!bg-transparent !shadow-none"
    >
      <!-- Toast Card -->
      <div
        class="flex items-center gap-3 px-2 py-3 rounded-2xl backdrop-blur-xl border transition-all duration-300 shadow-lg bg-white/70 border-white/30 dark:bg-[#0b0730]/70 dark:border-white/10 animate-in fade-in slide-in-from-bottom-2"
      >
        <!-- Status Dot -->
        <div
          class="w-2 h-2 rounded-full shrink-0 bg-textmain"
          :class="isFav ? 'dark:bg-secondary!' : 'bg-red-400!'"
        ></div>

        <!-- Icon -->
        <div
          class="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300"
          :class="
            isFav
              ? 'bg-secondary/20! text-primary! ring-1 ring-secondary/40! shadow-sm dark:bg-[rgba(228,197,144,0.15)] dark:text-secondary! dark:shadow-[0_0_12px_rgba(228,197,144,0.25)]'
              : 'bg-red-50 text-red-600 ring-1 ring-red-200 shadow-sm dark:bg-red-500/10 dark:text-red-300 dark:ring-red-500/20'
          "
        >
          <!-- Added -->
          <svg
            v-if="isFav"
            class="w-5 h-5"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                 C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42
                 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>

          <!-- Removed -->
          <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path
              opacity=".3"
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09
                 C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42
                 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
            <line
              x1="4"
              y1="4"
              x2="20"
              y2="20"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <!-- Text -->
        <div class="flex-1 min-w-0">
          <p
            class="text-sm font-semibold truncate text-gray-900 dark:text-white"
          >
            {{ itemName }}
          </p>

          <p
            class="text-xs mt-0.5 opacity-70 text-textmain"
            :class="isFav ? 'dark:text-secondary!' : 'dark:text-red-400!'"
          >
            {{
              isFav ? $t("all.favorites.added") : $t("all.favorites.removed")
            }}
          </p>
        </div>

        <!-- Close -->
        <button
          @click="snackFavorite = false"
          class="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition"
        >
          <v-icon
            class="text-gray-600 dark:text-white text-sm"
            :icon="mdiClose"
          />
        </button>
      </div>
    </v-snackbar>
  </div>
</template>

<!-- ==== Script ==== -->
<script setup>
import { mdiClose } from "@mdi/js";
import { useFavoritesStore } from "~/stores/FavoritesStore";

const favorites = useFavoritesStore();

let snackFavorite = ref(false);
let item = ref(null);

const isFav = computed(() =>
  item.value ? favorites.isFavorite(item.value.id) : false,
);

const itemName = computed(() => (item.value ? $t(item.value.name) : ""));

let { $emitter } = useNuxtApp();

onMounted(() => {
  $emitter.on("snackFavorite", (data) => {
    item.value = data;
    snackFavorite.value = true;
  });
});
</script>
