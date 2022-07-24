export class Shop {
  shopUid: string;
  shopname: string;
  description?: string;
  admins?: string[]; // ONLY admins can edit shops and products - refers to User UIDs of collection "users"
  productCategories?: string[];
  products?: any[];

  constructor(obj?: any) {
    this.shopUid = obj ? obj.uid : '';
    this.shopname = obj ? obj.shopname : '';
    this.description = obj ? obj.description : '';
    this.admins = obj ? obj.admins : [];
    this.productCategories = obj ? obj.productCategories : [];
    this.products = obj ? obj.products : [];
  }

  toJson() {
    return {
      shopUid: this.shopUid,
      shopname: this.shopname,
      description: this.description,
      admins: this.admins,
      productCategories: this.productCategories,
      products: this.products,
    };
  }
}
