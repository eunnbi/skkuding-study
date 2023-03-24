import Component from "../components/base-component";
import RouterLink from "../components/router-link";
import { movieList } from "../data/movieList";
import "../styles/index.css";

export default class HomePage extends Component {
  constructor() {
    super("home-page");
    document.title = "Home | Movie App";
    this.mainElement = document.querySelector("main");
    this.searchButton = document.querySelector("button.search-button");
    this.searchBarWrapper = document.querySelector("div.search-bar-wrapper");
    this.searchInput = document.querySelector("input.search-input");
    this.headerCenter = document.querySelector("header > div.header-center");
    this.backButton = document.querySelector("button.back-button");
    this.configure();
    this.renderMovieList(movieList.results);
  }
  configure() {
    this.searchButton.addEventListener("click", () => {
      this.searchBarWrapper.classList.remove("hidden");
      this.headerCenter.classList.add("hidden");
      this.searchInput.value = "";
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
    this.backButton.addEventListener("click", () => {
      this.searchBarWrapper.classList.add("hidden");
      this.headerCenter.classList.remove("hidden");
      this.renderMovieList(movieList.results);
    });
    this.searchInput.addEventListener("input", (e) => {
      const results = movieList.results.filter(
        (movie) =>
          movie.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
          e.target.value.toLowerCase().includes(movie.title.toLowerCase())
      );
      this.renderMovieList(results);
    });
  }
  renderMovieList(movieList) {
    this.mainElement.innerHTML = "";
    movieList.forEach((movie) => {
      const movieCard = new RouterLink(`/movie/${movie.id}`);
      movieCard.element.className = "movie-card";
      const poster = document.createElement("img");
      poster.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
      poster.alt = `${movie.title} poster`;
      movieCard.element.appendChild(poster);
      this.mainElement.appendChild(movieCard.element);
    });
  }
}
