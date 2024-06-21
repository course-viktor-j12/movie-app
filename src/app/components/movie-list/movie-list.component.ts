import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { mockData } from '../../../mock-data';
import { Movie } from '../interfaces/interfaces';
import { CardModule } from 'primeng/card';
import { TransformTimePipe } from '../../pipes/transformTime/transform-time.pipe';
import { RowLengthPipe } from '../../pipes/rowLength/row-length.pipe';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, CardModule, RowLengthPipe],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {
  public data = mockData;
  public favorites: Movie[] = [];
  public watchLists: Movie[] = [];

  public trackById(index: number, item: Movie): number {
    return item.id;
  }

  handleAddFavorites(movie: Movie): void {
    if (!this.favorites.some(fav => fav.id === movie.id)) {
      this.favorites.push(movie);
    } else {
      console.log(`${movie.title} is already in favorites`);
    }
  }

  handleAddWatchLists(movie: Movie): void {
    if (!this.watchLists.some(watch => watch.id === movie.id)) {
      this.watchLists.push(movie);
    } else {
      console.log(`${movie.title} is already in watch list`);
    }
  }
}
