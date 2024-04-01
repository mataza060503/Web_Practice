import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { ProductService } from '../services/product.service';



@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListComponent,
    DetailComponent
  ], 
  providers: [
    ProductService
  ]
})
export class Ex88Module { }
