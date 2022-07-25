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

  openCart(){
    this.helpers.cartOpen = true;
  }

  openProductDialog(): void {
    this.dialog.open(ProductDialogComponent, {
      width: '450px',
    });
  }

}
