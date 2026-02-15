<template>
  <div>
    <ClientOnly>
      <v-dialog v-model="dialog" max-width="800" max-height="750">
        <div
          class="p-8! text-center text-textsecondary! relative! overflow-y-auto! rounded-bl-4xl rounded-tr-4xl shadow-lg backdrop-blur-2xl dark:shadow-gray-300/20"
        >
          <h1 class="mb-4 mt-10 font-semibold">{{ item.name }}</h1>
          <img
            :src="item.src"
            :alt="item.name"
            class="w-full max-h-[500px] object-contain"
          />

          <v-btn
            class="w-8 absolute! top-4! left-2!"
            variant="tonal"
            @click="dialog = false"
          >
            <v-icon
              class="mdi mdi-close text-primaryTwo! dark:text-secondary!"
            />
          </v-btn>
        </div>
      </v-dialog>
    </ClientOnly>
  </div>
</template>

<!-- ===== JS ===== -->
<script setup>
import { ref, onMounted } from "vue";

// Show Dialog
let dialog = ref(false);
let item = ref({});

let { $emitter } = useNuxtApp();
onMounted(() => {
  $emitter.on("openDialogGallery", (data) => {
    item.value = data;
    dialog.value = !dialog.value;
  });
});
</script>
