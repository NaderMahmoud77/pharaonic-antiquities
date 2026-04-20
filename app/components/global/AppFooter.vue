<template>
  <v-footer
    app
    absolute
    class="text-center d-flex flex-column ga-2 py-4 bg-textsecondary! dark:bg-primaryTwo/80! text-textmain! dark:text-white!"
    color="indigo-lighten-1"
    v-gsap.entrance.slide-top.stagger="{
      duration: 1,
      stagger: 0.4,
    }"
  >
    <!-- ── Social Icons ── -->
    <div class="flex items-center gap-3">
      <a
        v-for="social in socials"
        :key="social.icon"
        href="#"
        :aria-label="social.label"
        class="group social-btn flex items-center justify-center w-10 h-10 rounded-xl border social-icon-btn transition-all duration-300 hover:-translate-y-1"
      >
        <v-icon
          :icon="social.icon"
          size="18"
          class="transition-colors duration-300"
        />
      </a>
    </div>

    <v-divider class="my-2" thickness="2" width="50"></v-divider>

    <div class="text-caption font-semibold! opacity-70 text-[18px]!">
      {{ $t("footer.desc") }}
    </div>

    <v-divider></v-divider>

    <!-- ── Copyright ── -->
    <div class="flex items-center gap-1.5 text-xs text-textmain">
      <v-icon size="12">mdi-copyright</v-icon>
      <span>{{ new Date().getFullYear() }}</span>
      <span class="mx-0.5">—</span>
      <strong class="text-textmain/60 dark:text-white/50">Nader</strong>
      <span class="mx-0.5">·</span>
      <span>{{ $t("footer.rights") }}</span>
    </div>
  </v-footer>
</template>

<!-- -------- JS -------- -->
<script setup>
import { mdiFacebook, mdiTwitter, mdiLinkedin, mdiInstagram } from "@mdi/js";
const socials = [
  { icon: mdiFacebook, label: "Facebook" },
  { icon: mdiTwitter, label: "Twitter" },
  { icon: mdiLinkedin, label: "LinkedIn" },
  { icon: mdiInstagram, label: "Instagram" },
];
</script>

<!-- -------- Styles -------- -->
<style scoped>
/* ── Social buttons ── */
.social-btn {
  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease !important;
}

.social-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 18px rgba(180, 150, 100, 0.25) !important;
}

.v-theme--dark .social-btn:hover {
  box-shadow: 0 6px 18px rgba(200, 170, 110, 0.2) !important;
}
/* ── Copyright ── */
.footer-copy {
  opacity: 0.6;
  font-size: 12px;
}
</style>
