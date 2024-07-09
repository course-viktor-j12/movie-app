import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upcoming-movie-page',
  standalone: true,
  imports: [MovieListComponent, CommonModule],
  templateUrl: './upcoming-movie-page.component.html',
  styleUrl: './upcoming-movie-page.component.scss'
})
export class UpcomingMoviePageComponent implements OnInit {
  constructor(private movieService: MovieService) { }

  public data: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getUpcomingMovies().subscribe({
      next: (dataApi) => {
        this.data = dataApi.results;
      },
      error: (error) => {
        console.error('Something went wrong:', error);
      }
    });
  }
}