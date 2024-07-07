import { Component } from '@angular/core';
import { MovieMainPageComponent } from './pages/movie-main-page/movie-main-page.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MovieMainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
}
