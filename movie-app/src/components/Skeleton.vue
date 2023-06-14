<script setup lang="ts">
import type { StyleValue } from "vue";
defineProps<{
  style?: StyleValue;
  shadow?: boolean;
}>();
</script>
<template>
  <div
    class="rounded-2xl bg-gray-300 dark:bg-gray-700 animate-pulse"
    :class="shadow ? 'shadow-md' : ''"
    :style="style"
  ></div>
</template>
