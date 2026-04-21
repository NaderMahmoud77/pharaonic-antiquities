// import this after install `@mdi/font` package

import "vuetify/styles";
import { createVuetify } from "vuetify";
import { defineNuxtPlugin } from "#app";

// 👇 استيراد SVG icons
import { aliases, mdi } from "vuetify/iconsets/mdi-svg";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  });

  app.vueApp.use(vuetify);
});
