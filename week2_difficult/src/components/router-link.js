import router from "../router";

export default class RouterLink {
  constructor(href) {
    this.element = document.createElement("a");
    this.element.href = href;
    this.element.addEventListener("click", (e) => {
      e.preventDefault();
      window.history.pushState(null, "", e.currentTarget.href);
      router.route();
    });
  }
}
