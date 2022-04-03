import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ButtonModule } from 'primeng/button';
import { ProductListComponent } from './pages/product-list/product-list.component';
export const productsRoutes: Route[] = [ 
  {
    path: 'products',
    component: ProductListComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(productsRoutes),ButtonModule],
  exports:[ProductItemComponent,ProductListComponent],
  declarations: [
    ProductItemComponent,
    ProductListComponent
  ],
})
export class ProductsModule {}
