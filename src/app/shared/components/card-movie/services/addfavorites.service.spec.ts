import { TestBed } from '@angular/core/testing';

import { AddfavoritesService } from './addfavorites.service'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('AddfavoritesService', () => {
  let service: AddfavoritesService;
  let HttpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AddfavoritesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('Eliminar favorito', () => {
    service.deletefavorites(1)
  });

  it('aniadir favorito', () => {
    service.addfavorites(1)
  });
});
