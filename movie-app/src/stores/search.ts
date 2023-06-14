import { defineStore } from "pinia";
import { ref } from "vue";

export const useSearchStore = defineStore("search", () => {
  const isSearching = ref(false);
  const text = ref("");
  const showSearchBar = () => {
    isSearching.value = true;
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const reset = () => {
    text.value = "";
    isSearching.value = false;
  };
  return { text, reset, showSearchBar, isSearching };
});
