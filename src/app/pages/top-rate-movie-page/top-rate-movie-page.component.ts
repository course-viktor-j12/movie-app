import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-rate-movie-page',
  standalone: true,
  imports: [MovieListComponent, CommonModule],
  templateUrl: './top-rate-movie-page.component.html',
  styleUrl: './top-rate-movie-page.component.scss'
})
export class TopRAteMoviePageComponent implements OnInit {
  constructor(private movieService: MovieService) { }

  public data: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe({
      next: (dataApi) => {
        this.data = dataApi.results;
      },
      error: (error) => {
        console.error('Something went wrong:', error);
      }
    });
  }
}
