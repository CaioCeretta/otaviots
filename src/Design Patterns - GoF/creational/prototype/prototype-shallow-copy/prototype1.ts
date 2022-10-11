export interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  public addresses: Address[] = [];

  constructor(public name: string, public age: number) {}

  clone(): Person {
    // Esse objeto será a instancia que está clonando
    const newObject = Object.create(this);
    return newObject;
    // const newObj = new Person(this.name, this.age);
    // newObj.addresses = this.addresses.map((address) => address.clone());
    // return newObj;
  }

  addAddresses(address: Address): void {
    this.addresses.push(address);
  }
}

export class Address {
  constructor(public street: string, public number: number) {}
}

const address1 = new Address('Av Brasil', 15);
const person1 = new Person('Caio', 26);
person1.addAddresses(address1);
const person2 = person1.clone();

person1.addresses[0].street = 'Bla bla bla';

person2.name = 'Jorge';
console.log(person1);
console.log(person2);
