import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoadingStateComponent } from '../../shared/loading-state/loading-state.component';

@Component({
  selector: 'app-now-playing-movie-page',
  standalone: true,
  imports: [MovieListComponent, HttpClientModule, CommonModule, LoadingStateComponent],
  templateUrl: './now-playing-movie-page.component.html',
  styleUrls: ['./now-playing-movie-page.component.scss']
})
export class NowPlayingMoviePageComponent implements OnInit {
  constructor(private movieService: MovieService) { }

  public data: Movie[] = [];

  ngOnInit(): void {
    this.movieService.getNowPlayingMovies().subscribe({
      next: (dataApi) => this.data = dataApi.results,
      error: (error) => {
        console.error('Something went wrong:', error);
      }
    });
  }
}
