<script setup lang="ts">
import { getMovieDetail } from "@/api/movie";
import PosterImage from "@/components/PosterImage.vue";
import Skeleton from "@/components/Skeleton.vue";
import { useTitle } from "@vueuse/core";
import { watch, onBeforeMount } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useQuery } from "@tanstack/vue-query";

const router = useRouter();
const route = useRoute();
const title = useTitle("Movie App");
const { data } = useQuery({
  queryKey: ["movies", { id: route.params.id }],
  queryFn: () => getMovieDetail(Number(route.params.id)),
});
onBeforeMount(async () => {
  if (Number.isNaN(Number(route.params.id))) {
    router.push("/");
  }
  window.scrollTo({
    top: 0,
  });
});
watch(
  data,
  (value, oldValue) => {
    if (value) {
      title.value = `${value.title} | Movie App`;
    } else if (oldValue) {
      title.value = `${oldValue.title} | Movie App`;
    } else if (route.query.title) {
      title.value = `${route.query.title} | Movie App`;
    }
  },
  {
    immediate: true,
  }
);
const goBack = () => {
  if (window.history.state.back === null) {
    router.push("/");
  } else {
    router.go(-1);
  }
};
</script>
<template>
  <main class="flex flex-col gap-8 items-start mb-8 p-5">
    <Skeleton
      v-if="!data && !route.query.title"
      style="width: 50%; height: 32px"
    />
    <h1 v-else class="font-bold text-3xl">
      {{ route.query.title || data?.title }}
    </h1>
    <div class="flex gap-5 sm:flex-col sm:w-full">
      <div
        class="relative shrink-0 w-[300px] h-[450px] sm:w-full sm:h-[calc(150vw-60px)]"
      >
        <Skeleton v-if="!data" style="width: 100%; height: 100%" shadow />
        <PosterImage
          v-else
          :src="`https://image.tmdb.org/t/p/w500${data.poster_path}`"
          :title="data.title"
        />
      </div>
      <div v-if="!data" class="flex flex-col gap-5 w-[150px]">
        <Skeleton style="width: 100%; height: 32px" />
        <Skeleton style="width: 100%; height: 32px" />
        <Skeleton style="width: 100%; height: 32px" />
      </div>
      <div v-else class="flex flex-col gap-5">
        <p class="text-lg">📅 {{ data?.release_date }}</p>
        <p class="text-lg">⭐ {{ data?.vote_average }}</p>
        <ul class="flex flex-wrap gap-2">
          <li
            v-for="{ id, name } in data?.genres"
            :key="id"
            class="p-2 rounded-lg mb-1 shadow-[1px_5px_5px_0_rgba(0,0,0,0.15)] dark:shadow-black"
          >
            {{ name }}
          </li>
        </ul>
      </div>
    </div>
    <div class="w-full">
      <h3 class="font-bold text-xl mb-2">📖 Overview</h3>
      <Skeleton v-if="!data" style="width: 100%; height: 100px" />
      <p v-else class="text-lg">{{ data.overview }}</p>
    </div>
    <button
      @click="goBack"
      class="border border-solid border-black rounded py-2 px-4 hover:bg-black dark:bg-black hover:text-white transition ease-in-out"
    >
      Go Back
    </button>
  </main>
</template>
