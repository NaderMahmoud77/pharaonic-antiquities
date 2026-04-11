<template>
  <h1 class="m-40! text-4xl">صفحه المتاحف</h1>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

// Page title
useHead({
  title: t("all.museum_page_title"),
});
</script>
