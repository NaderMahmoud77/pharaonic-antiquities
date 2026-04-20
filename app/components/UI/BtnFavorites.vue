<template>
  <div>
    <v-btn
      @click="handleToggle"
      variant="tonal"
      height="42"
      min-width="0"
      class="bg-primaryTwo/10! dark:bg-secondary/10! flex items-center justify-center"
    >
      <v-icon
        :icon="isFav ? mdiHeart : mdiHeartOutline"
        :class="isFav ? 'text-red' : 'text-grey'"
        class="transition-colors duration-200"
        size="18"
      />
    </v-btn>
  </div>
</template>

<!-- ===== JS ===== -->
<script setup>
// Icons
import { mdiHeart, mdiHeartOutline } from "@mdi/js";
// 
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const favoritesStore = useFavoritesStore();

// ✅ No callOnce here — page already loaded favorites, avoid duplicate calls
const isFav = computed(() => favoritesStore.isFavorite(props.item.id));

const { $emitter } = useNuxtApp();

function handleToggle() {
  favoritesStore.toggleFavorite(props.item);
  $emitter.emit("snackFavorite", props.item);
}
</script>
