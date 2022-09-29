//Com esse também temos acesso ao PropertyDescriptor

function decorator(classPrototype: any, name: string | symbol): any {
  let propertyValue: any;
  return {
    get: () => propertyValue,
    set: (value: any) => {
      if (typeof value === 'string') {
        propertyValue = value.split('').reverse().join('');
        return;
      }
      propertyValue = value;
    },
  };
}

export class Person {
  @decorator //É possível decorar apenas uma propriedade
  name: string;
  @decorator
  surname: string;
  age: number;

  constructor(name: string, surname: string, age: number) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

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
console.log(person.fullName);
