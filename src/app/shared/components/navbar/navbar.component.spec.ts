import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { RouterTestingModule } from '@angular/router/testing'
import { BoundElementProperty } from '@angular/compiler';
import { Router } from '@angular/router';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let router: Router;
  let HttpTestingController: HttpTestingController

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[RouterTestingModule, HttpClientTestingModule],
      declarations: [NavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('verificacion de la funcion de cambio de boolean para el desplegue del menu como verdadero',()=>{
    const category: string = 'terror'
    const menu: boolean = true
  
    component.onclickmenu(); //cambio del valor booleano 
    expect(component.menu).toEqual(menu) // verificamos el cambio

  });
  it('verificacion cambios de ruta verdaderos',()=>{
    const category: string = ''
    spyOn(component.router,'navigate')
    component.filtercategory(category); // verificar la navegacion y iniciar el set
    expect(component.router.navigate).toHaveBeenCalledWith(['/category']) //esperamos el cambios de ruta verdadero
  });

  it('Logout verification', () => {
    component.logout();
  });
});
