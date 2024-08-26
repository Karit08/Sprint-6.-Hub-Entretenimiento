import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviespageComponent } from './pages/moviespage/moviespage.component';
import { share } from 'rxjs';
import { SharedModule } from '@shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MoviespageComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    SharedModule,
    RouterModule

  ]
})
export class MoviesModule { }
