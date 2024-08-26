import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMoviesComponent } from './section-movies.component';
import { CardMovieComponent } from '../card-movie/card-movie.component';

describe('SectionMoviesComponent', () => {
  let component: SectionMoviesComponent;
  let fixture: ComponentFixture<SectionMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SectionMoviesComponent, CardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
