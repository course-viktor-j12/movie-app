import { Routes } from '@angular/router';
import { MovieMainPageComponent } from './pages/movie-main-page/movie-main-page.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
    {
        path: '', component: MovieMainPageComponent
    },
    {
        path: 'movies/:path', component: MovieListComponent
    },
    {
        path: 'list/:path', component: MovieListComponent
    },
    {
        path: '**', component: PageNotFoundComponent
    }
];

