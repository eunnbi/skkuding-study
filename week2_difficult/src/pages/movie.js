import Component from "../components/base-component";
import { movieList } from "../data/movieList";
import { genres } from "../data/genres";
import "../styles/movie.css";

export default class MoviePage extends Component {
  setup() {
    this.state = movieList.results.find(
      (item) => item.id === Number(this.props.id)
    );
    document.title = `${this.state.title} | Movie App`;
  }
  mounted() {
    document
      .querySelector("button.go-back-button")
      .addEventListener("click", () => {
        window.history.back();
      });
  }
  template() {
    return `<main class="movie-page-main">
    <h1 class="movie-title">${this.state.title}</h1>
    <div class="row">
      <img
        class="movie-poster"
        src="https://image.tmdb.org/t/p/w500${this.state.poster_path}"
        alt="${this.state.title} poster"
      />
      <div class="column">
        <span class="movie-release-date">📅 ${this.state.release_date}</span>
        <span class="movie-vote-average">⭐ ${this.state.vote_average}</span>
        <ul class="genre-list">
         ${this.state.genre_ids
           .map((id) => {
             const genre = genres.find((genre) => genre.id === id);
             if (genre) {
               return `<li>${genre.name}</li>`;
             }
           })
           .join("")}
        </ul>
      </div>
    </div>
    <div class="overview-wrapper">
      <h3>📖 Overview</h3>
      <p class="overview">
        ${this.state.overview}
      </p>
    </div>
    <button class="go-back-button">Go Back</button>
  </main>`;
  }
}
