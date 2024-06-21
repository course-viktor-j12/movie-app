import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieMainPageComponent } from './movie-main-page.component';

describe('MovieMainPageComponent', () => {
  let component: MovieMainPageComponent;
  let fixture: ComponentFixture<MovieMainPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieMainPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
