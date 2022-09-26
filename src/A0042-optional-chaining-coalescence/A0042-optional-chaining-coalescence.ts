// Encadeamento opcional e Operador de coalescência nula

type Document2 = {
  title: string;
  text: string;
  date?: Date;
};

const document2: Document2 = {
  title: 'The title',
  text: 'The text',
  // date: new Date(),
};

// console.log(document2.date?.toDateString());
//O ' ? ' é o encadeamento opcional

//Coalescencia nula é pra confirmar se o valor que está recebendo do lado esquerdo é um 'não valor' que é null e undefined como no jeito abaixo

console.log(document2.date?.toDateString() ?? 'There is no date');

//Nesse caso o ?? funciona basicamente como um if, executando o lado esquerdo caso retorne verdadeiro, no caso acima retornara falso, então retornara o 'There is no date'
