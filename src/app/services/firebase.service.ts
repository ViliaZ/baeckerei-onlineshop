import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Shop } from 'src/models/shop.class';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  public products$!: Observable<any[]>;

  constructor(private fs: AngularFirestore) {}

  getCurrentShopInfo(shop: string): Observable<any> {
    return this.fs.collection('shops')
    .doc(shop)
    .valueChanges();
  }

  loadAllShopProductsFromDB(shopUID: string): Observable<any[]> {
    this.products$ = this.fs
      .collection('products', (ref) => ref.where('shopUID', '==', shopUID))
      .valueChanges();
    return this.products$;
  }

  // TODO
  addProductToShop(shopUid: string, data: any) {}
}
