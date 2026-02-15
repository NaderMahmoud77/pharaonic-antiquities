import { defineStore } from "pinia";

export let useFavoritesStore = defineStore("favorites", {
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
      localStorage.setItem("listFavorites", JSON.stringify(this.favorites));
    },
    loadFavorite() {
      // console.log("yes");
      if (import.meta.client) {
        let data = localStorage.getItem("listFavorites");
        this.favorites = data ? JSON.parse(data) : [];
      }
    },
  },
});
