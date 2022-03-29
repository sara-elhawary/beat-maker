import { Injectable } from "@angular/core";
import { Cart, CartItem } from "../models/cart";


export const cart_key = "cart"

@Injectable({
    providedIn: "root"
})

export class CartService {
    constructor() { }

    initCartLocalStorage() {
        //check if cart exists
        const cart: Cart = this.getCart()
        //if it doesn't, init
        if (!cart) {
            const initialCart = {
                items: []
            }
            localStorage.setItem(cart_key, JSON.stringify(initialCart))

        }

    }

    getCart(): Cart {
        const cartObj: any = localStorage.getItem(cart_key)
        const cart: Cart = JSON.parse(cartObj)
        return cart
    }

    setCartItem(cartItem: CartItem): Cart {
        const cart: Cart = this.getCart()
        const itemExist = cart.items?.find(item => item.productId === cartItem.productId)

        if (itemExist) {
            cart.items?.map(item => {
                if (item.productId === cartItem.productId) {
                    item.quantity = item.quantity + cartItem.quantity
                }
                return item
            })
        } else {
            cart.items?.push(cartItem)
        }

        localStorage.setItem(cart_key, JSON.stringify(cart))
        return cart
    }
}