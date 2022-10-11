const personPrototype = {
  // firstName: 'Caio',
  surname: 'Ceretta',
  age: 26,

  fullName() {
    return `${this.firstName} ${this.surname}`;
  },
};

const anotherPerson = Object.create(personPrototype);
// Isso se parece mas não é uma herança da POO clássica

/* O Javascript, no momento que criamos essa variável usando aquele objeto como protótipo.
Se fizermos isso, a própria linguagem irá delegar um valor para o
firstName inexistente na variável
*/

// console.log(anotherPerson.firstName);
anotherPerson.firstName = 'Joana';
console.log(anotherPerson.fullName());
