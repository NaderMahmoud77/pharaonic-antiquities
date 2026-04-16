<template>
  <Museum
    :data="museums"
    title="pages.museum.museum_page_title"
    subtitle="pages.museum.museum_page_subtitle"
    class="my-32!"
  />
</template>

<!-- ============= JS ============= -->
<script setup>
import { useI18n } from "vue-i18n";
// Components
import Museum from "~/components/AllSection/Museum.vue";
// Data
import { museums } from "~/data/museums";
const { t } = useI18n();

// Page title
useHead({
  title: t("all.museum_page_title"),
});
</script>
