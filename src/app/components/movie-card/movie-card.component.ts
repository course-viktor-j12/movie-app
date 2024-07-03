import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowLengthPipe } from '../../pipes/rowLength/row-length.pipe';
import { TransformTimePipe } from '../../pipes/transformTime/transform-time.pipe';
import { Movie } from '../../interfaces/movie.interface';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [
    CommonModule,
    RowLengthPipe,
    TransformTimePipe,
    CardModule,
    ButtonModule,
  ],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss',
})
export class MovieCardComponent {
  @Input() inputData!: Movie;
  @Input() catalog!: string;
  @Output() addWatchList = new EventEmitter<Movie>();
  @Output() addFavorites = new EventEmitter<Movie>();
  
  constructor(
    private route: ActivatedRoute, 
    private router: Router) {
    }

  addToWatchList(): void {
    this.addWatchList.emit(this.inputData);
  }

  addToFavorites(): void {
    this.addFavorites.emit(this.inputData);
  }
  navigateToDetails(id: number): void {
    this.router.navigate(['movie', this.inputData.id]);
  }
}
