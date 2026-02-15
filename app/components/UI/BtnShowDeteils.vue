<template>
  <div>
    <button
      class="group/button text-textsecondary! relative inline-flex items-center justify-center overflow-hidden rounded-md bg-textmain! dark:bg-gray-800/30! backdrop-blur-lg px-6 py-2 text-base font-semibold text- transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-gray-600/50 border! border-white/20"
      @click="showDialog"
    >
      <span class="text-lg"> {{ $t("all.detailsBtn") }}</span>
      <div
        class="absolute inset-0 flex h-full w-full justify-center transform-[skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:transform-[skew(-13deg)_translateX(100%)]"
      >
        <div class="relative h-full w-10 bg-white/20"></div>
      </div>
    </button>
  </div>
</template>

<!-- --------- JS ---------- -->
<script setup>
import { defineProps } from "vue";
// Data
let props = defineProps({
  data: {
    type: Object,
  },
});

// Show Dialog
let { $emitter } = useNuxtApp();
let showDialog = () => {
  $emitter.emit("openDialogDetelis", props.data);
};
</script>

<!-- ======== Style ======== -->
<style scoped>
.animated-button {
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 16px 36px;
  border: 4px solid;
  border-color: transparent;
  font-size: 16px;
  background-color: inherit;
  border-radius: 100px;
  font-weight: 600;
  color: var(--color-secondary);
  box-shadow: 0 0 0 2px var(--color-secondary);
  cursor: pointer;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button svg {
  position: absolute;
  width: 24px;
  fill: var(--color-secondary);
  z-index: 9;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
  right: 16px;
}

.animated-button .arr-2 {
  left: -25%;
}

.animated-button .circle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  background-color: var(--color-secondary);
  border-radius: 50%;
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
  position: relative;
  z-index: 1;
  transform: translateX(-12px);
  transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
  box-shadow: 0 0 0 12px transparent;
  color: #212121 !important;
  border-radius: 12px;
}

.animated-button:hover .arr-1 {
  right: -25%;
}

.animated-button:hover .arr-2 {
  left: 16px;
}

.animated-button:hover .text {
  transform: translateX(12px);
}

.animated-button:hover svg {
  fill: #212121;
}

.animated-button:active {
  scale: 0.95;
  box-shadow: 0 0 0 4px var(--color-secondary);
}

.animated-button:hover .circle {
  width: 220px;
  height: 220px;
  opacity: 1;
}
</style>
