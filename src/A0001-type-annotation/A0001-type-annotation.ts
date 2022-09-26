// Typescript faz a inferencia de tipo pra gente, entao se por exemplo, caso criarmos uma variável com um valor de string, o ts vai inferir o tipo correto

// Tipos básicos, nesses tipos ocorre a inferência de tipos

const nome = 'Caio';
const idade = 30;
const adulto = true;
const simbolo = Symbol('Any simbol');
// const big = 10n;

/**
 * Os tipos que já existem no js nós criamos com letras minúscula
 * por ex :string, :int, :boolean, :symbol
 **/

// Tipagem diferente de Arrays e Objetos, Ex de array, precisa informar entre os parênteses qual o tipo, podendo ser tanto Array<T> quanto tipo[]

const numbersArray: Array<number> = [1, 2, 3];
const stringsArray: Array<string> = ['a', 'b', 'c'];

// Objeto você precisa informar para cada valor o tipo do atributo

const person: { name: string; age: number; adult?: boolean } = {
  name: 'Caio',
  age: 26,
  adult: true,
};

console.log(person.name);

// Funções, caso eu não informe qual será o retorno dessa função após o fechamento dos parenteses
// Ele automaticamente irá inferir o retorno da função

function sum(x: number, y: number) {
  return x + y;
}

//Nesse caso o tanto o x quanto y são tipo anotation, porém ele nao entenderá o retorno da função por causa dos primeiros dois pontos, tendo que fazer semelhante a uma arrow function
//  (x: number, y: number) => number  fazem parte do typo anotation, o valor vem somente após o sinal de igual

const sum2: (x: number, y: number) => number = (x, y) => {
  return x + y;
};

export { person };
