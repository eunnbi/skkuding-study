<script setup lang="ts">
import { getMovies } from "@/api/movie";
import MovieCard from "@/components/MovieCard.vue";
import { useSearchStore } from "@/stores/search";
import { computed } from "vue";
import { useQuery } from "@tanstack/vue-query";

const { data } = useQuery({
  queryKey: ["movies"],
  queryFn: () => getMovies(),
});

const store = useSearchStore();
const searchResults = computed(() =>
  store.text === ""
    ? data.value?.results
    : data.value?.results.filter(
        (movie) =>
          movie.title.toLowerCase().includes(store.text.toLowerCase()) ||
          store.text.toLowerCase().includes(movie.title.toLowerCase())
      )
);
</script>

<template>
  <main>
    <template v-if="data && searchResults">
      <div v-if="searchResults.length !== 0" class="grid grid-cols-2 gap-5 p-5">
        <MovieCard
          v-for="movie in store.isSearching ? searchResults : data.results"
          :key="movie.id"
          :movie="movie"
        />
      </div>
      <div v-else class="flex items-center justify-center h-[calc(100vh-3rem)]">
        <p>No Results</p>
      </div>
    </template>
  </main>
</template>
