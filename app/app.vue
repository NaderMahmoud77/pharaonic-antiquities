<template>
  <div class="bg-bgmain dark:bg-[#080326] min-h-screen text-white overflow-x-hidden!">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <!-- Snackbar Favorites -->
    <SnackbarFavorites />
    <!-- Dialog Detelis -->
    <DialogDetelis />
  </div>
</template>

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

<!-- #F4E7D3 -->
<!-- #F2F2F2 -->
<!-- #C4C4C4 -->
<!-- ##fee1c8 -->
<!--  -->
<!-- المتحف المصري -->
<!-- #fbf6f0 -->
<!-- #e6e2dd -->
<!--  -->
<!-- وزاره الاثار -->
<!-- #eae6e4 and ##e4dbcf اللون الاساسي  -->
<!-- لون ال text الاساسي ##131550 -->
<!--  -->
<!-- footer ##e6e2dd -->
<!-- Timeline ##1c2452 -->
<!-- #1A2B4C -->
<!-- #0D1A2A -->
<!-- #0A0A0A -->

<!-- #000957 primary platfrm -->
<!-- #080326 dark platform -->
<!--  dark:bg-[#12083a]/70 nav platform -->
<!-- shadow-md shadow-black/30 dark:shadow-gray-300/20 -->
<!-- dark:bg-[#ffffff1a] card platform -->
<!--  -->
