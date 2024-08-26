import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SeriesRoutingModule } from './series-routing.module';
import { SeriespageComponent } from './pages/seriespage/seriespage.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    SeriespageComponent
  ],
  imports: [
    CommonModule,
    SeriesRoutingModule,
    SharedModule
  ]
})
export class SeriesModule { }
