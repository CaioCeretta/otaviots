//Ele é chamado no metodo e o retorno deve ser um PropertyDescriptor ou any

function decorator(
  classPrototype: any,
  methodName: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(methodName);
  console.log(descriptor);

  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class Person {
  name: string;
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
    return `${this.name} ${this.surname}: ${msg}`;
  }

  get fullName(): string {
    return `${this.name} ${this.surname}`;
  }

  set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.surname = words.join(' ');
  }
}

const person = new Person('Caio', 'Ceretta', 26);
// person.method = () => 'EIIIIIIIIIII'; // Como o writable está false, não podemos alterar o método da classe, porém o typescript não detecta erro por ser uma feature muito nova

const method = person.method('Hello world');

console.log(method);
