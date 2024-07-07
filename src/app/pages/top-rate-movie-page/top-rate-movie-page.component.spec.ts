import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopRAteMoviePageComponent } from './top-rate-movie-page.component';

describe('TopRAteMoviePageComponent', () => {
  let component: TopRAteMoviePageComponent;
  let fixture: ComponentFixture<TopRAteMoviePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopRAteMoviePageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopRAteMoviePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
