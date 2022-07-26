import { Component, HostListener, OnInit } from '@angular/core';
import { Cart } from 'src/models/cart.class';
import { Product } from 'src/models/product.class';
import { CartService } from '../services/cart.service';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  public commentOpen: boolean = false;
  public cart!: Cart;
  public cartItemComment: string = ''; //ngModel

  constructor(
    private helpers: HelpersService,
    public cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  }

  handleIncreaseProductQuantity(cartItemIndex: number) {
    this.cartService.editQuantityOfCartProduct(cartItemIndex);
  }

  handleDecreaseProductQuantity(cartItemIndex: number) {
    this.cartService.editQuantityOfCartProduct(cartItemIndex, 'decrease');
  }

  toggleCommentBox(i: number) {
    if (this.productHasComment(i)) {
      this.cartItemComment = this.cartService.cart.cartItems[i].comment;
    }
    this.commentOpen = !this.commentOpen;
  }

  handleProductComment(cartItemIndex: number) {
    this.cartService.addCommentToCartItem(cartItemIndex, this.cartItemComment);
    this.cartItemComment = '';
    this.commentOpen = !this.commentOpen;
  }

  productHasComment(i: number) {
    return this.cartService.cart.cartItems[i].comment;
  }

  handleBuying() {
    alert('Vielen Dank für ihre Bestellung.');
  }

  closeCart() {
    this.helpers.cartOpen = false;
  }
}
