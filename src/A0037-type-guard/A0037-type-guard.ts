export function add(a: unknown, b: unknown): string | number {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add('a', 'b'));

//Estamos com segurança fazendo a soma quando os parametros são numbers e não fazendo quando não são

type Person = { type: 'person'; name: string };
type Animal = { type: 'animal'; color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  constructor(public name: string) {}
  type: 'person' = 'person';
}
// Isso geraria um erro porque não temos o atributo nome em Animal
// function showName(obj: PersonOrAnimal) {
//   console.log(obj.name);
// }

function showName(obj: PersonOrAnimal): void {
  // if ('name' in obj) console.log(obj.name);
  // if (obj instanceof Student) console.log(obj.name);

  switch (obj.type) {
    case 'person':
      console.log(obj.name);
      break;
    case 'animal':
      console.log(obj.color);
      break;
    default:
      console.log('jorge');
      break;
  }
}

//Todas maneiras acima são validas

showName(new Student('Caio'));
