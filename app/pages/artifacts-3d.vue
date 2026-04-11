<template>
  <div class="container mx-auto px-4 my-32!">
    <!-- ========== Header ========== -->
    <div class="text-center mb-10">
      <h2
        class="animate-pulse text-2xl md:text-4xl font-bold text-center text-primaryTwo dark:text-secondary mb-3"
      >
        {{ $t("all.artifacts_page_title") }}
      </h2>

      <!-- Decorative Line -->
      <div dir="ltr" class="flex items-center justify-center gap-4 mb-6">
        <div
          class="h-px w-20 bg-gradient-to-r from-transparent to-primaryTwo dark:to-secondary"
        ></div>
        <div class="w-2 h-2 rotate-45 bg-primaryTwo dark:bg-secondary"></div>
        <div
          class="h-px w-20 bg-gradient-to-l from-transparent to-primaryTwo dark:to-secondary"
        ></div>
      </div>

      <p class="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
        {{ $t("all.artifacts_page_desc") }} — {{ artifacts3d.length }}
        {{ $t("all.artifacts_count_label") }}
      </p>
    </div>

    <!-- ==========  Alert ========== -->
    <v-alert
      type="info"
      variant="tonal"
      rounded="lg"
      border="start"
      class="max-w-4xl mx-auto mb-10 text-sm"
      closable
    >
      <template #prepend>
        <v-icon>mdi-information-outline</v-icon>
      </template>
      <template #title>
        <span class="font-semibold">{{
          $t("all.artifacts_disclaimer_title")
        }}</span>
      </template>
      {{ $t("all.artifacts_disclaimer_body") }}
    </v-alert>

    <!-- ========== Grid ========== -->
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(artifact, index) in artifacts3d"
          :key="index"
          cols="12"
          sm="6"
          lg="4"
        >
          <v-card
            rounded="xl"
            elevation="0"
            class="overflow-hidden h-full d-flex flex-column artifact-card"
          >
            <!-- iframe -->
            <div class="sketchfab-embed-wrapper w-full" style="height: 300px">
              <iframe
                :title="artifact.title"
                frameborder="0"
                allowfullscreen
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                xr-spatial-tracking
                execution-while-out-of-viewport
                execution-while-not-rendered
                web-share
                :src="`https://sketchfab.com/models/${artifact.id}/embed?ui_infos=0&ui_annotations=0&ui_hint=0&ui_author=0&ui_watermark=0&ui_watermark_link=0`"
                class="w-full h-full"
              />
            </div>

            <!-- Card Footer -->
            <v-card-item class="pa-3">
              <v-card-title
                class="text-sm font-semibold text-primaryTwo dark:text-white text-wrap"
              >
                {{ artifact.title }}
              </v-card-title>
            </v-card-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
// Data
import { artifacts3d } from "~/data/artifacts3d";
import { useI18n } from "vue-i18n";
const { t } = useI18n();

useHead({
  title: t("all.artifacts_page_title"),
});
</script>

<style scoped>
.artifact-card {
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(243, 237, 226, 0.6) 100%
  );
  backdrop-filter: blur(12px);
  border: 1px solid rgba(180, 150, 100, 0.2);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.artifact-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(180, 150, 100, 0.2) !important;
}

/* ── Dark mode ── */
.v-theme--dark .artifact-card {
  background: linear-gradient(
    135deg,
    rgba(30, 27, 24, 0.85) 0%,
    rgba(45, 38, 28, 0.75) 100%
  );
  border: 1px solid rgba(200, 170, 110, 0.15);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4) !important;
}

.v-theme--dark .artifact-card:hover {
  box-shadow: 0 12px 32px rgba(200, 170, 110, 0.15) !important;
}

/* iframe */
.sketchfab-embed-wrapper iframe {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
