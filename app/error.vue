<template>
  <div
    class="min-h-screen bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center overflow-hidden relative"
  >
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center max-w-2xl mx-auto">
        <!-- 404 Number with Egyptian styling -->
        <div class="relative mb-8">
          <div class="flex items-center justify-center gap-4 mb-8">
            <!-- Decorative pyramids on sides -->
            <div class="hidden md:block">
              <div
                class="w-16 h-16 relative animate-float"
                style="animation-delay: 0s"
              >
                <div
                  class="absolute inset-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[56px] border-b-primaryTwo/20 dark:border-b-secondary/20"
                ></div>
                <div
                  class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[42px] border-b-primaryTwo/40 dark:border-b-secondary/40"
                ></div>
              </div>
            </div>

            <!-- Large 404 Text -->
            <h1
              class="text-[120px] md:text-[180px] font-bold leading-none bg-gradient-to-br from-primaryTwo via-primaryTwo/80 to-primaryTwo/60 dark:from-secondary dark:via-secondary/80 dark:to-secondary/60 bg-clip-text text-transparent relative"
            >
              404
              <!-- Animated underline -->
              <div
                class="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-primaryTwo/30 dark:via-secondary/30 to-transparent animate-pulse-slow"
              ></div>
            </h1>

            <!-- Decorative pyramids on sides -->
            <div class="hidden md:block">
              <div
                class="w-16 h-16 relative animate-float"
                style="animation-delay: 0.5s"
              >
                <div
                  class="absolute inset-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[56px] border-b-primaryTwo/20 dark:border-b-secondary/20"
                ></div>
                <div
                  class="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-12 border-l-[24px] border-l-transparent border-r-[24px] border-r-transparent border-b-[42px] border-b-primaryTwo/40 dark:border-b-secondary/40"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Animated Icon/Illustration -->
        <div class="relative mb-12">
          <div class="w-40 h-40 mx-auto relative">
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
              style="animation-duration: 2s"
            ></div>

            <!-- Pulsing center -->
            <div
              class="absolute inset-8 bg-gradient-to-br from-primaryTwo/20 to-primaryTwo/5 dark:from-secondary/20 dark:to-secondary/5 rounded-full animate-pulse-slow backdrop-blur-sm"
            ></div>

            <!-- Center Icon -->
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="animate-float">
                <v-icon
                  size="80"
                  class="text-primaryTwo dark:text-secondary opacity-80"
                >
                  mdi-compass-off-outline
                </v-icon>
              </div>
            </div>
          </div>
        </div>

        <!-- Title and Description -->
        <div class="mb-12">
          <!-- Decorative line -->
          <div class="flex items-center justify-center gap-4 mb-6">
            <div
              class="h-px w-20 bg-gradient-to-r from-transparent to-primaryTwo dark:to-secondary"
            ></div>
            <div
              class="w-2 h-2 rotate-45 bg-primaryTwo dark:bg-secondary"
            ></div>
            <div
              class="h-px w-20 bg-gradient-to-l from-transparent to-primaryTwo dark:to-secondary"
            ></div>
          </div>

          <h2
            class="text-3xl md:text-5xl font-bold text-primaryTwo dark:text-secondary mb-6 animate-fade-in"
          >
            {{ $t("notFound.title") || "Page Not Found" }}
          </h2>
        </div>

        <!-- Action Buttons -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
        >
          <!-- Go Home Button -->
          <NuxtLink
            to="/"
            class="group relative px-8 py-4 bg-primaryTwo dark:bg-secondary text-white dark:text-gray-900 rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 min-w-[200px]"
          >
            <span class="relative z-10 flex items-center justify-center gap-2">
              <v-icon size="20">mdi-home</v-icon>
              {{ $t("notFound.goHome") || "Go Home" }}
            </span>
            <!-- Shine effect -->
            <div
              class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
            ></div>
          </NuxtLink>

          <!-- Go Back Button -->
          <button
            @click="$router.go(-1)"
            class="group px-8 py-4 bg-white dark:bg-gray-800 text-primaryTwo dark:text-secondary border-2 border-primaryTwo dark:border-secondary rounded-2xl font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 min-w-[200px]"
          >
            <span class="flex items-center justify-center gap-2">
              <v-icon size="20">mdi-arrow-left</v-icon>
              {{ $t("notFound.goBack") || "Go Back" }}
            </span>
          </button>
        </div>

        <!-- Additional Links -->
        <div class="flex flex-wrap gap-6 justify-center text-sm">
          <NuxtLink
            to="/temples"
            class="text-gray-600 dark:text-gray-400 hover:text-primaryTwo dark:hover:text-secondary transition-colors duration-300 flex items-center gap-1"
          >
            <v-icon size="16">mdi-temple-hindu</v-icon>
            {{ $t("notFound.exploreTemples") || "Explore Temples" }}
          </NuxtLink>

          <NuxtLink
            to="/museums"
            class="text-gray-600 dark:text-gray-400 hover:text-primaryTwo dark:hover:text-secondary transition-colors duration-300 flex items-center gap-1"
          >
            <v-icon size="16">mdi-bank</v-icon>
            {{ $t("notFound.visitMuseums") || "Visit Museums" }}
          </NuxtLink>

          <NuxtLink
            to="/artifacts"
            class="text-gray-600 dark:text-gray-400 hover:text-primaryTwo dark:hover:text-secondary transition-colors duration-300 flex items-center gap-1"
          >
            <v-icon size="16">mdi-pottery</v-icon>
            {{ $t("notFound.discoverArtifacts") || "Discover Artifacts" }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- ===== JS ===== -->
<script setup>
// SEO metadata
definePageMeta({
  layout: false,
});

useHead({
  title: "404 - Page Not Found",
  meta: [
    {
      name: "description",
      content: "The page you are looking for could not be found.",
    },
  ],
});
</script>

<!-- ===== STYLE ===== -->
<style scoped>
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
  animation: spin-slow 4s linear infinite;
}

/* Float animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-12px);
  }
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

/* Fade in animations */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out forwards;
}

.animate-fade-in-delay {
  opacity: 0;
  animation: fade-in 0.6s ease-out 0.2s forwards;
}

.animate-fade-in-delay-2 {
  opacity: 0;
  animation: fade-in 0.6s ease-out 0.4s forwards;
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
  animation: float-particle 25s ease-in-out infinite;
}

.particle-1 {
  width: 400px;
  height: 400px;
  top: -10%;
  right: -5%;
  animation-delay: 0s;
}

.particle-2 {
  width: 300px;
  height: 300px;
  bottom: -5%;
  left: -5%;
  animation-delay: 8s;
}

.particle-3 {
  width: 350px;
  height: 350px;
  top: 50%;
  left: 50%;
  animation-delay: 16s;
}

@keyframes float-particle {
  0%,
  100% {
    transform: translate(0, 0) scale(1);
  }
  33% {
    transform: translate(40px, -40px) scale(1.1);
  }
  66% {
    transform: translate(-30px, 30px) scale(0.9);
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
