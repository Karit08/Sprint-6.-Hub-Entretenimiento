import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from '@modules/auth/services/user.service'; 
import { CookieService } from 'ngx-cookie-service'; 
import { AuthpageComponent } from '../pages/authpage/authpage.component';


describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule], 
      providers: [UserService, CookieService] 
    });
    service = TestBed.inject(UserService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('pruebas de login', () => {
    const data = {mail: 'br@gmail', password: '123'}
    const spy = spyOn(service, 'loginservice').and.callThrough()
    service.loginservice(data)
    expect(spy).toHaveBeenCalledWith(data)
    
  });

  it('pruebas de registro', () => {
    const data = {unserName:'cat', mail: 'br@gmail', password: '123', preferences: 'Accion'}
    const spy = spyOn(service, 'registerService').and.callThrough()
    service.registerService(data)
    expect(spy).toHaveBeenCalledWith(data)
  });

});
