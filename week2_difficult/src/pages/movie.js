import Component from "../components/base-component";
import { movieList } from "../data/movieList";
import { genres } from "../data/genres";
import "../styles/movie.css";

export default class MoviePage extends Component {
  constructor(id) {
    super("movie-page");
    this.movie = movieList.results.find((item) => item.id === Number(id));
    document.title = `${this.movie.title} | Movie App`;
    this.movieTitle = document.querySelector("h1.movie-title");
    this.overview = document.querySelector("p.overview");
    this.moviePoster = document.querySelector("img.movie-poster");
    this.releaseDate = document.querySelector("p.movie-release-date");
    this.voteAverage = document.querySelector("p.movie-vote-average");
    this.genreList = document.querySelector("ul.genre-list");
    this.goBackButton = document.querySelector("button.go-back-button");
    this.configure();
  }
  configure() {
    this.movieTitle.textContent = this.movie.title;
    this.overview.textContent = this.movie.overview;
    this.moviePoster.src = `https://image.tmdb.org/t/p/w500${this.movie.poster_path}`;
    this.moviePoster.alt = `${this.movie.title} poster`;
    this.releaseDate.textContent = `📅 ${this.movie.release_date}`;
    this.voteAverage.textContent = `⭐ ${this.movie.vote_average}`;
    this.movie.genre_ids.forEach((id) => {
      const genre = genres.find((genre) => genre.id === id);
      if (genre) {
        const li = document.createElement("li");
        li.textContent = genre.name;
        this.genreList.appendChild(li);
      }
    });
    this.goBackButton.addEventListener("click", () => {
      window.history.back();
    });
  }
}
