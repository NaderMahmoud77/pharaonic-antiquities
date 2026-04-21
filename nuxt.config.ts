// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  css: ["./app/assets/main.css"],

  // Enable experimental payload extraction for better performance
  experimental: {
    payloadExtraction: true,
  },

  app: {
    baseURL: process.env.GH_PAGES ? "/pharaonic-antiquities/" : "/",
    head: {
      script: [
        {
          innerHTML: `
            (function () {
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
              } catch(e){}
            })();
          `,
          tagPosition: "head",
        },
      ],
    },
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

  modules: [
    "@nuxtjs/i18n",
    "nuxt-swiper",
    "@pinia/nuxt",
    "v-gsap-nuxt",
    "@nuxt/image",
  ],

  i18n: {
    defaultLocale: "ar",
    langDir: "locales/",
    // strategy: "prefix",
    lazy: true,
    locales: [
      { code: "ar", name: "العربية", file: "ar.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
  },
});
