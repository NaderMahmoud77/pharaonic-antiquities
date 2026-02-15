<template>
  <div>
    <v-snackbar
      v-model="snackFavorite"
      location="bottom left"
      :timeout="2500"
      rounded="lg"
      color="success"
    >
      <p v-if="favorites.isFavorite(item.id)" class="sm:text-lg">
        {{ $t(item.name) }} {{ $t("all.favorites.added") }}
      </p>
      <p v-else class="sm:text-lg">
        {{ $t(item.name) }} {{ $t("all.favorites.removed") }}
      </p>

      <template #actions>
        <v-btn icon @click="snackFavorite = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script setup>
import { onMounted } from "vue";

// Show Snackbar
let { $emitter } = useNuxtApp();
let snackFavorite = ref(false);
let item = ref(null);

onMounted(() => {
  $emitter.on("snackFavorite", (data) => {
    item.value = data;
    snackFavorite.value = true;
  });
});

import { useFavoritesStore } from "~/stores/FavoritesStore";
let favorites = useFavoritesStore();
</script>
