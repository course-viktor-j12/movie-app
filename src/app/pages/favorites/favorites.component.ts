import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [MovieListComponent, CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  favoritesMovies$!: Observable<Movie[]>;

  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.favoritesMovies$ = this.movieService.getFavoritesMovies();
  }
}
