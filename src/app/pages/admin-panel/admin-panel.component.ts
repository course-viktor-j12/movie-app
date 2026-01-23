import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent implements OnInit {
  movies: Movie[] = [];
  newMovie: Partial<Movie> = {};
  isEditing = false;
  editingMovieId: number | null = null;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies(): void {
    // Завантажуємо фільми з сервісу
    this.movieService.getPopularMovies().subscribe((data) => {
      this.movies = data.results;
    });
  }

  addMovie(): void {
    if (this.newMovie.title) {
      // Логіка для додавання фільму
      this.newMovie = {};
    }
  }

  editMovie(movie: Movie): void {
    this.isEditing = true;
    this.editingMovieId = movie.id;
    this.newMovie = { ...movie };
  }

  saveMovie(): void {
    if (this.isEditing && this.editingMovieId) {
      // Логіка для оновлення фільму
      this.isEditing = false;
      this.editingMovieId = null;
      this.newMovie = {};
    }
  }

  deleteMovie(movieId: number): void {
    // Логіка для видалення фільму
    this.movies = this.movies.filter((m) => m.id !== movieId);
  }

  cancel(): void {
    this.isEditing = false;
    this.editingMovieId = null;
    this.newMovie = {};
  }
}