<template>
  <ClientOnly>
    <v-navigation-drawer
      v-model="open"
      width="350"
      class="bg-[#F2F2F2]! dark:bg-primaryTwo/90! z-2200! text-primaryTwo! dark:text-[#F2F2F2]! border-r! border-primary! dark:border-secondary!"
      :location="lang === 'ar' ? 'right' : 'left'"
    >
      <div>
        <div
          @click="toggleDrawer"
          class="my-4 mx-4 cursor-pointer border border-primary dark:border-white w-8 h-8 rounded-full text-center absolute"
          :class="lang === 'ar' ? 'left-0' : 'right-0'"
        >
          <v-icon>mdi mdi-close</v-icon>
        </div>

        <!-- Btn Mode -->
        <v-btn
          class="bg-primary! dark:bg-secondary! m-4! text-secondary! dark:text-primary!"
          @click="toggleDarkMode"
        >
          <span class="me-2 font-semibold">{{ $t("mode") }}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="iconify iconify--line-md text-3xl text-primary"
            v-if="!isDarkMode"
          >
            <g fill="currentColor" fill-opacity="0">
              <path
                d="M15.22 6.03l2.53 -1.94l-3.19 -0.09l-1.06 -3l-1.06 3l-3.19 0.09l2.53 1.94l-0.91 3.06l2.63 -1.81l2.63 1.81l-0.91 -3.06Z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="0.7s"
                  dur="0.4s"
                  values="0;1"
                ></animate>
              </path>
              <path
                d="M19.61 12.25l1.64 -1.25l-2.06 -0.05l-0.69 -1.95l-0.69 1.95l-2.06 0.05l1.64 1.25l-0.59 1.98l1.7 -1.17l1.7 1.17l-0.59 -1.98Z"
              >
                <animate
                  fill="freeze"
                  attributeName="fill-opacity"
                  begin="1.1s"
                  dur="0.4s"
                  values="0;1"
                ></animate>
              </path>
            </g>
            <path
              fill="none"
              stroke="currentColor"
              stroke-dasharray="56"
              stroke-dashoffset="56"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M7 6c0 6.08 4.92 11 11 11c0.53 0 1.05 -0.04 1.56 -0.11c-1.61 2.47 -4.39 4.11 -7.56 4.11c-4.97 0 -9 -4.03 -9 -9c0 -3.17 1.64 -5.95 4.11 -7.56c-0.07 0.51 -0.11 1.03 -0.11 1.56Z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="56;0"
              ></animate>
            </path>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
            role="img"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            class="iconify iconify--line-md text-3xl"
            v-else
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            >
              <path
                stroke-dasharray="36"
                stroke-dashoffset="36"
                d="M12 7c2.76 0 5 2.24 5 5c0 2.76 -2.24 5 -5 5c-2.76 0 -5 -2.24 -5 -5c0 -2.76 2.24 -5 5 -5"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.4s"
                  values="36;0"
                ></animate>
              </path>
              <path
                stroke-dasharray="2"
                stroke-dashoffset="2"
                d="M12 19v1M19 12h1M12 5v-1M5 12h-1"
              >
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.5s"
                  dur="0.2s"
                  values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.5s"
                  dur="0.2s"
                  values="2;0"
                ></animate>
              </path>
              <path
                stroke-dasharray="2"
                stroke-dashoffset="2"
                d="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5"
              >
                <animate
                  fill="freeze"
                  attributeName="d"
                  begin="0.7s"
                  dur="0.2s"
                  values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
                ></animate>
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  begin="0.7s"
                  dur="0.2s"
                  values="2;0"
                ></animate>
              </path>
            </g>
          </svg>
        </v-btn>
      </div>
      <!-- Logo -->
      <img
        src="/images/logo/logoHero.png"
        alt="logo"
        class="w-[120px] my-4 mx-auto"
      />

      <v-divider />

      <!-- Links Pages -->
      <div class="text-center my-4">
        <h3>{{ $t("drawer.page") }}</h3>
        <v-icon class="animate-bounce mt-2">mdi mdi-chevron-double-down</v-icon>
      </div>

      <!-- Links Pages -->
      <v-list density="compact" class="px-2">
        <template v-for="(link, index) in navLinks" :key="index">
          <!-- لو الرابط ليه Sub Items -->
          <v-list-group
            v-if="link.items"
            v-model="openGroups[index]"
            prepend-icon="mdi-chevron-down"
            class="py-4!"
          >
            <template #activator="{ props }">
              <v-list-item
                v-bind="props"
                :title="$t(link.title)"
                :prepend-icon="link.icon"
              />
            </template>

            <v-list-item
              v-for="(item, idx) in link.items"
              :key="idx"
              :title="$t(item.title)"
              :to="item.to"
            >
              <template #prepend>
                <v-icon size="14">{{ item.icon }}</v-icon>
              </template>
            </v-list-item>
          </v-list-group>

          <!-- لو الرابط عادي -->
          <v-list-item
            v-else
            :title="$t(link.title)"
            :to="link.to"
            :prepend-icon="link.icon"
            class="py-4 cursor-pointer"
          />
          <v-divider></v-divider>
        </template>
      </v-list>

      <!-- Follow Us -->
      <h1 class="font-medium text-2xl text-center my-6">
        {{ $t("drawer.follow") }}
      </h1>
      <div class="d-flex justify-center ga-3">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          density="comfortable"
          variant="text"
        ></v-btn>
      </div>
    </v-navigation-drawer>
  </ClientOnly>
</template>

<script setup>
// =========== Data ===========
import { navLinks } from "~/data/navLinks";
// Mode
import { useDarkMode } from "../../composables/UseDarkMode";
const { toggleDarkMode, isDarkMode } = useDarkMode();
// Lang
import { useLang } from "../../composables/UseChangeLang";
const { lang } = useLang();

// Drawer
let open = useDrawer();
function toggleDrawer() {
  open.value = !open.value;
}

// Links Groups
import { ref } from "vue";

const openGroups = ref([]);
openGroups.value = navLinks.map(() => false);

// Icon
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
