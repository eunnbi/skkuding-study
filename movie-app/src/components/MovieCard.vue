<script setup lang="ts">
import type { MovieData } from "@/api/movie";
import { ref } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import PosterImage from "./PosterImage.vue";
const props = defineProps<{
  movie: MovieData;
}>();
const target = ref<HTMLDivElement | null>(null);
const src = ref("");
useIntersectionObserver(target, ([{ isIntersecting }], observer) => {
  if (isIntersecting && target.value) {
    src.value = `https://image.tmdb.org/t/p/w500/${props.movie.poster_path}`;
    observer.unobserve(target.value);
  }
});
</script>

<template>
  <div
    ref="target"
    @click="$router.push(`/movies/${movie.id}?title=${movie.title}`)"
    class="w-full h-[345px] cursor-pointer relative rounded-2xl hover:scale-105 transition-transform duration-200 ease-in-out sm:h-[calc(70vw-30px)]"
  >
    <PosterImage :title="movie.title" :src="src" />
  </div>
</template>
