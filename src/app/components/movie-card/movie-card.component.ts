import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() inputData: any;
  @Output() addWatchList = new EventEmitter<any>();
  @Output() addFavorites = new EventEmitter<any>();

  addToWatchList() {
    this.addWatchList.emit(this.inputData.title);
  }

  addToFavorites() {
    this.addFavorites.emit(this.inputData.title);
  }
}

