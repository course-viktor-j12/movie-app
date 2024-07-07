import { Injectable } from '@angular/core';
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../../../mock-data';
import { Movie } from '../../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private favoritesMovies: Movie[] = [];
  private watchListsMovies: Movie[] = [];

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

  getFavoritesMovies(): Movie[] {
    return this.favoritesMovies;
  }
  
  addFavoriteMovie(movie: Movie): void {
    if (!this.favoritesMovies.some(fav => fav.id === movie.id)) {
      this.favoritesMovies.push(movie);
    }
  }
  
  deleteFromFavoriteMovies(movie: Movie): void {
    this.favoritesMovies = this.favoritesMovies.filter(fav => fav.id!== movie.id);
  }

  getWatchListMovies(): Movie[] {
    return this.watchListsMovies;
  }

  addWatchListMovie(movie: Movie): void {
    if (!this.watchListsMovies.some(watch => watch.id === movie.id)) {
      this.watchListsMovies.push(movie);
    }
  }
  deleteFromWatchList(movie: Movie): void{
    this.watchListsMovies = this.watchListsMovies.filter(watch => watch.id!== movie.id);
  }
}
