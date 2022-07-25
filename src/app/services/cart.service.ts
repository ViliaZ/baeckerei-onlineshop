import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartProduct } from 'src/models/cart.class';
import { Product } from 'src/models/product.class';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // public cart$: BehaviorSubject<Cart> = new BehaviorSubject(new Cart());;

  public cart!: Cart;

  constructor() {
    this.cart = new Cart();
  }
   

  addProductToCart(product: Product) {
    let cartProduct: any = {
      'product': product,
      'quantity': 1,
      'comment': ''
    }
    // Add product to cart
    this.cart.cartItems.push(cartProduct);
    console.log('new Cart und product',this.cart)
  }


}
