// Interceção, podendo também ser lido como "AND"
type HasName = { name: string };
type HasSurname = { surname: string };
type HasAge = { age: number };
type Person = HasAge & HasName & HasSurname;

const person: Person = {
  age: 30,
  name: 'Lucas',
  surname: 'Tri',
};

console.log(person);

export { person };
