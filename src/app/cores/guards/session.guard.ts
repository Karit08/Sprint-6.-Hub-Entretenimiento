import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import {  CookieService } from 'ngx-cookie-service';

export const sessionGuard: CanActivateFn = (route, state) => {
  const cookie = inject(CookieService);
  const router = inject(Router);
  try {

    const token: boolean = cookie.check('token');  
    if(token){
      return true
    }else{
      router.navigate(['/','auth']);
      return false
    }

  } catch (error) {
    console.log('Algo paso ',error);
    return false
  }
};

