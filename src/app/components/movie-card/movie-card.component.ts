import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowLengthPipe } from '../../pipes/rowLength/row-length.pipe';
import { TransformTimePipe } from '../../pipes/transformTime/transform-time.pipe';
import { Movie, MovieMy } from '../../interfaces/interfaces';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RowLengthPipe, TransformTimePipe, CardModule, ButtonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() inputData!: Movie;
  @Output() addWatchList = new EventEmitter<Movie>();
  @Output() addFavorites = new EventEmitter<Movie>();

  addToWatchList() {
    this.addWatchList.emit(this.inputData);
  }

  addToFavorites() {
    this.addFavorites.emit(this.inputData);
  }
}

