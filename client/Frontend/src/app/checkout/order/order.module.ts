import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from 'src/app/core/services/cart.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class OrderModule {
  constructor(cartService: CartService) {
    cartService.initCartLocalStorage()
  }
}
