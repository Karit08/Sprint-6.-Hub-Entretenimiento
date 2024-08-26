import { TestBed } from '@angular/core/testing';

import { MediaService } from './media.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MediaService', () => {
  let service: MediaService;
  let HttpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MediaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Obtener Movies', () => {
    service.getMoviesService()
  });

  it('Obtener series', () => {
    service.getSeriesService()
  });
});
