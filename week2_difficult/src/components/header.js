import Component from "./base-component";
import { movieList } from "../data/movieList";

export default class Header extends Component {
  setup() {
    this.state = { isSearching: false };
  }
  template() {
    return `<header>
    ${
      !this.state.isSearching
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
      .querySelector("button.search-button")
      .addEventListener("click", () => this.showSearchBar());
    /*addEventListener 함수의 두번째 인자를 this.showSearchBar로 전달하면
    showSearchBar 함수 내부의 this는 addEventListener 메서드를 호출한 HTML Element를 가리킨다.
    하지만, 화살표 함수는 this binding을 하지 않기 때문에 this는 상위 컨텍스트의 this를 가리킨다. */
  }
  updated() {
    if (this.state.isSearching) {
      document
        .querySelector("button.back-button")
        .addEventListener("click", () => {
          this.setState({ isSearching: false });
          this.props.renderMovieList(movieList.results);
        });
      document
        .querySelector("input.search-input")
        .addEventListener("input", (e) => {
          const results = movieList.results.filter(
            (movie) =>
              movie.title
                .toLowerCase()
                .includes(e.target.value.toLowerCase()) ||
              e.target.value.toLowerCase().includes(movie.title.toLowerCase())
          );
          this.props.renderMovieList(results);
        });
    } else {
      document
        .querySelector("button.search-button")
        .addEventListener("click", () => this.showSearchBar());
    }
  }
  showSearchBar() {
    this.setState({ isSearching: true });
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}
