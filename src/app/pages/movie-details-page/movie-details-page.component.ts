import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';
import { Movie } from '../../interfaces/movie.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-details-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details-page.component.html',
  styleUrl: './movie-details-page.component.scss',
})
export class MovieDetailsPageComponent implements OnInit {
  public movie!: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const pathId = Number(id);
      this.movieService.getDetailMovie(pathId).subscribe({
        next: (data) => this.movie = data,
        error: (error) => {
          console.error('Something went wrong:', error);
        }
      })        
    }
  }
}
