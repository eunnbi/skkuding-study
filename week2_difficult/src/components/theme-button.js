import Component from "./base-component";

export default class ThemeButton extends Component {
  constructor() {
    super("theme-button");
    this.element = document.querySelector("button.theme-button");
    this.configure();
  }
  configure() {
    const KEY = "theme";
    this.element = document.querySelector("button.theme-button");
    this.element.addEventListener("click", () => {
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
  }
}
