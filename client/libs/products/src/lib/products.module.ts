import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ButtonModule } from 'primeng/button';
export const productsRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule,ButtonModule],
  exports:[ProductItemComponent],
  declarations: [
    ProductItemComponent
  ],
})
export class ProductsModule {}
