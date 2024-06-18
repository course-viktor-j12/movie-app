import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowLengthPipe } from '../../pipes/rowLength/row-length.pipe';
import { TransformTimePipe } from '../../pipes/transformTime/transform-time.pipe';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, RowLengthPipe, TransformTimePipe],
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

