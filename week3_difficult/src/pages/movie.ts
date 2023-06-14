import Component from "../components/base-component";
import { MovieData, movieList } from "../data/movieList";
import { genres } from "../data/genres";
import "../styles/movie.css";

export default class MoviePage extends Component<{ id: string }, { movie: MovieData }> {
  setup() {
    this.state = {
      movie: movieList.results.find(
        (item) => item.id === Number(this.props.id)
      )!
    }
    document.title = `${this.state.movie.title} | Movie App`;
  }
  mounted() {
    document
      .querySelector("button.go-back-button")!
      .addEventListener("click", () => {
        window.history.back();
      });
  }
  template() {
    return `<main class="movie-page-main">
    <h1 class="movie-title">${this.state.movie.title}</h1>
    <div class="row">
      <img
        class="movie-poster"
        src="https://image.tmdb.org/t/p/w500${this.state.movie.poster_path}"
        alt="${this.state.movie.title} poster"
      />
      <div class="column">
        <span class="movie-release-date">📅 ${this.state.movie.release_date}</span>
        <span class="movie-vote-average">⭐ ${this.state.movie.vote_average}</span>
        <ul class="genre-list">
         ${this.state.movie.genre_ids
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
        ${this.state.movie.overview}
      </p>
    </div>
    <button class="go-back-button">Go Back</button>
  </main>`;
  }
}
