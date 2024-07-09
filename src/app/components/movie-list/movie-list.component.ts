import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../interfaces/movie.interface';
import { CardModule } from 'primeng/card';
import { RowLengthPipe } from '../../pipes/rowLength/row-length.pipe';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { MovieService } from '../../services/movie/movie.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, CardModule, RowLengthPipe],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() data!: Movie[];
  public path: string = '';
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments: UrlSegment[]) => {
      if (segments.length > 1) {
        this.path = segments[1].path;
      }
    });
  }

  public trackById(index: number, item: Movie): number {
    return item.id;
  }
}


