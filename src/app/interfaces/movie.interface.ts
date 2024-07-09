export interface MovieData{
  page: number;
  results: Movie[];
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
// export interface MovieMy {
//   id: number;
//   title: string;
//   overview: string;
//   duration: number;
//   release_date: string;
//   vote_average: number;
//   poster_path: string;
//   backdrop_path: string;
//   popularity: number;
// }