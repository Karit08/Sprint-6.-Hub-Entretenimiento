import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddfavoritesService {
  private apiUrl = 'http://localhost:3000/favorites';
  private apiUrl2 = 'http://localhost:5135/api/Favorites';
  constructor(private http: HttpClient) { }

  addfavorites(media: any){
    return this.http.post(`${this.apiUrl2}/Add`,media);
  }

  deletefavorites(media: any){
    return this.http.post(`${this.apiUrl2}/Delete`,media); 
  }
}
