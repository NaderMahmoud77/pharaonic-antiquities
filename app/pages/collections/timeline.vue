<template>
  <section class="container mx-auto px-3!">
    <!-- Head -->
    <div class="relative z-50 p-4! my-22! bg-[#ffffff1a]! backdrop-blur-2xl">
      <div class="head text-center">
        <div
          class="absolute top-1/2 left-1/2 font-semibold text-lg sm:text-4xl -translate-y-1/2 -translate-x-1/2 tracking-widest"
        >
          <h1 class="animate-pulse">Timeline</h1>

          <p class="text-xl sm:text-2xl font-extralight text-textsecondary!">
            {{ $t("pages.timeline.subtitle") }}
          </p>
        </div>
      </div>
    </div>
    <!-- Background -->
    <div class="back"></div>

    <!-- TimeLine -->
    <v-timeline
      align="start"
      :density="$vuetify.display.smAndDown ? 'comfortable' : undefined"
      class="mb-6!"
    >
      <v-timeline-item
        v-for="(time, i) in timeline"
        :key="i"
        dot-color="secondary!"
        :size="$vuetify.display.smAndDown ? 'x-small' : 'small'"
      >
        <div
          v-gsap.entrance.slide-left.stagger="{
            duration: 1, // مدة أطول من default
            stagger: 0.4, // كل عنصر يتأخر عن اللي قبله 0.4s
          }"
          :class="`w-full max-w-[500px] sm:max-w-[420px] md:max-w-[480px] backdrop-blur-2xl bg-textsecondary dark:bg-[#ffffff1a] px-4! py-6! rounded-bl-4xl rounded-tr-4xl ${
            lang === 'ar' ? 'text-end!' : 'text-start!'
          }`"
        >
          <NuxtImg
            v-if="time.image"
            :src="time.image"
            :alt="$t(time.title)"
            class="mb-8!"
            loading="lazy"
            format="webp"
          />
          <h1
            class="text-primaryTwo! dark:text-secondary! text-2xl font-semibold mb-4"
          >
            {{ $t(time.title) }}
          </h1>
          <p class="text-textmain dark:text-textsecondary sm:text-lg">
            {{ $t(time.desc) }}
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </section>
</template>

<!-- ========= JS =======s== -->
<script setup>
// Data
import { timeline } from "~/data/timeline";

const { t } = useI18n();
let { lang } = useLang();
// Page Title
useHead({
  title: t("all.timelines_page_title"),
});
</script>

<!-- ========= Style ========= -->
<style scoped>
.head {
  background-image: url("/images/papyri_hieroglyphs/papyrus_4.jpg");
  width: 100% !important;
  height: 400px;
  background-position: center;
  background-size: cover;
}
.back {
  position: fixed;
  inset: 0;
  background-image: url("/images/imagePages/timeline/time_hero2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
