import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlyMoviesRoutingModule } from './only-movies-routing.module';
import { OnlyMoviesComponent } from './pages/only-movies/only-movies.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    OnlyMoviesComponent
  ],
  imports: [
    CommonModule,
    OnlyMoviesRoutingModule,
    SharedModule
  ]
})
export class OnlyMoviesModule { }
