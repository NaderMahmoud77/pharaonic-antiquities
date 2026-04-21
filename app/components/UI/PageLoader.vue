<template>
  <transition name="fade">
    <div
      v-if="isPageLoading"
      class="fixed inset-0 z-[9999] bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden"
    >
      <!-- Animated background particles -->
      <div class="absolute inset-0 overflow-hidden opacity-30">
        <div class="particle particle-1"></div>
        <div class="particle particle-2"></div>
        <div class="particle particle-3"></div>
      </div>

      <div class="text-center relative z-10">
        <!-- Animated Logo Container -->
        <div class="relative mb-8">
          <!-- Outer glowing rings -->
          <div class="w-32 h-32 mx-auto relative">
            <!-- Rotating outer ring with glow -->
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-tr from-primaryTwo/30 to-transparent dark:from-secondary/30 blur-xl animate-spin-slow"
            ></div>

            <!-- Static outer border -->
            <div
              class="absolute inset-0 border-[3px] border-primaryTwo/20 dark:border-secondary/20 rounded-full"
            ></div>

            <!-- Spinning gradient ring -->
            <div
              class="absolute inset-0 border-[3px] border-transparent border-t-primaryTwo border-r-primaryTwo/50 dark:border-t-secondary dark:border-r-secondary/50 rounded-full animate-spin"
              style="animation-duration: 1.5s"
            ></div>

            <!-- Counter-rotating inner ring -->
            <div
              class="absolute inset-4 border-[2px] border-transparent border-b-primaryTwo/60 border-l-primaryTwo/30 dark:border-b-secondary/60 dark:border-l-secondary/30 rounded-full animate-spin-reverse"
              style="animation-duration: 2s"
            ></div>

            <!-- Pulsing center circle -->
            <div
              class="absolute inset-6 bg-gradient-to-br from-primaryTwo/20 to-primaryTwo/5 dark:from-secondary/20 dark:to-secondary/5 rounded-full animate-pulse-slow backdrop-blur-sm"
            ></div>

            <!-- Logo Container -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-16 h-16 relative animate-float">
                <NuxtImg
                  src="/images/hero/hero.png"
                  alt="Logo"
                  class="w-full h-full object-contain drop-shadow-lg"
                  preload
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Loading Text with typing effect -->
        <div class="mb-6 h-8">
          <h3
            class="text-2xl font-bold bg-gradient-to-r from-primaryTwo to-primaryTwo/70 dark:from-secondary dark:to-secondary/70 bg-clip-text text-transparent animate-pulse-slow"
          >
            {{ loadingText }}
          </h3>
        </div>

        <!-- Modern Progress Bar -->
        <div class="relative w-72 mx-auto">
          <!-- Background track -->
          <div
            class="h-1.5 bg-gray-200/80 dark:bg-gray-700/80 rounded-full overflow-hidden backdrop-blur-sm shadow-inner"
          >
            <!-- Animated gradient bar -->
            <div
              class="h-full bg-gradient-to-r from-primaryTwo via-primaryTwo/80 to-primaryTwo dark:from-secondary dark:via-secondary/80 dark:to-secondary rounded-full animate-loading-bar relative"
            >
              <!-- Shimmer effect -->
              <div
                class="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
              ></div>
            </div>
          </div>

          <!-- Glow effect under progress bar -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-primaryTwo/20 dark:via-secondary/20 to-transparent blur-lg animate-loading-bar"
          ></div>
        </div>

        <!-- Loading dots indicator -->
        <div class="flex gap-2 justify-center mt-8">
          <span
            class="w-2.5 h-2.5 bg-primaryTwo dark:bg-secondary rounded-full animate-bounce shadow-lg"
            style="animation-delay: 0s; animation-duration: 1s"
          ></span>
          <span
            class="w-2.5 h-2.5 bg-primaryTwo dark:bg-secondary rounded-full animate-bounce shadow-lg"
            style="animation-delay: 0.15s; animation-duration: 1s"
          ></span>
          <span
            class="w-2.5 h-2.5 bg-primaryTwo dark:bg-secondary rounded-full animate-bounce shadow-lg"
            style="animation-delay: 0.3s; animation-duration: 1s"
          ></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<!-- ===== JS ===== -->
<script setup>
const { t } = useI18n();

const isPageLoading = ref(true);
const loadingText = ref(t("all.loading_text"));
const route = useRoute();
let dotInterval;

// Animated loading text
watch(isPageLoading, (newVal) => {
  if (newVal) {
    let dots = 0;
    dotInterval = setInterval(() => {
      dots = (dots + 1) % 4;
      loadingText.value = t("all.loading_text") + ".".repeat(dots);
    }, 400);
  } else {
    if (dotInterval) clearInterval(dotInterval);
    loadingText.value = t("all.loading_text");
  }
});

// Hide loader after initial load
onMounted(() => {
  setTimeout(() => {
    isPageLoading.value = false;
  }, 500);
});

// Show loader on route change
watch(
  () => route.fullPath,
  (val) => {
    isPageLoading.value = true;
    const timeout = val === "/" ? 2000 : 1000;
    setTimeout(() => {
      isPageLoading.value = false;
    }, timeout);
  },
);
</script>

<!-- ===== Style ===== -->
<style scoped>
/* Fade transition for loading overlay */
.fade-enter-active {
  transition: opacity 0.4s ease;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Loading bar animation */
@keyframes loading-bar {
  0% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-loading-bar {
  animation: loading-bar 1.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

/* Shimmer effect */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 2s ease-in-out infinite;
}

/* Slow spin */
@keyframes spin-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-spin-slow {
  animation: spin-slow 3s linear infinite;
}

/* Reverse spin */
@keyframes spin-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

.animate-spin-reverse {
  animation: spin-reverse 2s linear infinite;
}

/* Slow pulse */
@keyframes pulse-slow {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.6;
  }
}

.animate-pulse-slow {
  animation: pulse-slow 2s ease-in-out infinite;
}

/* Float animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.animate-float {
  animation: float 2.5s ease-in-out infinite;
}

/* Background particles */
.particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    var(--v-theme-primaryTwo) 0%,
    transparent 70%
  );
  opacity: 0.15;
  animation: float-particle 20s ease-in-out infinite;
}

.particle-1 {
  width: 300px;
  height: 300px;
  top: -10%;
  right: -5%;
  animation-delay: 0s;
}

.particle-2 {
  width: 200px;
  height: 200px;
  bottom: -5%;
  left: -5%;
  animation-delay: 7s;
}

.particle-3 {
  width: 250px;
  height: 250px;
  top: 40%;
  left: 50%;
  animation-delay: 14s;
}

@keyframes float-particle {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(30px, -30px) scale(1.1);
  }
  66% {
    transform: translate(-20px, 20px) scale(0.9);
  }
}

/* Dark mode particle adjustment */
:root.dark .particle {
  background: radial-gradient(
    circle,
    var(--v-theme-secondary) 0%,
    transparent 70%
  );
}
</style>
