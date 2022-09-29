//Ele só funciona para saber como o parametro está/é, nós só assistimos os parametros

function decorator(
  classPrototype: any,
  methodName: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(methodName);
  console.log(index);

  return 'something';
}

export class Person {
  name: string;
  surname: string;
  age: number;

  constructor(
    @decorator name: string,
    @decorator surname: string,
    @decorator age: number,
  ) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  method(@decorator msg: string): string {
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
