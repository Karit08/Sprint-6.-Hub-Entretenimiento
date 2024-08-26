import { Component, Input, Renderer2 } from '@angular/core';
import { AddfavoritesService } from './services/addfavorites.service';
import { jwtDecode } from 'jwt-decode';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrl: './card-movie.component.css'
})
export class CardMovieComponent {
  @Input() movie: any = <any>{};

  menu: boolean = false;

  constructor(private renderer: Renderer2, private addfav: AddfavoritesService, private router: Router){}

  onclickmenu() {
    this.menu = !this.menu;
    if (this.menu) {
      this.renderer.addClass(document.body, 'no-scroll');  // Funcion para desplegar la tarjeta de la pelicula y desabilitar un scroll 
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  addTofavorites(){
    const token = sessionStorage.getItem('authtoken')
    if(token){
      
      const decodedToken = jwtDecode(token) as { sub: string; };
      const idUser = decodedToken.sub
      const media = {ID_User: idUser, ID_Movie: this.movie.ID_Movie !== undefined? this.movie.ID_Movie: null, ID_Series: this.movie.ID_Series !== undefined? this.movie.ID_Series: null}
      console.log(media)
      this.addfav.addfavorites(media).subscribe({
        next: response => {
          alert('Se agrego a tus favoritos');
        },
        error: (error) => {
          alert('Ya se encuentra en favoritos');
        }
      })
    }else{
      console.log('Token vacio');
    }
  }

  deletefavorites(){

    function isEmptyObject(obj: any): boolean {
      return obj && Object.keys(obj).length === 0 && obj.constructor === Object; // si existe un objeto vacio dejar 0 para completar la peticion
    }

    const token = sessionStorage.getItem('authtoken'); 
    if(token){
      const decodedToken = jwtDecode(token) as { sub: string; };
      const idUser = decodedToken.sub
      const media = {
        ID_User: idUser,
        ID_Movie: isEmptyObject(this.movie.ID_Movie )? 0 : this.movie.ID_Movie, // solo para delete
        ID_Series: isEmptyObject(this.movie.ID_Series) ? 0 : this.movie.ID_Series
      };
      this.addfav.deletefavorites(media).subscribe({ 
        next: response => {
          console.log('Peliculas o series eliminadas de favoritos', response);
          alert('Se elimino de favoritos');
          window.location.reload();
        }
      });
    }else{
      console.log('Token vacio');
    }
  }
}
