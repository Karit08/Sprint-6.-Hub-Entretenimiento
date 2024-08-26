import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviespageComponent } from './moviespage.component';
import { SectionMoviesComponent } from '@shared/components/section-movies/section-movies.component';
import { CardMovieComponent } from '@shared/components/card-movie/card-movie.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MoviespageComponent', () => {
  let component: MoviespageComponent;
  let fixture: ComponentFixture<MoviespageComponent>;
  let HttpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [MoviespageComponent, SectionMoviesComponent,CardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
