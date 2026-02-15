<template>
  <section class="my-40! text-primaryTwo dark:text-textsecondary">
    <div
      v-gsap.entrance.slide-left="{
        duration: 1.5, // مدة أطول من default
      }"
    >
      <!-- Title -->
      <h3
        class="text-center font-semibold text-2xl md:text-4xl text-primaryTwo dark:text-secondary"
      >
        {{ $t("section_platform_goal.title") }}
      </h3>
      <p
        class="mx-auto w-[42px] h-0.5 bg-textmain dark:bg-textsecondary mt-2"
      ></p>
    </div>

    <!-- Main Content Card -->
    <v-container
      class="border rounded-2xl mt-14 shadow-sm backdrop-blur-sm dark:shadow-gray-300/20"
    >
      <div
        v-gsap.entrance.slide-right.stagger="{
          duration: 1.5, // مدة أطول من default
          stagger: 0.6, // كل عنصر يتأخر عن اللي قبله 0.3s
        }"
        :class="
          lang === 'ar'
            ? 'sm:flex! sm:flex-row-reverse! flex-wrap!'
            : 'sm:flex! flex-wrap!'
        "
        class="justify-around items-center"
      >
        <!-- Text -->
        <p
          class="leading-[1.9] sm:max-w-[50%] text-[15px] md:text-[18px] text-center text-textmain dark:text-white opacity-80"
        >
          {{ $t("section_platform_goal.paragraph") }}
        </p>

        <!-- Image -->
        <div>
          <img
            src="/images/sections/masc.png"
            alt="Pharaonic Statue"
            class="w-[162px] sm:w-[220px] my-10 sm:mt-0 mx-auto"
            loading="lazy"
          />
        </div>
      </div>

      <!-- Features Icons -->
      <div
        class="grid grid-cols-3 gap-2 mt-8 text-center text-textmain dark:text-secondary"
        v-gsap.entrance.slide-left.stagger="{
          duration: 1.5,
          stagger: 0.6,
        }"
      >
        <div v-for="(item, i) in featuer" :key="i">
          <v-icon size="32">
            {{ item.icon }}
          </v-icon>
          <p class="mt-2 text-sm opacity-75">
            {{ $t(item.title) }}
          </p>
        </div>
      </div>
    </v-container>
  </section>
</template>

<!-- ============== JS  ============== -->
<script setup>
// Lang
import { useLang } from "../../composables/UseChangeLang";
let { lang } = useLang();

// Data Icon Featuer
let featuer = [
  { icon: "mdi-bank", title: "section_platform_goal.feature1" },
  { icon: "mdi-temple-buddhist", title: "section_platform_goal.feature2" },
  { icon: "mdi-skull", title: "section_platform_goal.feature3" },
];
</script>
