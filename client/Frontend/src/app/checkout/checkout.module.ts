import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { CartModule } from './cart/cart.module';
import { CartComponent } from './cart/cart.component';


const routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  // { path: 'address', component: AddressComponent },
  // { path: 'payment', component: PaymentComponent },
  // { path: 'order-success', component: OrderSuccessComponent },
  // { path: 'order-failed', component: OrderFailedComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CartModule,

  ]
})
export class CheckoutModule { }
