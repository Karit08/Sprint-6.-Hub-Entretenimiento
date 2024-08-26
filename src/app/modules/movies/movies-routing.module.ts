import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviespageComponent } from './pages/moviespage/moviespage.component';

const routes: Routes = [
  {
    path: '',
    component: MoviespageComponent,
    outlet: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
