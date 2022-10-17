import { ProductDecorator } from './product-decorator';

export class ProductDesignDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 10;
  }
}
