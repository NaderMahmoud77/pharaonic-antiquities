<template>
  <div>
    <v-btn
      @click="handleToggle"
      variant="tonal"
      height="42"
      min-width="0"
      class="px-4 hover:scale-110! transition! duration-300!"
    >
      <v-icon
        :class="isFav ? 'text-red' : 'text-grey'"
        class="transition-colors duration-200"
        size="18"
      >
        {{ isFav ? "mdi-heart" : "mdi-heart-outline" }}
      </v-icon>
    </v-btn>
  </div>
</template>

<script setup>
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
