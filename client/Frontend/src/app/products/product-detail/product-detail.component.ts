import { Component, Input, OnInit } from '@angular/core';
import { CartItem } from 'src/app/core/models/cart';
import { Product } from 'src/app/core/models/product';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product

  constructor(private cartService: CartService) { }

  ngOnInit(): void { }

  addProductToCart() {
    const cartItem: CartItem = {
      productId: this.product.id,
      quantity: 1
    }
    this.cartService.setCartItem(cartItem)
  }

}
