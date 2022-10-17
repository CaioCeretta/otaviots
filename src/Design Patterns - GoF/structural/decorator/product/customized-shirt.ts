import { ProductDecorator } from './product-decorator';

export class CustomizedProduct extends ProductDecorator {
  getName(): string {
    return 'Designed ' + this.product.getName();
  }

  getPrice(): number {
    return this.product.getPrice() + 50;
  }
}
