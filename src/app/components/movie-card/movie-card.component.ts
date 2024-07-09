import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RowLengthPipe } from '../../pipes/rowLength/row-length.pipe';
import { TransformTimePipe } from '../../pipes/transformTime/transform-time.pipe';
import { Movie } from '../../interfaces/movie.interface';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';

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
export class MovieCardComponent implements OnInit{
  @Input() inputData!: Movie;
  @Input() catalog!: string;
  
  constructor(
    private router: Router,
    private movieService: MovieService) {
    }
  ngOnInit(): void {
    console.log(this.catalog);
  }

  addToWatchList(inputData: Movie): void {
    this.movieService.addWatchListMovie(inputData);
  }

  addToFavorites(inputData: Movie): void {
    this.movieService.addFavoriteMovie(inputData);
  }
  navigateToDetails(id: number): void {
    this.router.navigate(['movie', this.inputData.id]);
  }
  deleteFrom(movie: Movie){
    if(this.catalog === 'watchList'){
      this.movieService.deleteFromWatchListMovies(movie)
    } else if(this.catalog === 'favorites'){
      this.movieService.deleteFromFavoriteMovies(movie)
    }
  }
}
