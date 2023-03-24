import ThemeButton from "./components/theme-button";
import HomePage from "./pages";
import MoviePage from "./pages/movie";

class Router {
  parentElement = document.querySelector("div#app");
  constructor() {
    window.addEventListener("popstate", () => {
      this.route();
    });
  }
  route() {
    if (location.pathname === "/") {
      this.parentElement.innerHTML = "";
      new HomePage();
    } else if (location.pathname.includes("/movie")) {
      window.scrollTo({
        top: 0,
      });
      this.parentElement.innerHTML = "";
      const arr = location.pathname.split("/");
      const id = arr[arr.length - 1];
      new MoviePage(id);
    }
    new ThemeButton();
  }
}

const router = new Router();
export default router;
