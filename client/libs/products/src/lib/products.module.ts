import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ButtonModule } from 'primeng/button';
import {RatingModule} from 'primeng/rating';
import {CheckboxModule} from 'primeng/checkbox';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './pages/product-details/product-details/product-details.component';

export const productsRoutes: Route[] = [ 
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent
  }

];

@NgModule({
  imports: [CommonModule, 
    RouterModule.forChild(productsRoutes),
    ButtonModule,HttpClientModule,
    CheckboxModule,
    FormsModule,
    RatingModule
  ],
  exports:[ProductItemComponent,ProductListComponent],
  declarations: [
    ProductItemComponent,
    ProductListComponent,
    ProductDetailsComponent
  ],
})
export class ProductsModule {}
