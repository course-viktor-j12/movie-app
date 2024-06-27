import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../../components/movie-list/movie-list.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';

@Component({
  selector: 'app-movie-main-page',
  standalone: true,
  imports: [MovieListComponent, RouterModule, TabMenuModule, MenuModule ],
  templateUrl: './movie-main-page.component.html',
  styleUrl: './movie-main-page.component.scss'
})
export class MovieMainPageComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
    itemsMenu: MenuItem[] | undefined;
    items: MenuItem[] | undefined;
  ngOnInit(): void {
    this.items = [
      { label: 'Favorites', icon: 'pi pi-heart', routerLink: ['/list/favorites'] },
      { label: 'Watch List', icon: 'pi pi-list', routerLink: ['/list/watchList'] },
    ];
    this.itemsMenu = [
      { label: 'Now Playing',  icon: 'pi pi-plus', routerLink: ['/movies/nowPlayingMovies']},
      { label: 'Popular',  icon: 'pi pi-plus', routerLink: ['/movies/popularMovies']},
      { label: 'Top Rated',  icon: 'pi pi-plus', routerLink: ['/movies/topRatedMovies']},
      { label: 'Upcoming',  icon: 'pi pi-plus', routerLink: ['/movies/upcomingMovies']}
    ];
  }
}
