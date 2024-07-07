import { Injectable } from '@angular/core';
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../../../mock-data';
import { Movie } from '../../interfaces/movie.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private favoritesMovies: Movie[] = [];
  private favoritesMoviesSubject = new BehaviorSubject<Movie[]>([]);
  private watchListsMovies: Movie[] = [];
  private watchListsMoviesSubject = new BehaviorSubject<Movie[]>([]);

  constructor() { }

  getNowPlayingMovies(): Movie[] {
    return nowPlayingMovies;
  }

  getPopularMovies(): Movie[] {
    return popularMovies;
  }

  getTopRatedMovies(): Movie[] {
    return topRatedMovies;
  }

  getUpcomingMovies(): Movie[] {
    return upcomingMovies;
  }

  getAllMovies(): Movie[] {
    return [...nowPlayingMovies, ...popularMovies, ...topRatedMovies, ...upcomingMovies];
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
