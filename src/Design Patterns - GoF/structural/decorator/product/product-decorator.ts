import { IProductProtocol } from './iproduct';

export class ProductDecorator implements IProductProtocol {
  constructor(protected product: IProductProtocol) {}
  getPrice(): number {
    return this.product.getPrice();
  }
  getName(): string {
    return this.product.getName();
  }
}
