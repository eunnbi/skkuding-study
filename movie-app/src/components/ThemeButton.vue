<script setup lang="ts">
import { StorageSerializers, useStorage } from "@vueuse/core";
import IconSun from "~icons/carbon/sun";
import IconMoon from "~icons/carbon/moon";
import { watch } from "vue";
const mode = useStorage<"dark" | "light">("theme", "light", undefined, {
  serializer: StorageSerializers.string,
});
const onToggle = () => {
  mode.value = mode.value === "dark" ? "light" : "dark";
};
watch(
  mode,
  (value) => {
    if (value === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  {
    immediate: true,
  }
);
</script>

<template>
  <button
    @click="onToggle"
    class="fixed bottom-2 right-2 flex flex-col items-center rounded-2xl p-1 gap-1 z-20"
    :class="mode === 'light' ? 'bg-[#f29f21]' : 'bg-[#17161d]'"
  >
    <div
      class="absolute top-1 left-0 translate-x-[3.6px] bg-white rounded-full w-5 h-5 transition-transform ease-in-out"
      :class="mode === 'dark' ? 'translate-y-[110%]' : ''"
    />
    <IconMoon class="text-white" />
    <IconSun class="text-white" />
  </button>
</template>
