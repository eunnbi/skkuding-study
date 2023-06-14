<script setup lang="ts">
import { RouterView } from "vue-router";
import Header from "./components/Header.vue";
import ThemeButton from "./components/ThemeButton.vue";
</script>

<template>
  <Header v-if="$route.meta.header" />
  <ThemeButton />
  <RouterView />
</template>
