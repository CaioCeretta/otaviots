// Por mais que o typeguard já esteja checando que o valor de sum será um number, o typescript ainda está reclamando que o + não pode ser aplicado no tipo T
// Isso apenas funciona no escopo onde está. Precisando de uma inferencia melhor no tipo como:

export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

//Dessa maneira ele sabe que o valor do booleano for true, o value sera um number

// export function isNumber(value: unknown): boolean {
//   return typeof value === 'number';
// }

console.log(isNumber('123'));
console.log(isNumber(123));

export function sum<T>(...args: T[]): number {
  const result = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }
    return sum;
  }, 0);

  return result;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log(sum(1, 2, 3, 'a'));

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
console.log(sum('a', 1));
//Nesses dois casos acima ele reclama pois ele ja inferiu o tipo de T
console.log(sum(...[1, 2, 3, 'a', 'b', 'c', 1]));
console.log(sum('a', 'b', 'c'));
