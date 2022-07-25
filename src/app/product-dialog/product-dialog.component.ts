import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product } from 'src/models/product.class';
import { firstValueFrom } from 'rxjs';
import { FirebaseService } from '../services/firebase.service';
import { Shop } from 'src/models/shop.class';

@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss'],
})
export class ProductDialogComponent implements OnInit {
  public newProduct!: Product;
  public existingProducts!: Product[];
  public noBundleProducts!: Product[]; // all Products which are no bundle ("Einzelprodukte")
  private currentShopInfos!: Shop;
  public shopCategories!: string[];

  constructor(
    public dialogRef: MatDialogRef<ProductDialogComponent>,
    private _snackBar: MatSnackBar,
    private fs: FirebaseService
  ) {}

  async ngOnInit() {
    this.newProduct = new Product();
    await this.getExistingProducts();
    await this.getShopCategories();
  }

  async getExistingProducts(): Promise<any> {
    this.existingProducts = await firstValueFrom(this.fs.products$);
    this.noBundleProducts = this.existingProducts.filter(
      (product: Product) => product.isBundle === false
    );
  }

  async getShopCategories(): Promise<any> {
    this.currentShopInfos = await firstValueFrom(this.fs.currentShopInfos$) as Shop;
    this.shopCategories = this.currentShopInfos.productCategories as string[];
  }

  saveNewProduct() {
    this.newProduct.shopUID = this.currentShopInfos.shopUid;
    this.fs.addProductToShop(this.newProduct, this.currentShopInfos.shopUid);
    this.openSnackbar('Produkt erfolgreich hinzugefügt.', 'OK');
    console.log('neuseProduct', this.newProduct);
  }

  openSnackbar(message: string, actionMessage: string) {
    this._snackBar.open(message, actionMessage);
  }
}
