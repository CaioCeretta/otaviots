import { stringify } from 'querystring';

function invertNameAndColor<T extends new (...args: any[]) => any>(
  target: T,
): T {
  console.log('I am the decorator and i received ' + target);
  return class extends target {
    color: string;
    name: string;

    constructor(...args: any[]) {
      super(...args); //Esse args será o que nós iremos informar no momento da instanciação do objeto
      this.name = this.invert(args[0]);
      this.color = this.invert(args[1]);
    }

    invert(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

@invertNameAndColor
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('I am the class');
  }
}

//Esse arroba antes do nome está dizendo que é um decorator, ele é chamado quando criamos a classe e não precisamos fazer a chamada explicitamente

const animal = new Animal('Loki', 'blue');

console.log(animal);
