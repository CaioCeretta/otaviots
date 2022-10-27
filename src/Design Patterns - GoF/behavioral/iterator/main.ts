import { MyDataStructure } from './my-data-structure';
import { MyReverseIterator } from './my-reverse-iterator';

export const dataStructure = new MyDataStructure();

dataStructure.addItem('A', 'B', 'C', 'D', 'E', 'F');

const [a, b] = dataStructure;

console.log('ROUBADOS:', a, b);
console.log('Executei várias coisas e depois usei o iterator');
const [c, ...rest] = dataStructure;
console.log(c, rest); // Nesse caso o iterator vai ser zerado, ficando com o a e o b novamente

for (const data of dataStructure) {
  console.log(data);
}

console.log();
dataStructure.changeIterator(new MyReverseIterator(dataStructure));

console.log('ROUBADOS:', a, b);

for (const data of dataStructure) {
  console.log(data);
}

console.log('AQUI PRECISA ZERAR O ITERADOR');

for (const data of dataStructure) {
  console.log(data);
}
