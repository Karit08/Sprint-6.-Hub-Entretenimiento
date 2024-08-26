import { Component } from '@angular/core';
import { MediaService } from '@shared/services/media.service';

@Component({
  selector: 'app-only-movies',
  templateUrl: './only-movies.component.html',
  styleUrl: './only-movies.component.css'
})
export class OnlyMoviesComponent {
  movies: any[] = []

  constructor(private mediaservice: MediaService){}

  ngOnInit(): void {
    this.mediaservice.getMoviesService().subscribe(response =>{ 
      this.movies = response
    },error => {
      console.log('No se obtuvieron las series', error)
    });
  }
}
