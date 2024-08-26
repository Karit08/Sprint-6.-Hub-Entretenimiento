import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { sessionGuard } from '@cores/guards/session.guard';
import { OnlyMoviesComponent } from '@modules/only-movies/pages/only-movies/only-movies.component';

const routes: Routes = [
  {
    path: 'favorites',
    loadChildren:() => import(`@modules/favorites/favorites.module`).then(m => m.FavoritesModule),
    canActivate:[sessionGuard]
  },
  {
    path: 'category',
    loadChildren:() => import(`@modules/category/category.module`).then(m => m.CategoryModule),
    canActivate:[sessionGuard]
  },
  {
    path: 'movies',
    loadChildren:() => import(`@modules/movies/movies.module`).then(m => m.MoviesModule),
    canActivate:[sessionGuard]
  }
  ,
  {
    path: 'history',
    loadChildren:() => import(`@modules/history/history.module`).then(m => m.HistoryModule),
    canActivate:[sessionGuard]
  }
  ,
  {
    path: 'series',
    loadChildren:() => import(`@modules/series/series.module`).then(m => m.SeriesModule),
    canActivate:[sessionGuard]
  },
  {
    path: 'onlyMovies',
    loadChildren:() => import(`@modules/only-movies/only-movies.module`).then(m => m.OnlyMoviesModule),
    canActivate:[sessionGuard]
  },
  
  {
    path: '',
    loadChildren:() => import(`@modules/home/home.module`).then(m => m.HomeModule),
    canActivate:[sessionGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
