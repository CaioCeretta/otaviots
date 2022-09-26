export class Person {
  constructor(
    public name: string,
    public surname: string,
    private age: number,
    protected cpf: string,
  ) {}

  getAge(): number {
    return this.age;
  }
  getCpf(): string {
    return this.cpf;
  }
  getFullName(): string {
    return `${this.name} ${this.surname}`;
  }
}

export class Student extends Person {
  getFullName(): string {
    return `This comes from Student ${this.name} ${this.surname}`;
  }
}
export class Customer extends Person {
  getFullName(): string {
    return `This comes from Cusstomer ${this.name} ${this.surname}`;
  }
}

const person = new Person('Caio', 'Ceretta', 26, '000.000.000-00');
const student = new Student('Thiago', 'Marcelino', 30, '000.000.000-00');
const customer = new Customer('Bruno', 'Garcia', 30, '000.000.000-00');

console.log(
  person.getFullName(),
  student.getFullName(),
  customer.getFullName(),
);
