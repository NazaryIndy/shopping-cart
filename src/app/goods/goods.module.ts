import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoodsComponent } from './goods.component';
import { GoodsRoutingModule } from './goods-routing.module';

@NgModule({
  declarations: [
    GoodsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoodsRoutingModule
  ]
})
export class GoodsModule { }
