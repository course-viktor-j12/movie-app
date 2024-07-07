import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NowPlayingMoviePageComponent } from './pages/now-playing-movie-page/now-playing-movie-page.component';
import { PopularMoviePageComponent } from './pages/popular-movie-page/popular-movie-page.component';
import { UpcomingMoviePageComponent } from './pages/upcoming-movie-page/upcoming-movie-page.component';
import { TopRAteMoviePageComponent } from './pages/top-rate-movie-page/top-rate-movie-page.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';
import { WatchListComponent } from './pages/watch-list/watch-list.component';
import { MovieDetailsPageComponent } from './pages/movie-details-page/movie-details-page.component';

export const routes: Routes = [
    {
        path: '',
        component: NowPlayingMoviePageComponent
    },
    {
        path: 'movie/:id',
        component: MovieDetailsPageComponent
    },
    {
        path: 'movies/nowPlayingMovies',
        component: NowPlayingMoviePageComponent
    },
    {
        path: 'movies/popularMovies',
        component: PopularMoviePageComponent
    },
    {
        path: 'movies/topRatedMovies',
        component: TopRAteMoviePageComponent
    },
    {
        path: 'movies/upcomingMovies',
        component: UpcomingMoviePageComponent
    },
    {
        path: 'movies/favorites',
        component: FavoritesComponent
    },
    {
        path: 'movies/watchList',
        component: WatchListComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    },
];
