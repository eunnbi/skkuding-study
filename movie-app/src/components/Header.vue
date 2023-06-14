<script setup lang="ts">
import IconMagnifyingGlass from "~icons/fa6-solid/magnifying-glass";
import IconChevronLeft from "~icons/fa6-solid/chevron-left";
import { useSearchStore } from "@/stores/search";
const store = useSearchStore();
</script>

<template>
  <header
    class="fixed top-0 left-0 right-0 z-10 h-12 bg-white shadow-md dark:shadow-black dark:bg-[#252525]"
  >
    <div
      class="max-w-[520px] mx-auto flex justify-between items-center w-full h-full py-2 px-5"
    >
      <div
        v-if="store.isSearching"
        class="w-full h-full dark:bg-[#545454] bg-[#eaeaea] rounded-md px-3 flex items-center gap-3"
      >
        <button @click="store.reset()">
          <IconChevronLeft class="text-sm text-black" />
        </button>
        <input
          v-model="store.text"
          class="bg-inherit focus:outline-none font-normal w-full"
          placeholder="🔍 Enter the movie title"
          ref="target"
        />
      </div>
      <template v-else>
        <h1 class="text-2xl uppercase font-bold">Movie App</h1>

        <button @click="store.showSearchBar()">
          <IconMagnifyingGlass />
        </button>
      </template>
    </div>
  </header>
  <div class="h-12"></div>
</template>
