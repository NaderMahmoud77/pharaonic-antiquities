<template>
  <ClientOnly>
    <!-- Teleport keeps the overlay at body level -->
    <Teleport to="body">
      <Transition name="dialog">
        <div
          v-if="dialog"
          role="dialog"
          aria-modal="true"
          :aria-label="item.name"
          class="dialog-backdrop"
          @click.self="close"
          @keydown.esc="close"
        >
          <!-- Panel -->
          <div class="dialog-panel">
            <!-- Decorative corner accents -->
            <span class="corner corner--tl" aria-hidden="true" />
            <span class="corner corner--br" aria-hidden="true" />

            <!-- Close button -->
            <button class="close-btn" aria-label="Close dialog" @click="close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
                stroke-linecap="round"
                class="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>

            <!-- Title -->
            <h2 class="dialog-title">{{ item.name }}</h2>

            <!-- Image -->
            <div class="dialog-img-wrap">
              <img :src="item.src" :alt="item.name" class="dialog-img" />
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<!-- ======= SCRIPT ======= -->
<script setup>
const dialog = ref(false);
const item = ref({});

let emitter = null;

if (process.client) {
  emitter = useNuxtApp().$emitter;
}

function close() {
  dialog.value = false;
}

// Prevent body scroll while dialog is open
watch(dialog, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? "hidden" : "";
  }
});

onMounted(() => {
  emitter?.on("openDialogGallery", (data) => {
    item.value = data;
    dialog.value = true;
  });
});

onUnmounted(() => {
  emitter?.off("openDialogGallery");
  if (process.client) {
    document.body.style.overflow = "";
  }
});
</script>

<!-- ======= STYLES ======= -->
<style scoped>
/* ── Backdrop ──────────────────────────────────── */
.dialog-backdrop {
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.25rem;

  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

/* ── Panel ─────────────────────────────────────── */
.dialog-panel {
  position: relative;
  width: 100%;
  max-width: 780px;
  max-height: 88vh;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: var(--color-primary) transparent;

  padding: 2.5rem 2rem 2rem;

  background-color: var(--color-bg, #fff);
  color: var(--color-text-secondary, #555);

  /* Asymmetric radius — editorial personality */
  border-radius: 2rem 0.5rem 2rem 0.5rem;

  box-shadow:
    0 8px 40px rgba(0, 0, 0, 0.22),
    0 2px 8px rgba(0, 0, 0, 0.12),
    0 0 0 1px rgba(255, 255, 255, 0.06);
}

/* ── Corner accent marks ───────────────────────── */
.corner {
  position: absolute;
  width: 18px;
  height: 18px;
  border-color: var(--color-primary);
  border-style: solid;
  opacity: 0.55;
}

.corner--tl {
  top: 14px;
  left: 14px;
  border-width: 2px 0 0 2px;
  border-radius: 6px 0 0 0;
}

.corner--br {
  bottom: 14px;
  right: 14px;
  border-width: 0 2px 2px 0;
  border-radius: 0 0 6px 0;
}

/* ── Close button ─────────────────────────────── */
.close-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
}
/* ── Title ─────────────────────────────────────── */
.dialog-title {
  margin: 0.5rem 0 1.5rem;
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  font-weight: 600;
  text-align: center;
  letter-spacing: -0.02em;

  /* Gradient text using brand palette */
  background-image: linear-gradient(
    90deg,
    var(--color-primary),
    var(--color-primaryTwo)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ── Image wrapper ─────────────────────────────── */
.dialog-img-wrap {
  width: 100%;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(128, 128, 128, 0.15),
    0 4px 20px rgba(0, 0, 0, 0.1);
}

.dialog-img {
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  display: block;
  transition: transform 0.45s ease;
}

.dialog-img-wrap:hover .dialog-img {
  transform: scale(1.018);
}

/* ── Transition ────────────────────────────────── */
.dialog-enter-active,
.dialog-leave-active {
  transition: opacity 0.25s ease;
}

.dialog-enter-active .dialog-panel,
.dialog-leave-active .dialog-panel {
  transition:
    opacity 0.25s ease,
    transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dialog-enter-from,
.dialog-leave-to {
  opacity: 0;
}

.dialog-enter-from .dialog-panel {
  opacity: 0;
  transform: scale(0.92) translateY(16px);
}

.dialog-leave-to .dialog-panel {
  opacity: 0;
  transform: scale(0.95) translateY(8px);
}
</style>
