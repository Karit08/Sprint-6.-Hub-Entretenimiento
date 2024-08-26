import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriespageComponent } from './seriespage.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SectionMoviesComponent } from '@shared/components/section-movies/section-movies.component';
import { CardMovieComponent } from '@shared/components/card-movie/card-movie.component';

describe('SeriespageComponent', () => {
  let component: SeriespageComponent;
  let fixture: ComponentFixture<SeriespageComponent>;
  let HttpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SeriespageComponent, SectionMoviesComponent,CardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeriespageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
