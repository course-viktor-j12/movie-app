import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { Movie } from '../../interfaces/movie.interface';
import { CardModule } from 'primeng/card';
import { RowLengthPipe } from '../../pipes/rowLength/row-length.pipe';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [
    CommonModule,
    MovieCardComponent,
    CardModule,
    RowLengthPipe,
    PaginatorModule
  ],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit, OnChanges {

  @Input() data: Movie[] = [];

  path = '';

  readonly PAGE_SIZE = 3;

  pagedData: Movie[] = [];

  first = 0;
  rows = this.PAGE_SIZE;
  totalRecords = 0;
  
  get showPaginator(): boolean {
  return this.totalRecords > this.PAGE_SIZE;
}

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.url.subscribe((segments: UrlSegment[]) => {
      this.path = segments[1]?.path ?? '';
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data']) {
      this.totalRecords = this.data.length;
      this.first = 0;
      this.updatePage();
    }
  }

  onPageChange(event: PaginatorState): void {
    this.first = event.first ?? 0;
    this.rows = event.rows ?? this.PAGE_SIZE;
    this.updatePage();
  }

  private updatePage(): void {
    this.pagedData = this.data.slice(
      this.first,
      this.first + this.rows
    );
  }

  trackById(_: number, movie: Movie): number {
    return movie.id;
  }
}
