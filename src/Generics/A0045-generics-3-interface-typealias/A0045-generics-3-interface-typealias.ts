interface PersonProtocol<T = string, U = number> {
  name: T;
  surname: T;
  age: U;
}

//O type funcionado bem parecido com a Interface, ele irá apitar para os mesmo erros. A única diferença são nos padrões de uso

type PersonProtocol2<T, U> = {
  name: T;
  surname: T;
  age: U;
};

// Quando for chamar esse protocolo, precisamos informar esses tipos genéricos. É possível informar valores padrão para os tipos, esses que serão sobreescritos caso sejam informados outros

const student1: PersonProtocol<string, number> = {
  name: 'Caio',
  surname: 'Ceretta',
  age: 30,
};

const student2: PersonProtocol<number, number> = {
  name: 11,
  surname: 23,
  age: 30,
};

// const student3: PersonProtocol2 = {
//   name: 'Thiago',
//   surname: 'Marcelino',
//   age: 30,
// };

console.log(student1, student2);
