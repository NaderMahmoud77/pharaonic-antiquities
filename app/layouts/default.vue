<template>
  <v-layout class="relative min-h-screen!">
    <!-- Page Loader -->
    <PageLoader />

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

<!-- ===== JS ===== -->
<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

// Components
import DrawerLink from "~/components/UI/DrawerLink.vue";
import PageLoader from "~/components/UI/PageLoader.vue";

// Scroll Nav
const scrollclint = ref(0);

const handleScroll = () => {
  scrollclint.value = window.scrollY;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
