<template>
  <header
    class="bg-textsecondary! fixed top-0 left-0 z-2010 w-full h-[85px] dark:bg-primaryTwo/70! shadow-md! shadow-black/30 dark:shadow-gray-300/20 font-bold uppercase"
  >
    <div class="container mx-auto flex! items-center justify-between h-full">
      <!-- logo -->
      <nuxt-link to="/">
        <img
          src="/images/logo/logoHero.png"
          alt="Logo"
          class="object-cover w-[125px]"
        />
      </nuxt-link>
      <!-- ============ navigation links ============ -->
      <nav class="hidden xl:block text-textmain! dark:text-textsecondary!">
        <ul class="flex items-center gap-2 text-[15px]">
          <li v-for="link in navLinks" :key="link.title">
            <!-- Link -->
            <nuxt-link
              v-if="!link.items"
              :to="link.to"
              class="flex items-center gap-2 px-2 py-1 rounded hover:bg-primary/20! hover:text-primaryTwo! hover:dark:text-secondary! transition-colors"
            >
              <v-icon size="15">{{ link.icon }}</v-icon>
              {{ $t(link.title) }}
            </nuxt-link>

            <!-- Dropdown -->
            <v-menu v-else open-on-hover z-index="3000">
              <template v-slot:activator="{ props }">
                <div
                  v-bind="props"
                  class="flex items-center gap-2 cursor-pointer px-2 py-1 rounded hover:bg-primary/20! hover:text-primaryTwo! hover:dark:text-secondary! transition-colors"
                >
                  <v-icon size="15">{{ link.icon }}</v-icon>
                  {{ $t(link.title) }}
                  <v-icon size="16">mdi-chevron-down</v-icon>
                </div>
              </template>
              <v-list
                class="w-[250px]! bg-textsecondary! dark:bg-primaryTwo/70! text-primaryTwo! dark:text-textsecondary!"
              >
                <v-list-item
                  v-for="child in link.items"
                  :key="child.title"
                  :to="child.to"
                  class="hover:bg-primary/20! transition-colors rounded px-3 py-2"
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

      <!-- ============ Lang And Mode ============ -->
      <div class="flex gap-2">
        <!-- Mode -->
        <BtnMode />

        <!-- Lang -->
        <v-menu open-on-hover class="relative! z-2100!">
          <template v-slot:activator="{ props: menu }">
            <v-btn
              color="secondary!"
              class="text-primary! text-sm!"
              v-bind="menu"
            >
              {{ $t("nav.lang") }}
              <v-icon class="ms-1">mdi-web</v-icon>
            </v-btn>
          </template>
          <v-list
            class="dark:bg-primary/70! dark:text-secondary! text-textmain!"
          >
            <v-list-item
              v-for="(item, index) in locales"
              :key="index"
              :value="index"
              class="w-[150px]!"
            >
              <div
                class="flex items-center gap-4 w-full"
                :class="
                  item.code === lang ? 'opacity-50! pointer-events-none!' : ''
                "
                @click="
                  setLocale(item.code);
                  addDirectionAndLang();
                "
              >
                <img
                  v-if="item.name === 'العربية'"
                  src="/images/imgLangCuntry/eg-arabic.png"
                  alt="cuntry"
                  class="object-contain w-5"
                />
                <img
                  v-else
                  src="/images/imgLangCuntry/en-english.png"
                  alt="cuntry"
                  class="object-contain w-5"
                />

                <v-list-item-title>
                  {{ item.name }}
                </v-list-item-title>
              </div>
            </v-list-item>
          </v-list>
        </v-menu>

        <!-- ===== Show Drawer ===== -->
        <v-btn class="bg-secondary! me-5! xl:hidden!" @click="toggleDrawer">
          <v-icon>mdi-menu</v-icon>
        </v-btn>
      </div>
    </div>
  </header>
</template>

<!-- ------------ JS ---------------- -->
<script setup>
// Lang
const { locales, setLocale } = useI18n();
import { useLang } from "../../composables/UseChangeLang";
let { addDirectionAndLang, lang } = useLang();

// ========= Data =========
import { navLinks } from "~/data/navLinks";
// Component
import BtnMode from "../UI/BtnMode";

// Drawer
const drawer = useDrawer();

function toggleDrawer() {
  drawer.value = !drawer.value;
}
</script>
