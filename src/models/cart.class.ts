import { Product } from './product.class';

export interface CartProduct {
  product: Product;
  quantity: number;
  comment?: string;
}

export class Cart {
  deliveryCosts: number;
  minOrder: number;
  cartItems: CartProduct[] | any[];
  subTotalPrice: number;
  totalPrice: number;
  voucher: string;

  constructor(obj?: any) {
    this.minOrder = obj ? obj.minOrder : 10;
    this.cartItems = obj ? obj.cartItems : [];
    this.deliveryCosts = obj ? obj.deliveryCosts : 5;
    this.subTotalPrice = obj ? obj.subTotalPrice : 0;
    this.totalPrice = obj ? obj.totalPrice : 0;
    this.voucher = obj ? obj.voucher : 'brot2022';
  }

  calculateSubTotalPrice() {
    this.subTotalPrice = 0;
    this.cartItems.forEach((item) => {
      console.log('item', item);
      
      this.subTotalPrice += item.product.price * item.quantity;
    });
    console.log('subtotalPrice', this.subTotalPrice);
  }

  calculateTotalPrice() {
    this.calculateSubTotalPrice();
    this.totalPrice = this.subTotalPrice + this.deliveryCosts;
    console.log('totalPrice', this.totalPrice);
  }

  toJson() {
    return {
      minOrder: this.minOrder,
      items: this.cartItems,
      deliveryCosts: this.deliveryCosts,
      subTotalPrice: this.subTotalPrice,
      totalSum: this.totalPrice,
      voucher: this.voucher,
    };
  }
}
