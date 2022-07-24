import { Component, HostListener, OnInit } from '@angular/core';
import { Product } from 'src/models/product.class';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public commentOpen: boolean = false;

  constructor(private helpers: HelpersService) { }

  ngOnInit(): void {
  }

  closeCart(){
    this.helpers.cartOpen = false;
  }

  saveComment(){
    // Add Parameter "cartProduct: Product"
    // add comment to order referring to the product
  }

  toggleCommentBox(){
    this.commentOpen = !this.commentOpen;
  }


}
