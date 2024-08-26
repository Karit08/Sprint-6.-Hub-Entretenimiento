import { Component, Input, OnInit, input } from '@angular/core';
import { movieslist } from '@cores/models/movies.model';

@Component({
  selector: 'app-section-movies',
  templateUrl: './section-movies.component.html',
  styleUrl: './section-movies.component.css'
})
export class SectionMoviesComponent implements OnInit {
  @Input() title: string = '';
  @Input() datas: Array <movieslist> = []
  @Input() movies: any;
  
  constructor(){}

  ngOnInit(): void {
  }
}
