import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './checkout/cart/cart.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: "/checkout",
    pathMatch: 'full'
  },
  {
    path: 'checkout',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
