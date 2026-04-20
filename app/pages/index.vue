<template>
  <div>
    <!-- All Sections -->
    <HeroSection />
    <PlatformGoal />
    <Museum
      :data="featuredMuseums"
      title="section_museums.museumsTitle"
      subtitle="section_museums.museumsSubtitle"
    />
    <UniqueArtifacts />
    <PharaonicMasterpieces />
    <PapyriAndSymbols
      :data="papyri"
      title="section_hieroglyphs.title"
      subtitle="section_hieroglyphs.subtitle"
    />
    <RoyalMummies />
    <PapyriAndSymbols
      :data="sacredSymbols"
      title="section_sacred_symbols.title"
      subtitle="section_sacred_symbols.subtitle"
    />
    <ContactUs />
  </div>
</template>

<!-- ============= JS =============== -->
<script setup>
const { t } = useI18n();

useHead({
  title: t("all.home_page_title"),
});
// Components
import HeroSection from "~/components/AllSection/HeroSection.vue";

import PlatformGoal from "~/components/AllSection/PlatformGoal.vue";

const Museum = defineAsyncComponent(
  () => import("~/components/AllSection/Museum.vue"),
);

const UniqueArtifacts = defineAsyncComponent(
  () => import("~/components/AllSection/UniqueArtifacts.vue"),
);

const PharaonicMasterpieces = defineAsyncComponent(
  () => import("~/components/AllSection/PharaonicMasterpieces.vue"),
);

const PapyriAndSymbols = defineAsyncComponent(
  () => import("~/components/AllSection/PapyriAndSymbols.vue"),
);

const RoyalMummies = defineAsyncComponent(
  () => import("~/components/AllSection/RoyalMummies.vue"),
);

const ContactUs = defineAsyncComponent(
  () => import("~/components/AllSection/ContactUs.vue"),
);

// Data
import { papyri } from "~/data/papyri_hieroglyphs";
import { sacredSymbols } from "~/data/sacred_symbols";
import { museums } from "~/data/museums";
const featuredMuseums = computed(() => museums.slice(0, 6));
</script>
