export class Person<T, U> {
  constructor(public name: T, age: U) {}
}

// const person1 = new Person('Caio', 26);
// const person2 = new Person(['Alex'], 34);
// const person3 = new Person(['Andre'], { age: 38 });
// const person4 = new Person<string, number>('Thiago', 31);

export class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};
  //Essa é uma key signature, está falando que a chave é do tipo number e o valor dela é do tipo T

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.checkEmpty()) return undefined;

    this.count--;

    const removedElement = this.elements[this.count];
    delete this.elements[this.count];
    return removedElement;
  }

  checkEmpty(): boolean {
    return this.count === 0;
  }

  length(): number {
    return this.count;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.showStack();
// Nesse ponto o typescript ainda nao inferiu o tipo de T mesmo os valores sendo apenas numeros, precisando informar o tipo acima, na criação do objeto

while (!stack.checkEmpty()) {
  console.log(stack.pop());
}

stack.showStack();
