/**
 * Quando algo ainda não foi definido ou pode nao ser definida, o tipo sera undefined
 */

let x;
if (typeof x === 'undefined') x = 20;

console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

/**
 * * Já o null pode ser colocado conscientemente pelo desenvolvedor, como por exemplo o exemplo abaixo onde o parametro foi definido como any
 * então pode tanto ser número quanto null
 */

export function squareOf(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfTwoNumber = squareOf(2);
const squareOfTwoStrings = squareOf('2');

if (squareOfTwoNumber === null) {
  console.log('Invalid operation');
} else {
  console.log(squareOfTwoNumber);
}
