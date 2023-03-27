import Component from "../components/base-component";
import Header from "../components/header";
import RouterLink from "../components/router-link";
import { movieList } from "../data/movieList";
import "../styles/index.css";

export default class HomePage extends Component {
  setup() {
    document.title = "Home | Movie App";
  }
  mounted() {
    this.renderMovieList(movieList.results);
    new Header(this.$target, "afterbegin", {
      renderMovieList: this.renderMovieList,
    });
  }
  template() {
    return `
  <div class="spacer"></div>
  <main class="home-page-main">
  </main>`;
  }
  renderMovieList(movieList) {
    const main = document.querySelector("main.home-page-main");
    main.innerHTML = "";
    const fragment = new DocumentFragment();
    movieList.forEach((movie) => {
      const movieCard = new RouterLink(`/movie/${movie.id}`);
      movieCard.element.className = "movie-card";
      const poster = document.createElement("img");
      poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      poster.alt = `${movie.title} poster`;
      movieCard.element.appendChild(poster);
      fragment.appendChild(movieCard.element);
    });
    main.appendChild(fragment);
  }
}
