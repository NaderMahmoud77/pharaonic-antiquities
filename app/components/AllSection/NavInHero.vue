<template>
  <div class="relative z-50 text-textsecondary">
    <!-- ========== Top Bar ========== -->
    <div
      class="container mx-auto flex items-center justify-center md:justify-between! py-2 relative z-50"
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
      <NuxtImg
        src="/images/logo/logoHero.png"
        class="w-[120px]! sm:w-[125px] md:w-[170px] h-[120px] md:h-[170px] object-cover scale-125 md:-mr-6!"
        alt="Logo"
      />

      <!-- Navigation -->
      <nav class="hidden xl:block">
        <ul class="flex items-center gap-8 text-[17px]">
          <li v-for="link in navLinks" :key="link.title">
            <!-- Link -->
            <nuxt-link
              v-if="!link.items"
              :to="$localePath(link.to)"
              :prefetch="link.prefetch !== false"
              class="flex items-center gap-2 relative px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/10! hover:text-secondary"
            >
              <v-icon :icon="link.icon" size="18" />
              {{ $t(link.title) }}
            </nuxt-link>

            <!-- Dropdown -->
            <v-menu
              v-else
              open-on-hover
              z-index="3000"
              :open-delay="80"
              :close-delay="120"
            >
              <template #activator="{ props, isActive }">
                <div
                  v-bind="props"
                  class="relative flex items-center gap-1.5 px-3 py-2 rounded-lg cursor-pointer select-none transition-all duration-200 group hover:bg-white/10 hover:text-secondary"
                >
                  <v-icon :icon="link.icon" size="13" class="opacity-70" />
                  {{ $t(link.title) }}
                  <v-icon
                    :icon="mdiChevronDown"
                    size="14"
                    :class="[
                      'transition-transform duration-300 ms-0.5',
                      isActive ? 'rotate-180' : '',
                    ]"
                  />
                </div>
              </template>

              <!-- Dropdown panel — matches TheNavbar style -->
              <div
                :class="[
                  'mt-1 min-w-[220px] rounded-2xl overflow-hidden border shadow-2xl',
                  isDarkMode
                    ? 'bg-primaryTwo/90 backdrop-blur-xl border-white/8 shadow-black/50'
                    : 'bg-white/95 backdrop-blur-xl border-black/8 shadow-black/15',
                ]"
              >
                <nuxt-link
                  v-for="child in link.items"
                  :key="child.title"
                  :to="$localePath(child.to)"
                  :prefetch="link.prefetch !== false"
                  :class="[
                    'flex items-center gap-3 px-4 py-3',
                    'text-[13px] font-semibold uppercase tracking-wide',
                    'transition-all duration-200 group/item',
                    lang === 'ar' ? 'flex-row-reverse' : '',
                    isDarkMode
                      ? 'text-textsecondary hover:text-secondary hover:bg-secondary/10'
                      : 'text-textmain hover:text-primaryTwo hover:bg-primary/10',
                  ]"
                >
                  <span
                    :class="[
                      'flex items-center justify-center w-7 h-7 rounded-lg flex-shrink-0',
                      'transition-all duration-200',
                      isDarkMode
                        ? 'bg-secondary/10 text-secondary group-hover/item:bg-secondary/20'
                        : 'bg-primary/10 text-primaryTwo group-hover/item:bg-primary/20',
                    ]"
                  >
                    <v-icon size="13" :icon="child.icon" />
                  </span>
                  <span>{{ $t(child.title) }}</span>
                </nuxt-link>
              </div>
            </v-menu>
          </li>
        </ul>
      </nav>

      <!-- Toggle dark mode -->
      <BtnMode />

      <!-- ===== Show Drawer ===== -->
      <button
        class="flex items-center gap-1.5 me-5! xl:hidden!"
        :class="[
          'h-[37px] px-3 rounded-xl',
          'text-sm font-medium tracking-wide',
          'transition-all duration-300 ease-out',
          'hover:scale-105 active:scale-95 group',
          isDarkMode
            ? 'bg-secondary! text-primary! border border-primary/20! hover:shadow-lg hover:shadow-primary/20!'
            : 'bg-primary! text-secondary! border border-secondary/20! hover:shadow-lg hover:shadow-secondary/20!',
        ]"
        @click="toggleDrawer"
      >
        <v-icon :icon="mdiMenu" />
      </button>
    </div>
  </div>
</template>

<!-- =============== JS =================== -->
<script setup>
// Icons
import {
  mdiChevronDown,
  mdiPhoneOutline,
  mdiEmailOutline,
  mdiMenu,
} from "@mdi/js";
// Dark Mode
const { isDarkMode } = useDarkMode();
import BtnMode from "../UI/BtnMode";
// Lang
const { lang } = useLang();
const { locale, setLocale } = useI18n();

const changeLang = async (l) => {
  await setLocale(l);
};
// Drawer
const drawer = useDrawer();
function toggleDrawer() {
  drawer.value = !drawer.value;
}
// Nav Links
import { navLinks } from "~/data/navLinks";

const contact = [
  {
    href: "tel:+01069208821",
    icon: mdiPhoneOutline,
    title: "01069208821",
  },
  {
    href: "mailto:pharaonic@antiquities.com",
    icon: mdiEmailOutline,
    title: "pharaonic@antiquities.com",
  },
];
</script>

<!-- ====== Style ====== -->
<style scoped>
.router-link-active {
  background-color: rgba(255, 255, 255, 0.12);
  color: var(--color-secondary);
}

.router-link-active::after {
  content: "";
  position: absolute;
  bottom: 4px;
  left: 0.75rem;
  right: 0.75rem;
  height: 1px;
  border-radius: 999px;
  background: var(--color-secondary);
  transform: scaleX(1);
}

.dark .router-link-active {
  background-color: color-mix(
    in oklab,
    var(--color-secondary) 30%,
    transparent
  );
}
</style>
