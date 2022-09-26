type TypeName = {
  name: string;
};

type TypeSurname = {
  surname: string;
};

type TypeFullName = {
  fullName(): string;
};

//Interfaces estão mais relacionadas com objeto,

type TypePerson = TypeName & TypeSurname & TypeFullName;

export class Person implements TypePerson, TypeSurname, TypeFullName {
  constructor(public name: string, public surname: string) {}
  fullName(): string {
    throw new Error('Method not implemented.');
  }
}

const person = new Person('caio', 'ceretta');

console.log(person.fullName());
