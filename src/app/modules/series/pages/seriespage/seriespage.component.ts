import { Component } from '@angular/core';
import { MediaService } from '@shared/services/media.service';

@Component({
  selector: 'app-seriespage',
  templateUrl: './seriespage.component.html',
  styleUrl: './seriespage.component.css'
})
export class SeriespageComponent {
  series: any[] = []

  constructor(private mediaservice: MediaService){}

  ngOnInit(): void {
    this.mediaservice.getSeriesService().subscribe(response =>{  // servicioo para las series 
      this.series = response
    },error => {
      console.log('No se obtuvieron las series', error)
    });
  }
}

