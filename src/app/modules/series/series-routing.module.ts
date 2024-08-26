import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeriespageComponent } from './pages/seriespage/seriespage.component';

const routes: Routes = [
  {
    path: '',
    component: SeriespageComponent,
    outlet: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeriesRoutingModule { }
