// Um decorator é um "objeto impostor" ele finge ser seu objeto mas no meio do caminho ele pode "decorar" o seu objeto
// observando o mesmo, modificá-lo ou substituir o objeto por completo. São basicamente funções chamadas em determinados do código

//O decorator é util para você alterar uma classe já existente sem afetar o que já está funcionando.

// "Na unha"
@decorator
export class Animal {
  constructor(public name: string, public color: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    name: string;
    color: string;

    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverse(args[0]);
      this.color = args[1].split('').reverse().join('');
    }

    reverse(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// const DecoratedAnimal = decorator(Animal); //Isso é basicamente o DecoratedAnimal = Animal
// console.log(DecoratedAnimal);
// const animal = new DecoratedAnimal('caio', 'roxo');
const animal = new Animal('Caio', 'roxo');
console.log(animal);
