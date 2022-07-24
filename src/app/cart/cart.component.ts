import { Component, HostListener, OnInit } from '@angular/core';
import { HelpersService } from '../helpers.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private helpers: HelpersService) { }

  ngOnInit(): void {
  }

  closeCart(){
    this.helpers.cartOpen = false;
  }


}
