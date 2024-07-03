import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent implements OnInit{
  constructor(private route: ActivatedRoute){}
  public path: string | undefined;

  ngOnInit(): void {
    // this.route.params.subscribe(params => {
    //   this.path = params['path'];
    //   console.log(this.path);
      
    // });
  }
}
