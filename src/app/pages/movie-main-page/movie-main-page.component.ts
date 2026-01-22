import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { MovieDetailsPageComponent } from '../movie-details-page/movie-details-page.component';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie/movie.service';
import { Observable } from 'rxjs';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-movie-main-page',
  standalone: true,
  imports: [
    CommonModule,
    MovieListComponent,
    MovieDetailsPageComponent,
    RouterModule,
    TabMenuModule,
    MenuModule,
  ],
  templateUrl: './movie-main-page.component.html',
  styleUrl: './movie-main-page.component.scss',
})
export class MovieMainPageComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private cdr: ChangeDetectorRef
  ) { }
  itemsMenu: MenuItem[] | undefined;
  items: MenuItem[] | undefined;
  public watchListMovies$!: Observable<Movie[]>;
  public favoritesMovies$!: Observable<Movie[]>;

  public trackByLabel(index: number, item: MenuItem): number {
    return index;
  }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Watch List',
        icon: 'pi pi-list',
        routerLink: ['movies/watchList'],
        badge: '0',
      },
      {
        label: 'Favorites',
        icon: 'pi pi-heart',
        routerLink: ['movies/favorites'],
        badge: '0',
      },
    ];

    this.itemsMenu = [
      {
        label: 'Now Playing',
        icon: 'pi pi-angle-double-right',
        routerLink: ['/movies/nowPlayingMovies'],
      },
      {
        label: 'Popular',
        icon: 'pi pi-angle-double-right',
        routerLink: ['/movies/popularMovies'],
      },
      {
        label: 'Top Rated',
        icon: 'pi pi-angle-double-right',
        routerLink: ['/movies/topRatedMovies'],
      },
      {
        label: 'Upcoming',
        icon: 'pi pi-angle-double-right',
        routerLink: ['/movies/upcomingMovies'],
      },
    ];

    this.favoritesMovies$ = this.movieService.getFavoritesMovies();
    this.watchListMovies$ = this.movieService.getWatchListMovies();

    // Оновлюємо бейдж для "Favorites" при кожній зміні
    this.favoritesMovies$.subscribe((movies) => {
      if (this.items) {
        this.items[1].badge = movies.length.toString();
        this.items = [...this.items]; // Переініціалізуємо масив
        this.cdr.detectChanges(); // Вручну детектуємо зміни
      }
    });

    // Оновлюємо бейдж для "Watch List" при кожній зміні
    this.watchListMovies$.subscribe((movies) => {
      if (this.items) {
        this.items[0].badge = movies.length.toString();
        this.items = [...this.items]; // Переініціалізуємо масив
        this.cdr.detectChanges(); // Вручну детектуємо зміни
      }
    });
  }
}
