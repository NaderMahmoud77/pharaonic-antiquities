<template>
  <div class="container mx-auto px-4 my-32!">
    <!-- Header -->
    <div class="text-center mb-12">
      <h2
        class="text-3xl md:text-4xl font-bold text-primaryTwo dark:text-secondary mb-4 animate-pulse"
      >
        {{ $t("pages.galleryPage.title") }}
      </h2>

      <div dir="ltr" class="flex items-center justify-center gap-3 mb-4">
        <div
          class="h-px w-16 bg-gradient-to-r from-transparent to-primaryTwo dark:to-secondary"
        ></div>
        <div class="w-2 h-2 rotate-45 bg-primaryTwo dark:bg-secondary"></div>
        <div
          class="h-px w-16 bg-gradient-to-l from-transparent to-primaryTwo dark:to-secondary"
        ></div>
      </div>

      <p class="text-textmain max-w-xl mx-auto text-sm md:text-base">
        {{ $t("pages.galleryPage.desc") }}
        <span class="ml-1 text-primaryTwo dark:text-secondary font-medium">
          ({{ imageLayout.length }})
        </span>
      </p>
    </div>

    <!-- Hint -->
    <div
      class="w-full md:w-fit flex items-center gap-3 mb-6 px-4 py-3 rounded-lg bg-secondary/10 border border-secondary/20"
    >
      <v-icon :icon="mdiInformationOutline" size="18" class="text-secondary" />

      <p class="text-sm md:text-lg text-textmain leading-relaxed">
        {{ $t("pages.galleryPage.imageFullscreenHint") }}
      </p>
    </div>

    <!-- Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <div
        v-for="(image, imgIdx) in imageLayout"
        :key="imgIdx"
        class="relative rounded-xl overflow-hidden cursor-pointer group bg-black hover:border hover:border-primaryTwo! hover:dark:border-secondary!"
        :class="image.cols >= 6 ? 'sm:col-span-2' : ''"
        @click="showDialoggallery(image)"
      >
        <NuxtImg
          :src="image.src"
          :alt="image.name"
          class="w-full h-60 object-cover group-hover:opacity-60 transition-opacity duration-300"
          loading="lazy"
          format="webp"
        />

        <!-- Bottom name strip -->
        <div
          class="absolute bottom-0 left-0 right-0 px-3 py-2 bg-primary/70 dark:bg-secondary/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
        >
          <p
            class="text-secondary! dark:text-primary! text-xs font-semibold truncate"
          >
            {{ image.name }}
          </p>
        </div>
      </div>
    </div>

    <DialogGallery />
  </div>
</template>

<!-- ===== JS ===== -->
<script setup>
import { mdiInformationOutline } from "@mdi/js";
const { t } = useI18n();
useHead({ title: t("all.gallery_page_title") });

// Data
const { data: imageLayout } = await useAsyncData("imageLayout", () =>
  import("~/data/gallery").then((m) => m.imageLayout),
);
// Components
import DialogGallery from "~/components/UI/DialogGallery.vue";

// Emit
const { $emitter } = useNuxtApp();
function showDialoggallery(data) {
  $emitter.emit("openDialogGallery", data);
}
</script>
