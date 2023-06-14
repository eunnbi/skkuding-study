import axios from "axios";

export interface MoviesData {
  page: number;
  results: MovieData[];
  total_pages: number;
  total_results: number;
}

export interface MovieData {
  id: number;
  backdrop_path: string;
  original_title: string;
  overview: string;
  poster_path: string;
  title: string;
  vote_average: number;
  genres: {
    id: number;
    name: string;
  }[];
  release_date: string;
  homepage: string;
}
const API_KEY = process.env.VUE_APP_API_KEY;
export const getMovies = async (pageParam: number = 1) => {
  const { data } = await axios.get<MoviesData>(
    `https://api.themoviedb.org/3/movie/popular?page=${pageParam}&api_key=${API_KEY}`
  );
  return data;
};

export const getMovieDetail = async (id: number) => {
  const { data } = await axios.get<MovieData>(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  return data;
};
