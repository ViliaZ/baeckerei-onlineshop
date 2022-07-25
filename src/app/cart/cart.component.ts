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

  constructor(private helpers: HelpersService, public cartService: CartService) {}

  ngOnInit(): void {
this.cart = this.cartService.cart;
console.log(this.cart);

  }

  closeCart() {
    this.helpers.cartOpen = false;
  }

  saveCommentToProduct() {
    // Add Parameter "cartProduct: Product"
    // add comment to order referring to the product
  }

  toggleCommentBox() {
    this.commentOpen = !this.commentOpen;
  }
}
