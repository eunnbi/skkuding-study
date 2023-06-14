import Component from "./base-component";

export default class ThemeButton extends Component<{}, {}> {
  KEY = "theme";
  mounted() {
    document
      .querySelector("button.theme-button")!
      .addEventListener("click", () => {
        if (document.documentElement.classList.contains("dark")) {
          localStorage.setItem(this.KEY, JSON.stringify("light"));
          document.documentElement.classList.remove("dark");
        } else {
          localStorage.setItem(this.KEY, JSON.stringify("dark"));
          document.documentElement.classList.add("dark");
        }
      });
    window.addEventListener("DOMContentLoaded", () => {
      const value = localStorage.getItem(this.KEY);
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
  template() {
    return `<button class="theme-button">
    <div class="circle"></div>
    <svg viewBox="0 0 32 32" width="1.2em" height="1.2em">
      <path
        fill="currentColor"
        d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3Z"
      ></path>
    </svg>
    <svg viewBox="0 0 32 32" width="1.2em" height="1.2em">
      <path
        fill="currentColor"
        d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6ZM5.394 6.813L6.81 5.399l3.505 3.506L8.9 10.319zM2 15.005h5v2H2zm3.394 10.193L8.9 21.692l1.414 1.414l-3.505 3.506zM15 25.005h2v5h-2zm6.687-1.9l1.414-1.414l3.506 3.506l-1.414 1.414zm3.313-8.1h5v2h-5zm-3.313-6.101l3.506-3.506l1.414 1.414l-3.506 3.506zM15 2.005h2v5h-2z"
      ></path>
    </svg>
  </button>`;
  }
}
