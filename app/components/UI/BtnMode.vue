<!-- <template>
  <div>
    <client-only>
      <v-tooltip location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn
            class="h-[37px]! hidden! xl:block! bg-primary! dark:bg-secondary! text-secondary! dark:text-primary!"
            v-bind="props"
            @click="toggleDarkMode"
          >
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
        </template>
        <span>
          {{
            isDarkMode ? $t("tooltip.tooltipLight") : $t("tooltip.tooltipDark")
          }}
        </span>
      </v-tooltip>
    </client-only>
  </div>
</template>

<script setup>
// Dark Mode
const { toggleDarkMode, isDarkMode } = useDarkMode();
</script> -->

<template>
  <client-only>
    <v-tooltip location="bottom">
      <template #activator="{ props }">
        <button
          v-bind="props"
          @click="toggleDarkMode"
          :aria-label="
            isDarkMode ? $t('tooltip.tooltipLight') : $t('tooltip.tooltipDark')
          "
          :class="[
            'hidden xl:flex',
            'relative items-center justify-center',
            'h-[37px] w-[37px] rounded-xl overflow-hidden',
            'transition-all duration-300 ease-out',
            'hover:scale-110 active:scale-95 group',
            isDarkMode
              ? 'bg-secondary! text-primary! border border-primary/20! hover:shadow-lg hover:shadow-primary/20!'
              : 'bg-primary! text-secondary! border border-secondary/20! hover:shadow-lg hover:shadow-secondary/20!',
          ]"
        >
          <!-- Ripple bg on hover -->
          <span
            :class="[
              'absolute inset-0 rounded-xl',
              'scale-0 group-hover:scale-100',
              'transition-transform duration-300 ease-out',
              isDarkMode ? 'bg-primary/10' : 'bg-secondary/10',
            ]"
          />

          <!-- Icon wrapper — spins on each toggle -->
          <span
            class="relative z-10 flex items-center justify-center w-5 h-5 transition-transform duration-500"
            :class="isDarkMode ? 'rotate-[360deg]' : 'rotate-0'"
          >
            <!-- Moon — visible in light mode (click → go dark) -->
            <svg
              v-if="!isDarkMode"
              viewBox="0 0 24 24"
              class="w-[1.15em] h-[1.15em]"
              aria-hidden="true"
            >
              <!-- Twinkling stars (fade in after arc draws) -->
              <g fill="currentColor" fill-opacity="0">
                <path
                  d="M15.22 6.03l2.53-1.94-3.19-.09-1.06-3-1.06 3-3.19.09 2.53 1.94-.91 3.06 2.63-1.81 2.63 1.81-.91-3.06Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="0.7s"
                    dur="0.4s"
                    values="0;1"
                  />
                </path>
                <path
                  d="M19.61 12.25l1.64-1.25-2.06-.05-.69-1.95-.69 1.95-2.06.05 1.64 1.25-.59 1.98 1.7-1.17 1.7 1.17-.59-1.98Z"
                >
                  <animate
                    fill="freeze"
                    attributeName="fill-opacity"
                    begin="1.1s"
                    dur="0.4s"
                    values="0;1"
                  />
                </path>
              </g>
              <!-- Moon arc -->
              <path
                fill="none"
                stroke="currentColor"
                stroke-dasharray="56"
                stroke-dashoffset="56"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 6c0 6.08 4.92 11 11 11 .53 0 1.05-.04 1.56-.11-1.61 2.47-4.39 4.11-7.56 4.11-4.97 0-9-4.03-9-9 0-3.17 1.64-5.95 4.11-7.56-.07.51-.11 1.03-.11 1.56Z"
              >
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="56;0"
                />
              </path>
            </svg>

            <!-- Sun — visible in dark mode (click → go light) -->
            <svg
              v-else
              viewBox="0 0 24 24"
              class="w-[1.15em] h-[1.15em]"
              aria-hidden="true"
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
                  d="M12 7c2.76 0 5 2.24 5 5 0 2.76-2.24 5-5 5-2.76 0-5-2.24-5-5 0-2.76 2.24-5 5-5"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.4s"
                    values="36;0"
                  />
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
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.5s"
                    dur="0.2s"
                    values="2;0"
                  />
                </path>
                <path
                  stroke-dasharray="2"
                  stroke-dashoffset="2"
                  d="M17 17l.5.5M17 7l.5-.5M7 7l-.5-.5M7 17l-.5.5"
                >
                  <animate
                    fill="freeze"
                    attributeName="d"
                    begin="0.7s"
                    dur="0.2s"
                    values="M17 17l.5.5M17 7l.5-.5M7 7l-.5-.5M7 17l-.5.5;M18.5 18.5l.5.5M18.5 5.5l.5-.5M5.5 5.5l-.5-.5M5.5 18.5l-.5.5"
                  />
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.7s"
                    dur="0.2s"
                    values="2;0"
                  />
                </path>
              </g>
            </svg>
          </span>

          <!-- Hover glow ring -->
          <span
            :class="[
              'absolute inset-0 rounded-xl pointer-events-none',
              'ring-2 ring-transparent transition-all duration-300',
              isDarkMode
                ? 'group-hover:ring-primary/25'
                : 'group-hover:ring-secondary/25',
            ]"
          />
        </button>
      </template>

      <span class="text-xs font-medium tracking-wide">
        {{
          isDarkMode ? $t("tooltip.tooltipLight") : $t("tooltip.tooltipDark")
        }}
      </span>
    </v-tooltip>
  </client-only>
</template>

<!-- ===== JS ===== -->
<script setup>
const { toggleDarkMode, isDarkMode } = useDarkMode();
</script>
