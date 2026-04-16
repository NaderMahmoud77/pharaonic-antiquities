<template>
  <section class="px-4">
    <div
      v-gsap.entrance.slide-left.stagger="{
        duration: 1,
        stagger: 0.6,
      }"
    >
      <!-- Title -->
      <h2
        class="text-4xl font-bold text-center text-primaryTwo dark:text-secondary"
      >
        {{ $t("section_royal_mummies.title") }}
      </h2>
      <!-- DECORATIVE LINE -->
      <div dir="ltr" class="flex items-center justify-center gap-4 mb-6 mt-2">
        <div
          class="h-px w-20 bg-gradient-to-r from-transparent to-primaryTwo dark:to-secondary"
        ></div>
        <div class="w-2 h-2 rotate-45 bg-primaryTwo dark:bg-secondary"></div>
        <div
          class="h-px w-20 bg-gradient-to-l from-transparent to-primaryTwo dark:to-secondary"
        ></div>
      </div>

      <p class="text-center text-gray-600 max-w-2xl mx-auto mb-20! mt-3">
        {{ $t("section_royal_mummies.subtitle") }}
      </p>
    </div>
    <!--  -->
    <ClientOnly>
      <div
        class="container! mx-auto! max-w-[800px]!"
        v-gsap.entrance.slide-right.stagger="{
          duration: 1,
          stagger: 0.3,
        }"
      >
        <v-defaults-provider
          :defaults="{
            VBtn: {
              variant: 'outlined',
              rounded: 'xl',
              size: 'small',
              class:
                'dark:bg-secondary! bg-textmain! text-secondary! dark:text-primaryTwo!',
            },
          }"
        >
          <v-sheet class="overflow-hidden" max-width="800" rounded="xl">
            <v-carousel
              v-model="currentIndex"
              direction="vertical"
              height="400"
              hide-delimiter-background
              cycle
              :interval="3000"
            >
              <v-carousel-item
                v-for="(item, i) in royalMummies"
                :key="i"
                :src="item.image"
                cover
              ></v-carousel-item>

              <v-overlay
                :scrim="false"
                content-class="w-100 h-100 d-flex flex-column align-center justify-space-between pointer-pass-through py-3 px-2"
                contained
                model-value
                no-click-animation
                persistent
              >
                <v-scroll-x-transition mode="out-in" appear>
                  <v-sheet
                    :key="currentIndex"
                    rounded="xl"
                    class="bg-textsecondary! dark:bg-primaryTwo/70! shadow-md! shadow-black/30! dark:shadow-gray-300/20! py-1! text-primary! dark:text-secondary!"
                  >
                    <v-list-item
                      :subtitle="$t(currentItem.description)"
                      :title="$t(currentItem.name)"
                      class="pr-6"
                    >
                      <!-- Button Show Detelis -->
                      <template #prepend>
                        <BtnShowDeteils class="me-6" :data="currentItem" />
                      </template>
                    </v-list-item>
                  </v-sheet>
                </v-scroll-x-transition>
                <v-chip
                  :text="`${currentIndex + 1} / ${royalMummies.length}`"
                  color="#eee"
                  size="small"
                  variant="flat"
                ></v-chip>
              </v-overlay>
            </v-carousel>
          </v-sheet>
        </v-defaults-provider>
      </div>
    </ClientOnly>
  </section>
</template>

<!-- ======== JS ======== -->
<script setup>
import { shallowRef, toRef } from "vue";
// Data
import { royalMummies } from "~/data/royalMummies";
// Btn
import BtnShowDeteils from "../UI/BtnShowDeteils.vue";

const currentIndex = shallowRef(0);
const currentItem = toRef(() => royalMummies[currentIndex.value]);
</script>
