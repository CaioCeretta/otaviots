let x = 10; // eslint-disable-line
x = 0b1010;
// x = 'Luiz';

/** O tipo de y é o tipo '10', esta querendo dizer que o y só pode ser 10 */
const y = 10;
//Podendo fazer até algo do tipo abaixo, porém não é recomendável
//const a: 100 = 100;

//Esse é um exemplo que está colocando a variável name como uma constante com o tipo 'Caio', não podendo ser colocado outro valor a não ser Caio
const person = {
  name: 'Caio' as const,
  surname: 'Ceretta',
};
// person.name = 'Jorge';

function pickAColor(color: 'Red' | 'Yellow' | 'Blue') {
  return color;
}

// pickAColor('Purple');

export { x, person };
