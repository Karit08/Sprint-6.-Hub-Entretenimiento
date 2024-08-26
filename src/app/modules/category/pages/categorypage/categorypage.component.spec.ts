import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategorypageComponent } from './categorypage.component';
import { SectionMoviesComponent } from '@shared/components/section-movies/section-movies.component';
import { CardMovieComponent } from '@shared/components/card-movie/card-movie.component';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CategoryFilterService } from '@modules/category/services/category-filter.service';
import { Subscription, of } from 'rxjs';

describe('CategorypageComponent', () => {
  let component: CategorypageComponent;
  let fixture: ComponentFixture<CategorypageComponent>;
  let HttpTestingController: HttpTestingController
  let service: CategoryFilterService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CategorypageComponent, SectionMoviesComponent, CardMovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorypageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(CategoryFilterService)
    component.ngOnInit();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.GetMoviesCategory(1)
  });

  it('should create', () => {
    component.GetSeriesCategory(1)
  });

  it('valor de categoria', () => {
    const category = 'Action';
    service.callcategory = of(category);
    component.ngOnInit();
    expect(component.categorys).toBe(category);
  });
});
