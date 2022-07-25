import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/models/product.class';
import { firstValueFrom } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  public newProduct!: Product;
  public existingProducts!: Product[];
  public noBundleProducts!: Product[]; // all Products which are no bundle ("Einzelprodukte")

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    private _snackBar: MatSnackBar,
    private fs: FirebaseService
  ) {}

  async ngOnInit() {
    this.newProduct = new Product();
    await this.getExistingProducts();
  }

  async getExistingProducts(): Promise<any> {
    this.existingProducts = await firstValueFrom(this.fs.products$);
    this.noBundleProducts = this.existingProducts.filter(
      (product: Product) => product.isBundle === false
    );
  }

  saveNewProduct() {
    console.log('neuseProduct', this.newProduct);
    this.openSnackbar('Produkt erfolgreich hinzugefügt.', 'OK');
  }

  openSnackbar(message: string, actionMessage: string) {
    this._snackBar.open(message, actionMessage);
  }
}
