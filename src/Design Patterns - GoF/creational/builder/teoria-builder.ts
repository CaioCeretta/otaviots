/**
 * Visa separar a criação da utilização do objeto, deixando o código do cliente mais limpo
 *
 * Trata da criação de objetos complexos, o que é um objeto complexo?
 * - Construtores muito complexos
 * - Composição de vários objetos (composite)
 * - Algoritmo de criação do objeto é complexo
 *
 * O builder permite a criação de um objeto em etapas, chamaria em determinado momento para criar um atributo e por aí vai, não precisando ser tudo de uma vez
 * Permite o method chaining, chamar de dentro de um método um outro método.
 * O objeto final pode variar de acordo com a necessidade, podendo criar da maneira que deseje.
 * É um padrão complexo, quanto mais complexo for o objeto, mais complexo será o builder
 *
 *  * Consequências
 *
 * Bom
 *
 * - Separa a criação de utilização
 * - O cliente não precisa criar objetos diretamente
 * - O mesmo código pode construir objetos diferentes
 * - Ajuda na aplicação dos princípios SRP e OCP
 *
 * #####################################
 *
 * Ruim
 *
 * - O código final pode se tornar muito complexo
 *
 * Esse exemplo abaixo, é um exemplo de builder, porém, em uma classe que não necessita desse padrão
 */

export class Person {
  constructor(public name?: string, public age?: number) {}
}

export class PersonBuilder {
  private person = new Person();

  newPerson(): void {
    this.person = new Person();
  }

  setName(name: string): this {
    this.person.name = name;
    return this;
  }

  setAge(age: number): this {
    this.person.age = age;
    return this;
  }

  getResult(): Person {
    return this.person;
  }
}

const personBuilder = new PersonBuilder();

//O retorno do 'this' nesses métodos torna possível o method chaining e uma chamada de método ser encadeada por outra
const person1 = personBuilder.setName('Caio').setAge(26).getResult();
personBuilder.newPerson();
const person2 = personBuilder.setName('Bruago').setAge(31).getResult();

// Porém o builder acima foi usado em uma classe que não precisa disso, como já foi dito, tudo isso poderia ser feito apenas dessa maneira abaixo

type Person2 = {
  name?: string;
  age?: number;
};

const person3: Person2 = { name: 'Caio' };
const person4: Person2 = { name: 'Bruago', age: 31 };
