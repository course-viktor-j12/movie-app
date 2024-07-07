import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';

@Component({
  selector: 'app-popular-movie-page',
  standalone: true,
  imports: [MovieListComponent],
  templateUrl: './popular-movie-page.component.html',
  styleUrl: './popular-movie-page.component.scss'
})
export class PopularMoviePageComponent implements OnInit {
  constructor(private movieService: MovieService) { }

  public data: Movie[] = [];

  ngOnInit(): void {
    this.data = this.movieService.getPopularMovies();
  }
}