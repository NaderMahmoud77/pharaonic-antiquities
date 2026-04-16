import { defineStore } from "pinia";

export const useFavoritesStore = defineStore("favorites", {
  state: () => ({
    favorites: [],
  }),

  getters: {
    isFavorite: (state) => (id) =>
      state.favorites.some((item) => item.id == id),
  },

  actions: {
    toggleFavorite(item) {
      if (!this.isFavorite(item.id)) {
        this.favorites.push(item);
      } else {
        this.favorites = this.favorites.filter((i) => i.id != item.id);
      }

      if (import.meta.client) {
        localStorage.setItem("listFavorites", JSON.stringify(this.favorites));
      }
    },

    loadFavorites() {
      if (import.meta.client) {
        const data = localStorage.getItem("listFavorites");
        this.favorites = data ? JSON.parse(data) : [];
      }
    },
  },
});
