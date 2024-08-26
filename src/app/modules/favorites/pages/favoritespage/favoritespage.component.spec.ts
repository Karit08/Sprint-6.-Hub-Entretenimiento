import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritespageComponent } from './favoritespage.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SectionMoviesComponent } from '@shared/components/section-movies/section-movies.component';
import { CardMovieComponent } from '@shared/components/card-movie/card-movie.component';

describe('FavoritespageComponent', () => {
  let component: FavoritespageComponent;
  let fixture: ComponentFixture<FavoritespageComponent>;
  let HttpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [FavoritespageComponent, SectionMoviesComponent, CardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoritespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.getfavorites()
  });
});
