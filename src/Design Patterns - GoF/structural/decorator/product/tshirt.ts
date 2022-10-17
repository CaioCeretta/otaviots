import { IProductProtocol } from './iproduct';

export class TShirt implements IProductProtocol {
  private name = 'T-Shirt';
  private price = 49.99;

  getPrice(): number {
    return this.price;
  }
  getName(): string {
    return this.name;
  }
}
