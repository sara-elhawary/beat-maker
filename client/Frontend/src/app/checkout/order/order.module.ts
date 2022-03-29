import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';
import { CartIconComponent } from './components/cart-icon/cart-icon.component';



@NgModule({
  declarations: [
    CartIconComponent
  ],
  imports: [
    CommonModule
  ]
})
export class OrderModule {
  constructor(cartService: CartService) {
    cartService.initCartLocalStorage()
  }
}
