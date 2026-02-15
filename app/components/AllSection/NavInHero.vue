<template>
  <div class="relative z-50 text-textsecondary">
    <!-- ========== Top Bar ========== -->
    <div
      class="container mx-auto flex items-center justify-center md:justify-between! py-2 relative z-50"
      v-gsap.entrance.slide-left.stagger="{
        duration: 1.5,
        stagger: 0.8,
      }"
    >
      <!-- Lang -->
      <div class="flex items-center gap-2">
        <button
          @click="changeLang('ar')"
          class="flex gap-2 items-center hover:text-secondary! duration-500"
          :class="lang === 'ar' ? 'opacity-50 pointer-events-none' : ''"
        >
          العربية
          <img
            src="/images/imgLangCuntry/eg-arabic.png"
            alt="cuntry"
            class="object-contain w-5"
          />
        </button>

        <v-divider vertical class="h-6 mx-2" />

        <button
          @click="changeLang('en')"
          class="flex gap-2 items-center hover:text-secondary! duration-500"
          :class="lang === 'en' ? 'opacity-50 pointer-events-none' : ''"
        >
          English
          <img
            src="/images/imgLangCuntry/en-english.png"
            alt="cuntry"
            class="object-contain w-5"
          />
        </button>
      </div>

      <!-- Contact -->
      <div class="hidden md:block">
        <div class="flex items-center gap-10 text-[14px]">
          <a
            v-for="c in contact"
            :key="c.title"
            :href="c.href"
            target="_blank"
            class="flex items-center gap-1 hover:text-secondary transition-colors"
            :class="lang == 'en' ? 'flex-row-reverse' : ''"
          >
            <p>{{ c.title }}</p>
            <v-icon size="17" :icon="c.icon" />
          </a>
        </div>
      </div>
    </div>

    <v-divider />

    <!-- ========== Main Navbar ========== -->
    <div class="flex items-center justify-between container! mx-auto">
      <!-- Logo -->
      <nuxt-link>
        <img
          src="/images/logo/logoHero.png"
          class="w-[120px] sm:w-[125px] md:w-[170px] object-cover scale-125 transition-all duration-300 hover:scale-160 md:-mr-6!"
          alt="Logo"
        />
      </nuxt-link>

      <!-- Navigation -->
      <nav class="hidden xl:block">
        <ul class="flex items-center gap-8 text-[17px]">
          <li v-for="link in navLinks" :key="link.title">
            <!-- Link -->
            <nuxt-link
              v-if="!link.items"
              :to="link.to"
              class="flex items-center gap-2 px-2 py-1 rounded hover:bg-primary/20! hover:text-secondary! transition-colors"
            >
              <v-icon size="18">{{ link.icon }}</v-icon>
              {{ $t(link.title) }}
            </nuxt-link>

            <!-- Dropdown -->
            <v-menu v-else open-on-hover>
              <template v-slot:activator="{ props }">
                <div
                  v-bind="props"
                  class="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-primary/20! hover:text-secondary! transition-colors"
                >
                  <v-icon size="18">{{ link.icon }}</v-icon>
                  {{ $t(link.title) }}
                  <v-icon size="16">mdi-chevron-down</v-icon>
                </div>
              </template>

              <v-list
                class="w-[280px]! bg-[#F2F2F2]! dark:bg-primaryTwo/70! text-primaryTwo! dark:text-textsecondary!"
              >
                <v-list-item
                  v-for="child in link.items"
                  :key="child.title"
                  :to="child.to"
                  class="flex items-center justify-between gap-2 hover:bg-primary/20! transition-colors rounded px-3 py-2"
                >
                  <div
                    class="flex items-center gap-2 mb-2"
                    :class="lang == 'ar' ? 'justify-end!' : 'justify-start!'"
                  >
                    <v-icon
                      size="14"
                      :class="lang === 'ar' ? 'order-2!' : 'order-1!'"
                      >{{ child.icon }}</v-icon
                    >
                    <span :class="lang === 'ar' ? 'order-1!' : 'order-2!'">
                      {{ $t(child.title) }}</span
                    >
                  </div>
                  <v-divider />
                </v-list-item>
              </v-list>
            </v-menu>
          </li>
        </ul>
      </nav>

      <!-- Toggle dark mode -->
      <BtnMode />

      <!-- Show Drawer -->
      <v-btn
        class="bg-secondary! me-5! xl:hidden! hover:text-white! duration-400"
        @click="toggleDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<!-- =============== JS =================== -->
<script setup>
// components
import BtnMode from "../UI/BtnMode";
// Lang
import { useLang } from "../../composables/UseChangeLang";
const { addDirectionAndLang, lang } = useLang();
const { locales, setLocale } = useI18n();
const changeLang = (l) => {
  setLocale(l);
  addDirectionAndLang();
};

// Drawer
const drawer = useDrawer();

function toggleDrawer() {
  drawer.value = !drawer.value;
  // if (drawer.value) {
  //   document.documentElement.style.overflowY = "hidden";
  // } else {
  //   document.documentElement.style.overflowY = "";
  // }
}

// ========== Data ==========
import { navLinks } from "~/data/navLinks";

const contact = [
  {
    href: "tel:+01069208821",
    icon: "mdi-phone-outline",
    title: "01069208821",
  },
  {
    href: "mailto:pharaonic@antiquities.com",
    icon: "mdi-email-outline",
    title: "pharaonic@antiquities.com",
  },
];
</script>

<style>
.router-link-active {
  /* background-color: color-mix(in oklab, var(--color-primary) 30%, transparent); */
  color: var(--color-secondary);
}
</style>
