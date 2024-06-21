import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { mockData } from '../../../mock-data-my';
import { Movie, MovieMy } from '../../interfaces/interfaces';
import { CardModule } from 'primeng/card';
import { TransformTimePipe } from '../../pipes/transformTime/transform-time.pipe';
import { RowLengthPipe } from '../../pipes/rowLength/row-length.pipe';
import { ActivatedRoute } from '@angular/router';
import { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } from '../../../mock-data';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, CardModule, RowLengthPipe],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  public data = nowPlayingMovies;
  public favorites: Movie[] = [];
  public watchLists: Movie[] = [];
  public path: string = 'nowPlayingMovies';



  constructor(private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    const path$ = this.route.params.subscribe(
      params => {
        this.fetchData(params['path'])
      }
    )

  }
  public fetchData(path: string): void {
    switch (path) {
      case 'upcomingMovies':
        this.data = upcomingMovies;
        break;
      case 'popularMovies':
        this.data = popularMovies;
        break;
      case 'nowPlayingMovies':
        this.data = nowPlayingMovies;
        break;
      case 'topRatedMovies':
        this.data = topRatedMovies;
        break;
      case 'favorites':
        this.data = this.favorites;
        break;
      case 'watchList':
        this.data = this.watchLists;
        break;
      default:
        this.data = nowPlayingMovies;
        break;
    }
  }
  public trackById(index: number, item: Movie): number {
    return item.id;
  }
  handleAddFavorites(movie: Movie): void {
    if (!this.favorites.some(fav => fav.id === movie.id)) {
      this.favorites.push(movie);
      this.saveFavoritesToLocalStorage();
    } else {
      console.log(`${movie.title} is already in favorites`);
    }
  }

  private saveFavoritesToLocalStorage(): void {
    localStorage.setItem('favorites', JSON.stringify(this.favorites));
  }

  handleAddWatchLists(movie: Movie): void {
    if (!this.watchLists.some(watch => watch.id === movie.id)) {
      this.watchLists.push(movie);
    } else {
      console.log(`${movie.title} is already in watch list`);
    }
  }
}

