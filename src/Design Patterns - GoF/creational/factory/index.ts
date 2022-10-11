/**
 *
 * Intenção principal desse padrão é definir uma interface para criar um objeto, mas deixar as subclasses decidirem
 * que classes instanciar. O Factory Method permite adiar a instanciação para as subclasses
 * Basicamente existe uma classe que cria um objeto, esse método pode ou não ser abstrato e se for abstrato
 * forçar as subclasses a implementarem o método.
 *
 * Fábricas são simplesmentes operações (funções, métodos) que criam objeto.
 *
 * Sobre:
 * - Ele é um padrão de projeto de criação (lida com a criação de objeto)
 * - Oculta a lógica de instanciação do código cliente. O método fábrica será responsável por instanciar as classes desejadas
 * - É obtido através de herança. O método fábrica pode ser criado, sobrescrito por subclasses
 * - Dá flexibilidade ao código permitindo a criação de novas factories sem necessidade de alterar o código já escrito
 * - Pode usar parâmetros para determinar o tipo dos objetos a serem criados ou os parâmetros a serem enviados aos objetos sendo criados
 *
 * Aplicação:
 *
 *  . Use o factory method quando não souber com certeza quais tipos de objetos o seu código irá precisar
 *  . Use o factory method para permitir a extransão de suas factories para criação de novos objetos (Auxilia no OCP)
 *  . Use o factory method para desacoplar o código que cria do que usa as classes (SRP)
 *  . Use o factory method para dar um hook às subclasses e permitir que elas decidam a lógica de criação dos objetos
 *  . Use o factory method para eliminar duplicação de código na criação de objetos
 *
 *
 *  O lado ruim é que se for usado sem necessidade ele pode causar uma explosão de subclasses. Será necessário uma classe
 *  ConcreteCreator para cada ConcreteProduct
 */

type Car = { model: string; engine: string };
type CarPrototype = { showDetails(): void };

const carPrototype: CarPrototype = {
  showDetails(): void {
    console.log(this);
  },
};

const carFactory = (model: string, engine: string): Car & CarPrototype => {
  const idAsAPrivateMember = Math.floor(Math.random() * 1000);
  const carObj = Object.create(carPrototype);

  return Object.assign(carObj, { id: idAsAPrivateMember, model, engine });
};

const car1 = carFactory('Fusca', 'V8');
console.log(car1.showDetails());
const car2 = carFactory('Celta', 'ABDD1233');
console.log(car2.showDetails());
