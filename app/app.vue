<template>
  <div
    class="bg-bgmain dark:bg-[#080326] min-h-screen text-white overflow-x-hidden!"
  >
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- Snackbar Favorites -->
    <SnackbarFavorites />
    <!-- Dialog Detelis -->
    <DialogDetelis />
  </div>
</template>

<!-- ========== JS ========== -->
<script setup>
// SnackBar
import SnackbarFavorites from "~/components/UI/SnackbarFavorites.vue";
import DialogDetelis from "./components/UI/DialogDetelis.vue";
</script>

<!-- ========== Style ========== -->
<style>
@font-face {
  font-family: Playfair;
  src: url("/fonts/PlayfairDisplay-Black.ttf");
}
body {
  font-family: Playfair !important;
}

/* ===== Scrollbar Styling ===== */
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: var(--color-secondary);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary);
}

/* Transition from nuxt */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
