import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnlyMoviesComponent } from './pages/only-movies/only-movies.component';

const routes: Routes = [
  {
    path: '',
    component: OnlyMoviesComponent,
    outlet: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnlyMoviesRoutingModule { }
