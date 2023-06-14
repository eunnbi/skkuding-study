import ThemeButton from "./components/theme-button";
import HomePage from "./pages";
import MoviePage from "./pages/movie";

class Router {
  private $root: HTMLElement;
  constructor($root: HTMLElement) {
    this.$root = $root;
    window.addEventListener("popstate", () => {
      this.route();
    });
  }
  route() {
    this.$root.innerHTML = "";
    if (location.pathname === "/") {
      new HomePage(this.$root);
    } else if (location.pathname.includes("/movie")) {
      window.scrollTo({
        top: 0,
      });
      const arr = location.pathname.split("/");
      const id = arr[arr.length - 1];
      new MoviePage(this.$root, { id });
    }
    new ThemeButton(this.$root);
  }
}

const router = new Router(document.querySelector("#app")!);
export default router;
