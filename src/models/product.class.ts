export class Product {
  uid: string;
  shopUID: string; // to which the product belongs >> shopUID
  name: string;
  description?: string;
  photoURL?: string;
  categories?: string[];
  ingredients?: string[];
  isVegan?: boolean;
  isGlutenfree?: boolean;
  isNutfree?: boolean;
  isBundle: boolean;
  bundleProductUIDs: string[];
  price?: number; // Euros
  amount?: string; // connnected to price, e.g. "500g"

  constructor(obj?: any) {
    this.uid = obj ? obj.uid : '',
      this.shopUID = obj ? obj.shopUID : '',
      this.name = obj ? obj.name : '',
      this.description = obj ? obj.description : '',
      this.photoURL = obj ? obj.photoURL : '',
      this.categories = obj ? obj.categories : '',
      this.ingredients = obj ? obj.ingredients : [],
      this.isVegan = obj ? obj.isVegan : false,
      this.isGlutenfree = obj ? obj.isGlutenfree : false,
      this.isNutfree = obj ? obj.isNutfree : false,
      this.isBundle = obj ? obj.isBundle : false;
      this.bundleProductUIDs = obj ? obj.bundleProductUIDs : [],
      this.price = obj ? obj.price : 0,
      this.amount = obj ? obj.amount : '';
  }

  toJson() {
    return {
      uid: this.uid,
      shopUID: this.shopUID,
      name: this.name,
      description: this.description,
      photoURL: this.photoURL,
      categories: this.categories,
      ingredients: this.ingredients,
      isVegan: this.isVegan,
      isGlutenfree: this.isGlutenfree,
      isNutfree: this.isNutfree,
      isBundle: this.isBundle,
      bundleProductUIDs: this.bundleProductUIDs,
      price: this.price,
      amount: this.amount,
    };
  }
}
