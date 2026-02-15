<template>
  <div>
    <ClientOnly>
      <v-dialog v-model="dialog" max-width="830" max-height="750">
        <div
          class="relative! overflow-y-auto! rounded-bl-4xl rounded-tr-4xl shadow-lg backdrop-blur-2xl dark:shadow-gray-300/20"
        >
          <div
            class="p-14! grid grid-cols-1 sm:grid-cols-2 gap-8 items-center text-primary! dark:text-textsecondary! bg-textsecondary dark:bg-[#ffffff1a]"
          >
            <!-- Image and btn Favorites -->

            <div class="text-center">
              <!-- btn Favorites -->
              <BtnFavorites :item="item" />
              <div
                class="bg-textmain/30! dark:bg-textsecondary! p-2! mt-4 sm:mt-0"
              >
                <img :src="item.image" :alt="$t(item.name)" class="w-full" />
              </div>
            </div>
            <!-- Text Content -->
            <div
              :class="lang == 'ar' ? 'text-end' : 'text-start'"
              class="dark:text-textsecondary text-textmain"
            >
              <h1 class="text-2xl font-semibold">
                <span class="text-primaryTwo dark:text-secondary ms-1"
                  >{{ $t("all.name") }}:
                </span>
                {{ $t(item.name) }}
              </h1>

              <ul class="mt-4 space-y-2">
                <li
                  v-if="item.period"
                  class="my-2! text-textmain dark:text-textsecondary"
                >
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.period") }}:
                  </strong>
                  {{ $t(item.period) }}
                </li>

                <li v-if="item.location">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.location") }}:
                  </strong>
                  {{ $t(item.location) }}
                </li>

                <li v-if="item.description" class="my-2!">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.description") }}:
                  </strong>
                  {{ $t(item.description) }}
                </li>

                <li v-if="item.desc2">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.desc2") }}:
                  </strong>
                  {{ $t(item.desc2) }}
                </li>

                <li v-if="item.material" class="my-2!">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.material") }}:
                  </strong>
                  {{ $t(item.material) }}
                </li>

                <li v-if="item.usage" class="my-2!">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.usage") }}:
                  </strong>
                  {{ $t(item.usage) }}
                </li>

                <li v-if="item.discoverer" class="my-2!">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.discoverer") }}:
                  </strong>
                  {{ $t(item.discoverer) }}
                </li>

                <li v-if="item.themes">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.themes") }}:
                  </strong>
                  {{ $t(item.themes) }}
                </li>

                <li v-if="item.importance" class="my-2!">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.importance") }}:
                  </strong>
                  {{ $t(item.importance) }}
                </li>

                <li v-if="item.owner">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.owner") }}:
                  </strong>
                  {{ $t(item.owner) }}
                </li>

                <li v-if="item.burialType">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.burialType") }}:
                  </strong>
                  {{ $t(item.burialType) }}
                </li>

                <li v-if="item.museum">
                  <strong class="ms-1 text-primaryTwo dark:text-secondary">
                    {{ $t("all.museum") }}:
                  </strong>
                  {{ $t(item.museum) }}
                </li>
              </ul>
            </div>
          </div>

          <!-- Btn Close -->
          <v-btn
            class="w-8 absolute! top-4! left-2!"
            variant="tonal"
            @click="dialog = false"
          >
            <v-icon
              class="mdi mdi-close text-primaryTwo!z dark:text-secondary!"
            />
          </v-btn>
        </div>
      </v-dialog>
    </ClientOnly>
  </div>
</template>

<!-- ---------- JS --------- -->
<script setup>
import { ref, onMounted } from "vue";
let dialog = ref(false);
let item = ref({});

let { $emitter } = useNuxtApp();

onMounted(() => {
  $emitter.on("openDialogDetelis", (data) => {
    item.value = data;
    dialog.value = !dialog.value;
  });
});

// Lang
import { useLang } from "../../composables/UseChangeLang";
let { lang } = useLang();

// Button Favorites
import BtnFavorites from "./BtnFavorites.vue";
</script>
