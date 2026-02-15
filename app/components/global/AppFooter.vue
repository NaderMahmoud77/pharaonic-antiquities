<template>
  <v-footer
    app
    absolute
    class="text-center d-flex flex-column ga-2 py-4 bg-[#F2F2F2]! dark:bg-[#12083a]/80! text-textmain! dark:text-white!"
    color="indigo-lighten-1"
    v-gsap.entrance.slide-top.stagger="{
      duration: 1.5,
      stagger: 1,
      threshold: 0.3,
    }"
  >
    <div class="d-flex ga-3">
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        density="comfortable"
        variant="text"
      ></v-btn>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-semibold! opacity-70 text-[18px]!">
      {{ $t("footer.desc") }}
    </div>

    <v-divider></v-divider>

    <div>{{ new Date().getFullYear() }} — <strong>Nader</strong></div>
  </v-footer>
</template>

<!-- -------- JS -------- -->
<script setup>
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
