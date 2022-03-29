import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class CartService {
    constructor() { }

    initCartLocalStorage() {
        const initialCart = {
            items: []
        }

        localStorage.setItem("cart", JSON.stringify(initialCart))
    }
}