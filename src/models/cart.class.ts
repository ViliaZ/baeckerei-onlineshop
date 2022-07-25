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
      this.subTotalPrice += item.product.price * item.quantity;
    });
    return this.subTotalPrice;
  }

  calculateTotalPrice() {
    this.calculateSubTotalPrice();
    let finalDeliveryCosts: number = this.calcDeliveryCosts();
    console.log('finalDeliveryCosts', finalDeliveryCosts);
    
    this.totalPrice = this.subTotalPrice + finalDeliveryCosts;
  }

  calcDeliveryCosts(){
    return (this.subTotalPrice >= this.minOrder) ? 0 : this.deliveryCosts;
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
