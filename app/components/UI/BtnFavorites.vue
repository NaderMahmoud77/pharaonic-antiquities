<template>
  <div>
    <v-btn
      @click="
        favorites.toggleFavorite(props.item), showSnackFavorite(props.item)
      "
      variant="tonal"
      height="42"
      min-width="0"
      class="px-4 hover:scale-110! transition! duration-300!"
    >
      <v-icon
        :class="
          favorites.isFavorite(props.item.id)
            ? 'mdi mdi-heart text-red'
            : 'mdi mdi-heart-outline'
        "
        class="text-red"
        size="18"
      />
    </v-btn>
  </div>
</template>

<!-- ===== JS ===== -->
<script setup>
import { onMounted } from "vue";

import { defineProps } from "vue";
let props = defineProps({
  item: {
    type: Object,
  },
});
// Store
import { useFavoritesStore } from "~/stores/FavoritesStore";
const favorites = useFavoritesStore();

onMounted(() => {
  favorites.loadFavorite();
});
let { $emitter } = useNuxtApp();

function showSnackFavorite(data) {
  $emitter.emit("snackFavorite", data);
}
</script>
