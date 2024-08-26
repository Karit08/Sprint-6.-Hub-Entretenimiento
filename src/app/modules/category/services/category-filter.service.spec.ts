import { TestBed } from '@angular/core/testing';

import { CategoryFilterService } from './category-filter.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CategoryFilterService', () => {
  let service: CategoryFilterService;
  let HttpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CategoryFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be created', () => {
    service.getMoviesCategory(1)
  });

  it('should be created', () => {
    service.getSeriesCategory(1)
  });
  it('should be created', () => {
    service.setCategory('data')
  });
});
