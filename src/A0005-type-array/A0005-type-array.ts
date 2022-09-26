// Array <T> = T[] onde T é um tipo e você tá informando que o array é um array desse tipo

export function multiplicaArgs(...args: Array<number>) {
  console.log(args);

  return args.reduce((acc, value) => {
    return acc * value;
  }, 1);
}

export function concatenateStrings(...args: string[]): string {
  return args.reduce((acc, val) => acc + val);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((arg) => arg.toUpperCase());
}
const result = multiplicaArgs(1, 2, 3);
const concatenation = concatenateStrings('a', 'b', 'c');
const toUpper = toUpperCase('a', 'b', 'c');

console.log(result);
console.log(concatenation);
console.log(toUpper);
