import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watch-list',
  standalone: true,
  imports: [MovieListComponent, CommonModule],
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.scss']
})
export class WatchListComponent implements OnInit {
  watchListMovies$!: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.watchListMovies$ = this.movieService.getWatchListMovies();
  }
}
