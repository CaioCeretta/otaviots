export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantityOfProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((acc, product) => acc + product.price, 0);
  }
}

export class Product {
  constructor(public name: string, public price: number) {}
}

const product1 = new Product('Shirt', 49.9);
const product2 = new Product('Pen', 1.9);
const product3 = new Product('Cup', 0.9);

console.log(product1.name);

const shoppingCart = new ShoppingCart();
shoppingCart.insertProducts(product1);
shoppingCart.insertProducts(product2);
shoppingCart.insertProducts(product3);
console.log(shoppingCart.quantityOfProducts());
console.log(shoppingCart.totalValue());
