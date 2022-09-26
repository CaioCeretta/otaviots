type TypePerson = {
  name: string;
};

type TypeSurname = {
  surname: string;
};

type TypeFullName = {
  fullName(): string;
};

export class Person implements TypePerson, TypeSurname, TypeFullName {
  constructor(public name: string, public surname: string) {}
  fullName(): string {
    throw new Error('Method not implemented.');
  }
}

const person = new Person('caio', 'ceretta');

console.log(person.fullName());
