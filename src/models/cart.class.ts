import { createInflate } from 'zlib';
import { Product } from './product.class';

export interface CartProduct {
  product: Product;
  quantity: number;
  comment?: string;
}

export interface CartInterface{
  deliveryCosts: number;
  minOrder: number;
  minForDeliveryFree: number;
  cartItems: CartProduct[];
  subTotalPrice: number;
  totalPrice: number;
  voucher: string;
}

export class Cart {
  deliveryCosts: number;
  minOrder: number;
  minForDeliveryFree: number = 10;
  cartItems: CartProduct[];
  subTotalPrice: number;
  totalPrice: number;
  voucher: string;

  constructor(obj?: CartInterface) {
    this.minOrder = obj ? obj.minOrder : 6;
    this.minForDeliveryFree = obj ? obj.minForDeliveryFree : 10;
    this.cartItems = obj ? obj.cartItems : [];
    this.deliveryCosts = obj ? obj.deliveryCosts : 5;
    this.subTotalPrice = obj ? obj.subTotalPrice : 0;
    this.totalPrice = obj ? obj.totalPrice : 0;
    this.voucher = obj ? obj.voucher : 'brot2022';
  }

  calculateSubTotalPrice() {
    this.subTotalPrice = 0;
    this.cartItems.forEach((item) => {
      //if(!!item.product.price)
        this.subTotalPrice += item.product.price * item.quantity;
    });
    return this.subTotalPrice;
  }

  calculateTotalPrice() {
    this.calculateSubTotalPrice();
    let finalDeliveryCosts: number = this.calcDeliveryCosts();   
    this.totalPrice = this.subTotalPrice + finalDeliveryCosts;
  }

  calcDeliveryCosts(){
    return (this.subTotalPrice >= this.minForDeliveryFree) ? 0 : this.deliveryCosts;
  }

  toJson() {
    return {
      minOrder: this.minOrder,
      minForDeliveryFree: this.minForDeliveryFree,
      items: this.cartItems,
      deliveryCosts: this.deliveryCosts,
      subTotalPrice: this.subTotalPrice,
      totalSum: this.totalPrice,
      voucher: this.voucher,
    };
  }
}
