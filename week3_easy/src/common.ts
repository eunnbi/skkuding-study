/* 다크모드 기능 구현 */
const themeButton = document.querySelector("button.theme-button")!; // null 단언문

const KEY = "theme";
themeButton.addEventListener("click", () => {
  if (document.documentElement.classList.contains("dark")) {
    localStorage.setItem(KEY, JSON.stringify("light"));
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.setItem(KEY, JSON.stringify("dark"));
    document.documentElement.classList.add("dark");
  }
});

window.addEventListener("DOMContentLoaded", () => {
  const value = localStorage.getItem(KEY);
  if (value !== null) {
    const theme = JSON.parse(value);
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }
});
