import { Product } from './product.class';

export interface cartProduct{
    product: Product;
    amount: number;
    comment?: string;
}

export class Cart {
  deliveryCosts: number;
  minOrder: number;
  achievedMinOrder: boolean;
  cartItems: cartProduct[];
  subTotalPrice: number;
  totalPrice: number;
  voucher: string;

  constructor(obj?: any) {
    this.minOrder = obj ? obj.minOrder : 10;
    this.achievedMinOrder = obj ? obj.achievedMinOrder : false;
    this.cartItems = obj ? obj.items : [];
    this.deliveryCosts = obj ? obj.deliveryCosts : 5;
    this.subTotalPrice = obj ?  obj.subTotalPrice : 0;
    this.totalPrice = obj ? obj.totalSum : 0;
    this.voucher = obj ? obj.voucher : 'brot2022';
  }

  toJson() {
    return {
      minOrder: this.minOrder,
      achievedMinOrder: this.achievedMinOrder,
      items: this.cartItems,
      deliveryCosts: this.deliveryCosts,
      subTotalPrice: this.subTotalPrice,
      totalSum: this.totalPrice,
      voucher: this.voucher,
    };
  }
}
