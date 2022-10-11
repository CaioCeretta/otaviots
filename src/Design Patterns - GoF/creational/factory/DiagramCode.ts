interface Product {
  sayHi(): void;
}

class ConcreteProduct implements Product {
  sayHi(): void {
    console.log('Hi');
  }
}

abstract class Creator {
  abstract factoryMethod(): Product;

  createAndShow(): void {
    const product = this.factoryMethod();
    console.log(product);
  }
}

class ConcreteCreator extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

const creator = new ConcreteCreator();
const product = creator.factoryMethod();

product.sayHi();
creator.createAndShow();
