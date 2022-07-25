import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Product } from 'src/models/product.class';
import { Shop } from 'src/models/shop.class';
import { FirebaseService } from '../services/firebase.service';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  @ViewChild('scrollcontainer') scrollcontainer!: ElementRef;

  // for prototype only, TODO: make dynamic for multiple shops
  private currentShopUID: string = 'backverrueckt';
  private currentShopname: string = 'backverrueckt';

  // data from firebase
  public currentShop!: Shop;
  public currentCategory: string = 'Sortiment';
  public currentCategoryProducts: Product[] = [];
  public allShopProducts!: Product[];

  constructor(public helpers: HelpersService, public fs: FirebaseService) {}

  async ngOnInit() {
    // ToDO: read params from url to get currentShop RequestParam
    this.getCurrentShopInfo();
    await this.getAllShopProducts();
    this.setCategoryProducts('Sortiment');
  }

  getCurrentShopInfo(): void {
    this.fs.getCurrentShopInfo(this.currentShopname).subscribe((shop: any) => {
      this.currentShop = new Shop(shop);
    });
  }

  async getAllShopProducts(): Promise<void> {
    this.allShopProducts = (await firstValueFrom(
      this.fs.loadAllShopProductsFromDB(this.currentShopUID)
    )) as Product[];
  }

  setCategoryProducts(categoryName: string) {
    this.currentCategory = categoryName;
    if (categoryName === 'Sortiment') {
      this.currentCategoryProducts = this.allShopProducts;
    } else {
      this.currentCategoryProducts = this.filterProductsByCategory();  
    }
  }

  filterProductsByCategory() {
    return this.allShopProducts.filter((product: Product) =>
      product.categories?.includes(this.currentCategory)
    );
  }

  scroll(direction: string) {
    switch (direction) {
      case 'right':
        this.scrollcontainer.nativeElement.scrollLeft += 80;
        break;
      case 'left':
        this.scrollcontainer.nativeElement.scrollLeft -= 80;
        break;
    }
  }
}
