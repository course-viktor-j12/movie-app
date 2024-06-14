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
  public favorites: string[] = [];
  public watchLists: string[] = [];

  public trackById(item: any): number {
    return item.id;
  };
  public trackByIndex(index: number): number{
    return index;
  };

   handleAddFavorites(title: string): void {
    if (!this.favorites.includes(title)) {
      this.favorites.push(title);
    } else {
      console.log(`${title} is already in favorites`);
    }
  }

  handleAddWatchList(title: string): void {
    if (!this.watchLists.includes(title)) {
      this.watchLists.push(title);
    } else {
      console.log(`${title} is already in watch list`);
    }
  }
}