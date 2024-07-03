import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-top-rate-movie-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './top-rate-movie-page.component.html',
  styleUrl: './top-rate-movie-page.component.scss'
})
export class TopRAteMoviePageComponent implements OnInit {
  constructor(private movieService: MovieService) { }

  public data: Movie[] = [];

  ngOnInit(): void {
    this.data = this.movieService.getTopRatedMovies();
  }
}
