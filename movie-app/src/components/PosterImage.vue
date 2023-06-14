<script setup lang="ts">
import { UseImage } from "@vueuse/components";
import Skeleton from "./Skeleton.vue";
defineProps<{
  src: string;
  title: string;
}>();
</script>

<template>
  <Skeleton v-if="!src" style="width: 100%; height: 100%" shadow />
  <UseImage v-else :src="src">
    <img
      :src="src"
      :alt="`${title} poster`"
      class="rounded-2xl shadow-md dark:shadow-black"
    />
    <template #loading>
      <Skeleton style="width: 100%; height: 100%" shadow />
    </template>
  </UseImage>
</template>
