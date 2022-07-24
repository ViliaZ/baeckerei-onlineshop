import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Shop } from 'src/models/shop.class';
import { FirebaseService } from '../services/firebase.service';
import { HelpersService } from '../services/helpers.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss'],
})
export class ShopComponent implements OnInit {
  // for prototype only, TODO: make dynamic for multiple shops
  currentShopUID: string = 'backverrueckt';
  currentShopname: string = 'backverrueckt';

  // data from firebase
  public currentShop!: Shop;
  @ViewChild('scrollcontainer') scrollcontainer!: ElementRef;
  constructor(public helpers: HelpersService, public fs: FirebaseService) {}

  ngOnInit(): void {
    // ToDO: read params from url to get currentShop RequestParam
    this.getCurrentShopInfo();
    this.loadCurrentShopProducts();
  }

  loadCurrentShopProducts() {
    this.fs.getAllShopProducts(this.currentShopUID);
  }

  getCurrentShopInfo() {
    this.fs.getCurrentShopInfo(this.currentShopname).subscribe((shop: any) => {
      this.currentShop = new Shop(shop);
    });
  }

  scroll(direction: string) {
    switch (direction) {
      case 'right':
        this.scrollcontainer.nativeElement.scrollLeft += 50;
        break;
      case 'left':
        this.scrollcontainer.nativeElement.scrollLeft -= 50;
        break;
    }
  }
}
