import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { MovieDetailsPageComponent } from '../movie-details-page/movie-details-page.component';
import { CommonModule } from '@angular/common';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    // BrowserAnimationsModule,
  ],
  templateUrl: './movie-main-page.component.html',
  styleUrl: './movie-main-page.component.scss',
})
export class MovieMainPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  itemsMenu: MenuItem[] | undefined;
  items: MenuItem[] | undefined;
  public trackByLabel(index: number, item: MenuItem): number {
    return index;
  }
  ngOnInit(): void {
    this.items = [
      {
        label: 'Favorites',
        icon: 'pi pi-heart',
        routerLink: ['movies/favorites'],
      },
      {
        label: 'Watch List',
        icon: 'pi pi-list',
        routerLink: ['movies/watchList'],
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
  }
}
