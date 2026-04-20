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

      <p class="text-center text-textmain max-w-2xl mx-auto">
        {{ $t("all.artifacts_page_desc") }}
        <span class="ml-1 text-primaryTwo dark:text-secondary font-medium">
          ({{ artifacts3d.length }})
        </span>
        {{ $t("all.artifacts_count_label") }}
      </p>
    </div>

    <!-- ========== Alert ========== -->
    <v-alert
      type="info"
      variant="tonal"
      rounded="lg"
      border="start"
      closable
      class="mx-auto max-w-4xl mb-10 text-sm custom-alert"
    >
      <template #prepend>
        <v-icon
          class="text-primaryTwo dark:text-secondary"
          :icon="mdiInformationOutline"
        />
      </template>

      <template #title>
        <span class="font-semibold text-primaryTwo dark:text-secondary">
          {{ $t("all.artifacts_disclaimer_title") }}
        </span>
      </template>

      <span class="text-textmain dark:text-gray-300">
        {{ $t("all.artifacts_disclaimer_body") }}
      </span>
    </v-alert>

    <!-- ========== Grid ========== -->
    <v-container fluid>
      <v-row>
        <v-col
          v-for="(artifact, index) in artifacts3d"
          :key="artifact.id"
          cols="12"
          sm="6"
          lg="4"
        >
          <v-card
            rounded="xl"
            elevation="0"
            class="overflow-hidden h-full d-flex flex-column artifact-card"
          >
            <!-- iframe Wrapper with lazy observer -->
            <div
              :ref="(el) => setObserverRef(el, index)"
              class="sketchfab-embed-wrapper"
            >
              <!-- Placeholder shown before iframe is visible -->
              <div
                v-if="!visibleSet.has(index)"
                class="iframe-placeholder"
                aria-hidden="true"
              >
                <v-icon
                  size="40"
                  class="placeholder-icon"
                  :icon="mdiRotate3d"
                />
              </div>

              <!-- Iframe rendered only when in viewport -->
              <iframe
                v-else
                :title="artifact.title"
                :src="embedUrl(artifact.id)"
                frameborder="0"
                allow="autoplay; fullscreen; xr-spatial-tracking"
                allowfullscreen
                loading="lazy"
                class="sketchfab-iframe"
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

<!-- ======= JS ======= -->
<script setup>
// Icons
import { mdiRotate3d, mdiInformationOutline } from "@mdi/js";
// Data
const { data: artifacts3d } = await useAsyncData("artifacts3d", () =>
  import("~/data/artifacts3d").then((m) => m.artifacts3d),
);

const { t } = useI18n();

useHead({ title: t("all.artifacts_page_title") });

// ── Lazy loading via IntersectionObserver ──────────────────────────────────
const visibleSet = reactive(new Set());
const observerRefs = ref([]);
let observer = null;

// Construct the Sketchfab embed URL with parameters to hide UI elements for a cleaner look.
function embedUrl(id) {
  return (
    `https://sketchfab.com/models/${id}/embed` +
    `?ui_infos=0&ui_annotations=0&ui_hint=0` +
    `&ui_author=0&ui_watermark=0&ui_watermark_link=0`
  );
}

/** Store the wrapper element for a given card index so we can observe it. */
function setObserverRef(el, index) {
  if (el) observerRefs.value[index] = el;
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number(entry.target.dataset.index);
          visibleSet.add(index);
          observer.unobserve(entry.target); // stop watching once revealed
        }
      });
    },
    {
      rootMargin: "200px", // start loading 200 px before entering viewport
      threshold: 0,
    },
  );

  observerRefs.value.forEach((el, index) => {
    if (el) {
      el.dataset.index = index;
      observer.observe(el);
    }
  });
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<!-- ====== STYLE ======= -->
<style scoped>
/* ── Card shell ─────────────────────────────────────────────────────────── */
.artifact-card {
  /* CSS custom-prop approach keeps dark-mode overrides DRY */
  --card-bg: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.85) 0%,
    rgba(243, 237, 226, 0.6) 100%
  );
  --card-border: rgba(180, 150, 100, 0.2);
  --card-shadow-hover: 0 12px 32px rgba(180, 150, 100, 0.2);

  background: var(--card-bg);
  backdrop-filter: blur(12px);
  border: 1px solid var(--card-border);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  /* Isolate each card's paint/layout work from siblings */
  contain: layout style;
}

.artifact-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--card-shadow-hover) !important;
}

/* ── Dark mode  */
.v-theme--dark .artifact-card {
  --card-bg: linear-gradient(
    135deg,
    rgba(30, 27, 24, 0.85) 0%,
    rgba(45, 38, 28, 0.75) 100%
  );
  --card-border: rgba(200, 170, 110, 0.15);
  --card-shadow-base: 0 4px 24px rgba(0, 0, 0, 0.4);
  --card-shadow-hover: 0 12px 32px rgba(200, 170, 110, 0.15);

  box-shadow: var(--card-shadow-base) !important;
}

/* ── Iframe wrapper  */
.sketchfab-embed-wrapper {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;

  background-color: rgba(180, 150, 100, 0.06);
}

/* ── Placeholder  */
.iframe-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0.3;
}

.placeholder-icon {
  animation: spin 3s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

/* ── Iframe  */
.sketchfab-iframe {
  display: block;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
