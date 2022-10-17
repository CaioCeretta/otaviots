// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CustomizedProduct } from './product/customized-shirt';
import { ProductDecorator } from './product/product-decorator';
import { ProductDesignDecorator } from './product/product-design-decorator';
import { TShirt } from './product/tshirt';

const tShirt = new TShirt();
const tShirtWithFrontDesign = new ProductDesignDecorator(tShirt);
const tShirtWithFrontAndBackDesign = new ProductDesignDecorator(
  tShirtWithFrontDesign,
);
const customizedTShirt = new CustomizedProduct(tShirt);

//Podemos ver que os decorators podem fazer o que quiser antes ou depois da chamada do método.

console.log(tShirt.getPrice());
console.log(tShirtWithFrontDesign.getPrice());
console.log(tShirtWithFrontAndBackDesign.getPrice());
console.log(customizedTShirt.getName(), customizedTShirt.getPrice());
