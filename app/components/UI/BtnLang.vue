<template>
  <!-- Lang Switcher -->
  <v-menu
    open-on-hover
    :close-on-content-click="true"
    class="relative! z-[2100]!"
  >
    <template #activator="{ props: menu }">
      <button
        v-bind="menu"
        :class="[
          'flex items-center gap-1.5',
          'h-[37px] px-3 rounded-xl',
          'text-sm font-medium tracking-wide',
          'transition-all duration-300 ease-out',
          'hover:scale-105 active:scale-95 group',
          isDarkMode
            ? 'bg-secondary! text-primary! border border-primary/20! hover:shadow-lg hover:shadow-primary/20!'
            : 'bg-primary! text-secondary! border border-secondary/20! hover:shadow-lg hover:shadow-secondary/20!',
        ]"
      >
        <!-- Globe icon -->
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-4 h-4 transition-transform duration-500 group-hover:rotate-[20deg]"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3.6 9h16.8M3.6 15h16.8" />
          <path d="M12 3a14.5 14.5 0 0 1 0 18M12 3a14.5 14.5 0 0 0 0 18" />
        </svg>

        <!-- Current lang label -->
        <span>{{ $t("nav.lang") }}</span>

        <!-- Chevron -->
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          class="w-3 h-3 transition-transform duration-300 group-hover:translate-y-0.5"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
    </template>

    <!-- Dropdown -->
    <div
      :class="[
        'mt-2 overflow-hidden rounded-xl min-w-[160px]',
        'border shadow-xl',
        isDarkMode
          ? 'bg-primary/80! border-secondary/15! shadow-black/40 backdrop-blur-xl'
          : 'bg-white/90! border-primary/10! shadow-black/10 backdrop-blur-xl',
      ]"
    >
      <div
        v-for="(item, index) in locales"
        :key="index"
        @click="
          () => {
            if (item.code !== lang) {
              setLocale(item.code);
              addDirectionAndLang();
            }
          }
        "
        :class="[
          'flex items-center gap-3 px-4! py-2.5! cursor-pointer',
          'transition-all duration-200 select-none',
          item.code === lang
            ? 'opacity-40 pointer-events-none'
            : isDarkMode
              ? 'hover:bg-secondary/10! text-secondary!'
              : 'hover:bg-primary/8! text-textmain!',
          // Active indicator
          item.code === lang && 'font-semibold',
        ]"
      >
        <!-- Flag -->
        <span class="flex-shrink-0 w-5 h-5 rounded overflow-hidden shadow-sm">
          <img
            :src="
              item.name === 'العربية'
                ? '/images/imgLangCuntry/eg-arabic.png'
                : '/images/imgLangCuntry/en-english.png'
            "
            :alt="item.name"
            class="object-cover w-full h-full"
            loading="lazy"
          />
        </span>

        <!-- Label -->
        <span class="text-sm font-medium text-textmain! dark:text-secondary!">{{
          item.name
        }}</span>

        <!-- Active checkmark -->
        <svg
          v-if="item.code === lang"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="w-3.5 h-3.5 ms-auto"
          :class="isDarkMode ? 'text-secondary!' : 'text-primary!'"
          aria-hidden="true"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
    </div>
  </v-menu>
</template>

<!-- ===== JS ===== -->
<script setup>
const { isDarkMode } = useDarkMode();
const { locale, locales, setLocale } = useI18n();
const { lang, addDirectionAndLang } = useLang();
</script>
