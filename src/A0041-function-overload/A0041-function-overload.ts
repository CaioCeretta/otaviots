// Baseado na "assinatura" da função é fazer a função se comportar de maneira diferente. O overload é apenas no tipo, como no exemplo abaixo

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

const adder: Adder = (x: number, y?: number, ...args: number[]) => {
  if (args.length > 0)
    return args.reduce((acc, value) => acc + value, 0) + x + (y || 0);
  return x + (y || 0);
};

console.log(adder(1)); // Nesse caso nós podemos perceber que existem +2 overloads
console.log(adder(1, 2)); // Nesse caso ele está mostrando que o tipo de y tem que ser um number
console.log(adder(1, 2, 3, 2, 5)); // Aqui ele está avisando que o terceiro parametro precisa ser um array de numbers
