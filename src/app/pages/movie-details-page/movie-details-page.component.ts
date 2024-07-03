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
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {}
  public data: Movie[] = [];
  public movie: Movie | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      const pathId = Number(id);
      this.data = this.movieService.getAllMovies();
      this.movie = this.data.find(movie => movie.id === pathId);
      console.log(this.movie);
      
    }
    
  }
}
