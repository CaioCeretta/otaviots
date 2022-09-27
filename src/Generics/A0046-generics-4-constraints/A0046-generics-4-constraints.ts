type ObtainKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

//Esse extends significa que o K é no maximo uma keyof O, no caso dos genéricos, ele representa uma restrição
//

const obtainKey: ObtainKeyFn = (obj, key) => obj[key];

const animal = {
  color: 'Pink',
  vaccines: ['Vaccine 1, Vaccine 2'],
  age: 4,
};

const vaccines = obtainKey(animal, 'vaccines');

const color = obtainKey(animal, 'color');

console.log(vaccines, color, obtainKey(animal, 'age'));
