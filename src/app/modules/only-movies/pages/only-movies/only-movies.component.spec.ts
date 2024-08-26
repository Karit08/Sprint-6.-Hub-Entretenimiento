import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlyMoviesComponent } from './only-movies.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SectionMoviesComponent } from '@shared/components/section-movies/section-movies.component';
import { CardMovieComponent } from '@shared/components/card-movie/card-movie.component';

describe('OnlyMoviesComponent', () => {
  let component: OnlyMoviesComponent;
  let fixture: ComponentFixture<OnlyMoviesComponent>;
  let HttpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [OnlyMoviesComponent, SectionMoviesComponent,CardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnlyMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
