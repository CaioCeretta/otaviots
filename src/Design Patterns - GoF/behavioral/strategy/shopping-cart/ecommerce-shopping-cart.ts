import { DiscountStrategy } from './discount-strategy';
import { IECommerceProductProtocol } from './ecommerce-product-protocol';

export class ECommerceShoppingCart {
  private products: IECommerceProductProtocol[] = [];
  private _discountStrategy: DiscountStrategy = new DiscountStrategy();

  addProduct(...products: IECommerceProductProtocol[]): void {
    products.forEach((product) => this.products.push(product));
  }

  getProduct(): IECommerceProductProtocol[] {
    return this.products;
  }

  getTotal(): number {
    return this.products.reduce((acc, prod) => acc + prod.price, 0);
  }

  getTotalWithDiscount(): number {
    return this._discountStrategy.getDiscount(this);
  }

  set discount(discount: DiscountStrategy) {
    this._discountStrategy = discount;
  }
}
