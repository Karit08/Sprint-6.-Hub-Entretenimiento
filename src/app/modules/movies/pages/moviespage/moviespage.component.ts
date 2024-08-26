import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as data from '../../../../data/movies.json'
import { movieslist } from '@cores/models/movies.model';
import { MediaService } from '@shared/services/media.service';


@Component({
  selector: 'app-moviespage',
  templateUrl: './moviespage.component.html',
  styleUrl: './moviespage.component.css'
})
export class MoviespageComponent implements OnInit{
  movies: any[] = []
  series: any[] = []

  constructor(private mediaservice: MediaService){}


  ngOnInit(): void {
    this.mediaservice.getMoviesService().subscribe(response =>{  // servicio para las peliculas
      this.movies = response;
      }, error =>{
        console.log('No se obtuvieron las peliculas', error);
    });

    this.mediaservice.getSeriesService().subscribe(response =>{  // servicioo para las series 
      this.series = response
    },error => {
      console.log('No se obtuvieron las series', error)
    });
  }
}

