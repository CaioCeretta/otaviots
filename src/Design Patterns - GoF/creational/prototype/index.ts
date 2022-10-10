/**
 * Intenção Principal - Especificar os tipos de objetos a serem criados usandso uma instancia-protótipo e criar novos objetos pela cópia desse protótipo
 *
 *  Peculiaridades da linguagem
 *
 * -  JS/TS são linguagens baseadas em prótipos, que é um objeto normal que temos na cadeia de objetos
 * -  Objetos estão diretamente ligados a outros objetos
 * -  Podemos literalmente fazer um objeto "herdar" de outrp
 * -  A "herança" é obtida via delegação (um objeto delega algo para seu protótipo)
 * -  Uma das maneiras mais simples para manipular o protótipo de um objeto é usando o Object.create(prototypeObject);
 * -  Também temos os costume de usar classes ou funções construtoras para manipulação de protótipos (isso faz com que JS/TS pareçam estar usando o padrão orientado a objetos clássico)

Uma visão geral seria que ele um objeto prototype é o tipo de objeto a ser criado determinado pelo objeto protótipo, ele é tipicamente utilizado para evitar a recrição de objetos caros, por exemplo objetos que precisam se conectar numa base de dados.
Ajuda a evitar a explosão de subclasses. Muitas vezes estendemos uma classe em uma subclasse que alteraria apenas alguns valores.
Pode (ou não) manter um registro de objetos protótipo em um objeto separado.
Geralmente esse padrão é criado apenas com um método "clone" dentro do objeto protótipo

Devemos usar esse padrão quando precisar que o código não dependa de classes concretas para a criação de novos objetos, também para quando quisermos evitar a criação de muitas subclasses para objetos similares

Lado bom

Oculta classes concretas do código do cliente
Ajuda na criação de objetos caros ou complexos
Evita explosão de subclasses

Lado ruim

Clonar objetos que tem referências para outros objetos pode ser complexo.

Um exemplo básico seria
*/

interface Prototype {
  clone(): Prototype;
}

export class Person implements Prototype {
  constructor(public name: string, public age: number) {}

  clone(): this {
    // Esse não é um clone
    // Estamos apenas criando um novo objeto
    // Que tem este objeto como protótipo
    const newPerson = Object.create(this);
    return newPerson;
  }
}

const person1 = new Person('Caio', 26);
const person2 = person1.clone();

console.log(person1.name);
console.log(person2.name);
