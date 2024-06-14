import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { mockData } from '../../../mock-data';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  public data = mockData;
  public Favorites: string[] = [];
  public WatchList: string[] = [];

  handleAddFavorites(title: string): void {
    if (!this.Favorites.includes(title)) {
      this.Favorites.push(title);
    } else {
      console.log(`${title} is already in favorites`);
    }
  }

  handleAddWatchList(title: string): void {
    if (!this.WatchList.includes(title)) {
      this.WatchList.push(title);
    } else {
      console.log(`${title} is already in watch list`);
    }
  }
}