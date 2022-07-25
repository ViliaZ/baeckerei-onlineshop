import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/models/product.class';
import { CartService } from '../services/cart.service';
import { FirebaseService } from '../services/firebase.service';
import { HelpersService } from '../services/helpers.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product!: Product;

  constructor(
    public fs: FirebaseService, 
    public cartService: CartService,
    private helpers: HelpersService) { }
  
  ngOnInit(): void {
  }

  onProductAdding(){
    this.cartService.addProductToCart(this.product);
    this.helpers.cartOpen = true;
    setTimeout(() => {
      this.helpers.cartOpen = false;
    }, 2000);
  }

}
