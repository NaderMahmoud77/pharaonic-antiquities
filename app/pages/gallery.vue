<template>
  <div class="container mx-auto px-4 my-32!">
    <div>
      <!-- TITLE -->
      <h2
        class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
      >
        {{ $t("pages.galleryPage.title") }}
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
      <p class="item text-center text-gray-600 max-w-2xl mx-auto mb-16!">
        {{ $t("pages.galleryPage.desc") }} - {{ imageLayout.length }}
      </p>
    </div>
    <!-- Hint -->
    <h1
      class="text-textmain! dark:text-textsecondary! mb-4 font-semibold text-lg sm:text-2xl"
    >
      {{ $t("pages.galleryPage.imageFullscreenHint") }}
    </h1>
    <v-row>
      <template v-for="(image, imgIdx) in imageLayout" :key="imgIdx">
        <v-col cols="12" sm="6" :md="image.cols">
          <div class="overflow-hidden">
            <v-lazy :min-height="280" transition="fade-transition">
              <img
                :src="image.src"
                :alt="image.name"
                class="w-full object-cover cursor-pointer h-[500px] md:h-[400px] hover:scale-110 duration-300"
                @click="showDialoggallery(image)"
              />
            </v-lazy>
          </div>
        </v-col>
      </template>
    </v-row>
    <DialogGallery />
  </div>
</template>

<!-- ===== JS ===== -->
<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useHead({
  title: t("all.gallery_page_title"),
});
// Data Image
import { imageLayout } from "~/data/gallery";
// Compo Dialog Gallery
import DialogGallery from "~/components/UI/DialogGallery.vue";

// Show DialogGallery
let { $emitter } = useNuxtApp();

function showDialoggallery(data) {
  $emitter.emit("openDialogGallery", data);
}
</script>
