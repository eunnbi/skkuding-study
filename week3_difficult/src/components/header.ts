import Component from "./base-component";
import { MovieList, movieList } from "../data/movieList";
import { autobind } from "../utils/decorators";

export default class Header extends Component<{ renderMovieList: (movieList: MovieList) => void }, { isSearching: boolean }> {
  setup() {
    this.state = { isSearching: false };
  }
  template() {
    return `<header>
    ${!this.state.isSearching
        ? `<div class="header-center">
    <h1>Movie App</h1>
    <button class="search-button">
      <svg viewBox="0 0 512 512" width="1.2em" height="1.2em">
        <path
          fill="currentColor"
          d="M416 208c0 45.9-14.9 88.3-40 122.7l126.6 126.7c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0s208 93.1 208 208zM208 352c79.5 0 144-64.5 144-144S287.5 64 208 64S64 128.5 64 208s64.5 144 144 144z"
        ></path>
      </svg>
    </button>
  </div>`
        : `<div class="search-bar-wrapper">
  <div class="search-bar">
    <button class="back-button">
      <svg viewBox="0 0 384 512" width="1.2em" height="1.2em">
        <path
          fill="currentColor"
          d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256L278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        ></path>
      </svg>
    </button>
    <input
      placeholder="🔍 Enter the movie title"
      class="search-input"
    />
  </div>
</div>`
      }
  </header>`;
  }
  mounted() {
    document
      .querySelector("button.search-button")!
      .addEventListener("click", this.showSearchBar);
  }
  updated() {
    if (this.state.isSearching) {
      document
        .querySelector("button.back-button")!
        .addEventListener("click", () => {
          this.setState({ isSearching: false });
          this.props.renderMovieList(movieList.results);
        });
      document
        .querySelector("input.search-input")!
        .addEventListener("input", (e) => {
          const target = e.currentTarget as HTMLInputElement;
          const results = movieList.results.filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .includes(target.value.toLowerCase()) ||
              target.value.toLowerCase().includes(movie.title.toLowerCase())
          );
          this.props.renderMovieList(results);
        });
    } else {
      document
        .querySelector("button.search-button")!
        .addEventListener("click", this.showSearchBar);
    }
  }

  @autobind
  showSearchBar() {
    this.setState({ isSearching: true });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
