<template>
  <div>
    <HeroSection />
    <PlatformGoal />
    <MuseumSection />
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
// Components
import HeroSection from "~/components/AllSection/HeroSection.vue";
import PlatformGoal from "~/components/AllSection/PlatformGoal.vue";
import MuseumSection from "~/components/AllSection/MuseumSection.vue";
import UniqueArtifacts from "~/components/AllSection/UniqueArtifacts.vue";
import PharaonicMasterpieces from "~/components/AllSection/PharaonicMasterpieces.vue";
import PapyriAndSymbols from "~/components/AllSection/PapyriAndSymbols.vue";
import RoyalMummies from "~/components/AllSection/RoyalMummies.vue";
import ContactUs from "~/components/AllSection/ContactUs.vue";

// Data
import { papyri } from "~/data/papyri_hieroglyphs";
import { sacredSymbols } from "~/data/sacred_symbols";
</script>
