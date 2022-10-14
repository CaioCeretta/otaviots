/* eslint-disable @typescript-eslint/no-empty-function */

import { forEach } from 'lodash';

// Component
export abstract class ProductComponent {
  abstract getPrice(): number;
  // add(product: ProductComponent): void {} // Esse é um exemplo de um método que não será implementado no leaf, apenas o composite
  // remove(product: ProductComponent): void {}
}

//Leaf
export class ProductComposite extends ProductComponent {
  private children: ProductComponent[] = [];

  getPrice(): number {
    return this.children.reduce((acc, child) => {
      return acc + child.getPrice();
    }, 0);
  }

  add(...products: ProductComponent[]): void {
    products.forEach((item) => this.children.push(item));
  }

  remove(product: ProductComponent): void {
    const productIndex = this.children.indexOf(product);

    if (productIndex !== -1) {
      this.children.splice(productIndex, 1);
    }
  }
}

//Leaf
export class ProductLeaf extends ProductComponent {
  constructor(public name: string, public price: number) {
    super();
  }

  getPrice(): number {
    return this.price;
  }
}

// Client

const pen = new ProductLeaf('shirt', 5);
const smartphone = new ProductLeaf('shirt', 1_000);
const pencil = new ProductLeaf('Car', 2);
const productBox = new ProductComposite();

productBox.add(pen, smartphone, pencil);
console.log(productBox.getPrice());

const tablet = new ProductLeaf('Tablet', 1_200);
const kindle = new ProductLeaf('Kindle', 300);
const anotherProductBox = new ProductComposite();
anotherProductBox.add(tablet, kindle);
console.log(anotherProductBox.getPrice());
productBox.add(anotherProductBox);
console.log(productBox.getPrice());
//É possível colocar caixa dentro de caixa, digamos assim, e pegar o preço como se fosse um único produto, assim como pegar os valores separados
