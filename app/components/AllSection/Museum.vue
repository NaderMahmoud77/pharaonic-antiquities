<template>
  <section>
    <div class="container mx-auto px-4">
      <div
        v-gsap.entrance.slide-right.stagger="{
          duration: 1, // مدة أطول من default
          stagger: 0.6, // كل عنصر يتأخر عن اللي قبله 0.3s
        }"
      >
        <!-- TITLE -->
        <h2
          class="text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
        >
          {{ $t(title) }}
        </h2>
        <!-- DECORATIVE LINE -->
        <div dir="ltr" class="flex items-center justify-center gap-4 mb-6">
          <div
            class="h-px w-20 bg-gradient-to-r from-transparent to-primaryTwo dark:to-secondary"
          ></div>
          <div class="w-2 h-2 rotate-45 bg-primaryTwo dark:bg-secondary"></div>
          <div
            class="h-px w-20 bg-gradient-to-l from-transparent to-primaryTwo dark:to-secondary"
          ></div>
        </div>

        <p class="text-center text-gray-600 max-w-2xl mx-auto mb-12">
          {{ $t(subtitle) }}
        </p>
      </div>

      <!-- GRID -->
      <div
        class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        v-gsap.entrance.slide-left.stagger="{
          duration: 1,
          stagger: 0.6,
        }"
      >
        <div
          v-for="museum in data"
          :key="museum.name"
          class="rounded-2xl shadow-sm dark:shadow-gray-300/20 overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
          v-gsap.entrance.slide-left.stagger="{
            duration: 1,
            stagger: 0.8,
          }"
        >
          <!-- IMAGE -->
          <div class="overflow-hidden">
            <NuxtImg
              :src="museum.image"
              :alt="$t(museum.name)"
              class="w-full h-60 object-cover hover:scale-105 transition-all duration-300"
              loading="lazy"
            />
          </div>

          <!-- CONTENT -->
          <div class="p-5! pb-2!">
            <h3
              class="text-lg font-semibold mb-2 text-primaryTwo dark:text-secondary"
            >
              {{ $t(museum.name) }}
            </h3>

            <div class="flex items-center gap-2 text-sm text-gray-500 mt-1">
              <div
                class="w-8 h-8 rounded-full bg-primaryTwo/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0"
              >
                <v-icon size="16">mdi-map-marker</v-icon>
              </div>
              {{ $t(museum.location) }}
            </div>

            <!-- WEBSITE BUTTON -->
            <a
              v-if="museum.website"
              :href="museum.website"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 w-fit text-sm py-2 text-gray-500"
              aria-label="Visit official website"
            >
              <div
                class="w-8 h-8 rounded-full bg-primaryTwo/10 dark:bg-secondary/10 flex items-center justify-center flex-shrink-0"
              >
                <v-icon size="16">mdi-web</v-icon>
              </div>
              {{ $t("section_museums.visitWebsite") }}
            </a>

            <p
              class="text-gray-600 dark:text-gray-400 text-[15px] mb-4 line-clamp-3"
            >
              {{ truncateWords($t(museum.description)) }}
            </p>
          </div>

          <div class="flex gap-3 items-center px-5! pb-4!">
            <!-- Button Show Detelis -->
            <BtnShowDeteils :data="museum" />
            <BtnFavorites :item="museum" />
          </div>
        </div>
      </div>
      <!-- ==== Btn see more ==== -->
      <div class="mt-14" v-if="data.length < 7">
        <nuxt-link to="/museums">
          <button
            v-gsap.entrance.slide-right="{ duration: 2 }"
            class="relative mx-auto bg-textmain! dark:bg-[#ffffff1a]! text-white font-medium text-[17px] px-4 py-[0.35em] pl-5 h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group"
          >
            <span class="mr-10">{{ $t("section_museums.seeMore") }}</span>
            <div
              class="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                class="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                ></path>
              </svg>
            </div>
          </button>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<!-- =========== JS  =========== -->
<script setup>
// Museums Data
defineProps({
  data: Array,
  title: String,
  subtitle: String,
});
// Btn Show Deteils
import BtnShowDeteils from "../UI/BtnShowDeteils.vue";
// Btn Favorite
import BtnFavorites from "../UI/BtnFavorites.vue";

// splice Words desc
let truncateWords = (text, limit = 14) => {
  let words = text.split(/\s+/);
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};
</script>
