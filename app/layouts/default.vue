<template>
  <v-layout class="relative min-h-screen!">
    <AppNav
      v-if="
        scrollclint >= 130 ||
        (route.path != '/' && route.path != '/en' && route.path != '/ar')
      "
    />
    <v-main>
      <DrawerLink />
      <slot />
    </v-main>
    <AppFooter />
  </v-layout>
</template>

<script setup>
// Component
import DrawerLink from "~/components/UI/DrawerLink.vue";

import { ref, onMounted } from "vue";

// Show nav
let scrollclint = ref(null);
let route = useRoute();
onMounted(() => {
  addEventListener("scroll", () => {
    scrollclint.value = window.scrollY;
  });
});
</script>
