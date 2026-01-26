import { Injectable } from '@angular/core';
import { Movie, MovieData } from '../../interfaces/movie.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private favoritesMovies: Movie[] = [];
  private favoritesMoviesSubject = new BehaviorSubject<Movie[]>([]);
  private watchListsMovies: Movie[] = [];
  private watchListsMoviesSubject = new BehaviorSubject<Movie[]>([]);

  private readonly FAVORITES_KEY = 'favorites_movies';
  private readonly WATCHLIST_KEY = 'watchlist_movies';

  apiKey = '?api_key=a66e14aac3918847e798bf6247df6743';
  baseApiUrl = 'https://api.themoviedb.org/3/movie';

  constructor(private httpClient: HttpClient) {
    this.loadFromLocalStorage();
  }

  // Завантажуємо дані з localStorage при ініціалізації сервісу
  private loadFromLocalStorage(): void {
    const savedFavorites = localStorage.getItem(this.FAVORITES_KEY);
    const savedWatchList = localStorage.getItem(this.WATCHLIST_KEY);

    if (savedFavorites) {
      this.favoritesMovies = JSON.parse(savedFavorites);
      this.favoritesMoviesSubject.next(this.favoritesMovies);
    }

    if (savedWatchList) {
      this.watchListsMovies = JSON.parse(savedWatchList);
      this.watchListsMoviesSubject.next(this.watchListsMovies);
    }
  }

  // Зберігаємо дані в localStorage
  private saveToLocalStorage(): void {
    localStorage.setItem(this.FAVORITES_KEY, JSON.stringify(this.favoritesMovies));
    localStorage.setItem(this.WATCHLIST_KEY, JSON.stringify(this.watchListsMovies));
  }

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
    if (!this.favoritesMovies.find(fav => fav.id === movie.id)) {
      this.favoritesMovies.push(movie);
      this.favoritesMoviesSubject.next([...this.favoritesMovies]);
      this.saveToLocalStorage();
    }
  }

  deleteFromFavoriteMovies(movie: Movie): void {
    this.favoritesMovies = this.favoritesMovies.filter(fav => fav.id !== movie.id);
    this.favoritesMoviesSubject.next([...this.favoritesMovies]);
    this.saveToLocalStorage();
  }

  getWatchListMovies(): Observable<Movie[]> {
    return this.watchListsMoviesSubject.asObservable();
  }

  addWatchListMovie(movie: Movie): void {
    if (!this.watchListsMovies.find(watch => watch.id === movie.id)) {
      this.watchListsMovies.push(movie);
      this.watchListsMoviesSubject.next([...this.watchListsMovies]);
      this.saveToLocalStorage();
    }
  }

  deleteFromWatchListMovies(movie: Movie): void {
    this.watchListsMovies = this.watchListsMovies.filter(watch => watch.id !== movie.id);
    this.watchListsMoviesSubject.next([...this.watchListsMovies]);
    this.saveToLocalStorage();
  }

  // Очистити всі дані з localStorage
  clearAllData(): void {
    localStorage.removeItem(this.FAVORITES_KEY);
    localStorage.removeItem(this.WATCHLIST_KEY);
    this.favoritesMovies = [];
    this.watchListsMovies = [];
    this.favoritesMoviesSubject.next([]);
    this.watchListsMoviesSubject.next([]);
  }
}
