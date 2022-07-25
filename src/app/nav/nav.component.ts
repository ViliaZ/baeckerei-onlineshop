import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { ProductComponent } from '../product/product.component';
import { CartService } from '../services/cart.service';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(
    private helpers: HelpersService, 
    public dialog: MatDialog, 
    public cartService: CartService) { }

  ngOnInit(): void {
  }

  toggleCart(){
    console.log('openCart in Nav');
    this.helpers.cartOpen = !this.helpers.cartOpen;
  }

  openProductDialog(): void {
    this.dialog.open(ProductDialogComponent);
  }

}
