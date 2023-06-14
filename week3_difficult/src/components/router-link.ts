import router from "../router";

export default class RouterLink {
  element: HTMLAnchorElement;
  constructor(href: string) {
    this.element = document.createElement("a");
    this.element.href = href;
    this.element.addEventListener("click", (e) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      window.history.pushState(null, "", target.href);
      router.route();
    });
  }
}
