import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product.class';
import { CartService } from '../services/cart.service';
import { FirebaseService } from '../services/firebase.service';
import { HelpersService } from '../services/helpers.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;

  constructor(
    public fs: FirebaseService,
    public cartService: CartService,
    public helpers: HelpersService
  ) {}

  ngOnInit(): void {}

  onProductAdding() {
    if (this.productsInCart()) {
      console.log('product already in cart');
      this.cartService.increaseQuantity(this.product);
    } else {
      this.cartService.addProductToCart(this.product);
    }
    this.cartService.cart.calculateSubTotalPrice();
    this.toggleCart();
  }

  productsInCart() {
    return this.cartService.cart.cartItems.some(
      (item) => item.product.uid === this.product.uid
    );
  }

  toggleCart() {
    this.helpers.cartOpen = true;
    setTimeout(() => {
      this.helpers.cartOpen = false;
    }, 1500);
  }
}
