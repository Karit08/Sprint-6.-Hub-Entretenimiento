import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMovieComponent } from './card-movie.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AddfavoritesService } from './services/addfavorites.service';
import { of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

describe('CardMovieComponent', () => {
  let component: CardMovieComponent;
  let fixture: ComponentFixture<CardMovieComponent>;
  let HttpTesting: HttpTestingController;
  let service: AddfavoritesService;

  beforeEach(async () => {
    const service = {
      addfavorites: jasmine.createSpy('addfavorites').and.returnValue(of({succes: true}))
    }
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CardMovieComponent],
      providers: [{
        provide: AddfavoritesService, useValue: service
      }]
    })
    .compileComponents();
 
  });

  beforeEach(async()=>{
    fixture = TestBed.createComponent(CardMovieComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(AddfavoritesService);
    
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificacion verdadera del cambio boolean para el despliegue de la tarjeta de pelicula',()=>{
    const menu: boolean = true
    component.onclickmenu()
    expect(component.menu).toEqual(menu)
  });

  it('Verificacion de la funcion para anadir a favoritos',()=>{
    component.addTofavorites();

  });

  it('Verificacion de la funcion de delete en favoritos', ()=>{
    component.deletefavorites()
  })
});
