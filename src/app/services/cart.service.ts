import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartProduct } from 'src/models/cart.class';
import { Product } from 'src/models/product.class';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // public cart$: BehaviorSubject<Cart> = new BehaviorSubject(new Cart());;

  public cart!: Cart;

  constructor() {
    this.cart = new Cart();
  }

  getIndexOfProductInCart(product: Product){
    return this.cart.cartItems.findIndex(
      (item: any) => item.product.uid === product.uid
    );
  }

  addNewProductToCart(product: Product) {
    let newCartProduct: any = {
      product: product,
      quantity: 1,
      comment: '',
    };
    // Add product to cart
    this.cart.cartItems.push(newCartProduct);
    console.log('new Cart und product', this.cart);
  }

  deleteProductFromCart(cartProductIndex: number) {
    this.cart.cartItems.splice(cartProductIndex, 1);
  }

  editQuantityOfCartProduct(cartProductIndex: any, action: string = 'increase') {
    let currentCartItem = this.cart.cartItems[cartProductIndex];
    if (action === 'decrease') {
      this.checkForDeleteProduct(currentCartItem, cartProductIndex);
    }
    action == 'increase' ? currentCartItem.quantity++ : currentCartItem.quantity--; 
  }

  checkForDeleteProduct(currentCartItem: any, cartProductIndex: number) {
    if (currentCartItem.quantity === 1) {
      this.deleteProductFromCart(cartProductIndex);
    }
  }
}

