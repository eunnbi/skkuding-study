import ThemeButton from "./components/theme-button";
import HomePage from "./pages";
import MoviePage from "./pages/movie";

class Router {
  constructor($root) {
    this.$root = $root;
    window.addEventListener("popstate", () => {
      this.route();
    });
  }
  route() {
    this.$root.innerHTML = "";
    if (location.pathname === "/") {
      new HomePage(this.$root, "afterbegin");
    } else if (location.pathname.includes("/movie")) {
      window.scrollTo({
        top: 0,
      });
      const arr = location.pathname.split("/");
      const id = arr[arr.length - 1];
      new MoviePage(this.$root, "afterbegin", { id });
    }
    new ThemeButton(this.$root);
  }
}

const router = new Router(document.querySelector("#app"));
export default router;
