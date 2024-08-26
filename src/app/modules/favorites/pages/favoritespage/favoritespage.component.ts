import { Component } from '@angular/core';
import { UserService } from '@modules/auth/services/user.service';
import { FavoritesService } from '@modules/favorites/services/favorites.service';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-favoritespage',
  templateUrl: './favoritespage.component.html',
  styleUrl: './favoritespage.component.css'
})
export class FavoritespageComponent {
  favoritas: any[] = []

  constructor(private user: UserService, private favorites: FavoritesService){

  }

  ngOnInit(): void{
    this.getfavorites()
  }

  getfavorites(){
  const token = sessionStorage.getItem('authtoken')  
    if(token){

      const decodedToken = jwtDecode(token) as { sub: string; };
      const ID_User = decodedToken.sub

      this.favorites.Favorites(ID_User).subscribe(response =>{
        this.favoritas = response
      })
    }else{
      console.log('Token vacio');
    }
  }
}
