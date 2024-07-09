import { Injectable } from '@angular/core';
import { Movie, MovieData } from '../../interfaces/movie.interface';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private favoritesMovies: Movie[] = [];
  private favoritesMoviesSubject = new BehaviorSubject<Movie[]>([]);
  private watchListsMovies: Movie[] = [];
  private watchListsMoviesSubject = new BehaviorSubject<Movie[]>([]);

  apiKey = '?api_key=a66e14aac3918847e798bf6247df6743';
  baseApiUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private httpClient: HttpClient) {}

  getNowPlayingMovies(): Observable<MovieData> {
   return this.httpClient.get<MovieData>(`${this.baseApiUrl}/now_playing${this.apiKey}`);
  }

  getPopularMovies(): Observable<MovieData> {
    return this.httpClient.get<MovieData>(`${this.baseApiUrl}/popular${this.apiKey}`);
  }

  getTopRatedMovies(): Observable<MovieData> {
    return this.httpClient.get<MovieData>(`${this.baseApiUrl}/top_rated${this.apiKey}`);
  }

  getUpcomingMovies(): Observable<MovieData> {
    return this.httpClient.get<MovieData>(`${this.baseApiUrl}/upcoming${this.apiKey}`);
  }

  getDetailMovie(movieId: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.baseApiUrl}/${movieId}${this.apiKey}`);
  }

  getFavoritesMovies(): Observable<Movie[]> {
    return this.favoritesMoviesSubject.asObservable();
  }

  addFavoriteMovie(movie: Movie): void {
    if (!this.favoritesMovies.includes(movie)) {
      this.favoritesMovies.push(movie);
    }
    this.favoritesMoviesSubject.next(this.favoritesMovies);
  }

  deleteFromFavoriteMovies(movie: Movie): void {
    this.favoritesMovies = this.favoritesMovies.filter(fav => fav.id !== movie.id);
    this.favoritesMoviesSubject.next(this.favoritesMovies);
  }

  getWatchListMovies(): Observable<Movie[]> {
    return this.watchListsMoviesSubject.asObservable();
  }

  addWatchListMovie(movie: Movie): void {
    if (!this.watchListsMovies.includes(movie)) {
      this.watchListsMovies.push(movie);
    }
    this.watchListsMoviesSubject.next(this.watchListsMovies);
  }

  deleteFromWatchListMovies(movie: Movie): void {
    this.watchListsMovies = this.watchListsMovies.filter(watch => watch.id !== movie.id);
    this.watchListsMoviesSubject.next(this.watchListsMovies);
  }
}
