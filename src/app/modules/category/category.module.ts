import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { CategorypageComponent } from './pages/categorypage/categorypage.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    CategorypageComponent,
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    SharedModule
  ]
})
export class CategoryModule { }
