// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  css: ["./app/assets/main.css"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  // 👇 مهم جدًا لـ Netlify
  nitro: {
    preset: "netlify",
  },

  // Vuetify
  build: {
    transpile: ["vuetify"],
  },

  vite: {
    plugins: [vuetify({ autoImport: true }), tailwindcss()],
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },

  modules: ["@nuxtjs/i18n", "nuxt-swiper", "@pinia/nuxt", "v-gsap-nuxt"],

  i18n: {
    defaultLocale: "ar",
    langDir: "locales/",
    locales: [
      { code: "ar", name: "العربية", file: "ar.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
  },
});
