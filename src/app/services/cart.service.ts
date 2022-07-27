import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartProduct } from 'src/models/cart.class';
import { Product } from 'src/models/product.class';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  public cart!: Cart;

  constructor() {
    this.cart = new Cart();
  }

  getIndexOfProductInCart(product: Product){
    return this.cart.cartItems.findIndex(
      (item: CartProduct) => item.product.uid === product.uid
    );
  }

  addNewProductToCart(product: Product) {
    let newCartProduct: CartProduct = {
      product: product,
      quantity: 1,
      comment: '',
    };
    this.cart.cartItems.push(newCartProduct);
    this.cart.calculateTotalPrice();
  }

  deleteProductFromCart(cartProductIndex: number) {
    this.cart.cartItems.splice(cartProductIndex, 1);
    this.cart.calculateTotalPrice();
  }

  editQuantityOfCartProduct(cartProductIndex: any, action: string = 'increase') {
    let currentCartItem = this.cart.cartItems[cartProductIndex];
    if (action === 'decrease') {
      this.checkForDeleteProduct(currentCartItem, cartProductIndex);
    }
    action == 'increase' ? currentCartItem.quantity++ : currentCartItem.quantity--; 
    this.cart.calculateTotalPrice();
  }

  checkForDeleteProduct(currentCartItem: any, cartProductIndex: number) {
    if (currentCartItem.quantity === 1) {
      this.deleteProductFromCart(cartProductIndex);
    }
  }

  addCommentToCartItem(cartItemIndex: number, commentText: string) {
   this.cart.cartItems[cartItemIndex].comment = commentText;
  }
}

