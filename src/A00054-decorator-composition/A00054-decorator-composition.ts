// type Constructor = new (...args: any[]) => any

interface Constructor {
  new (...args: any[]): any;
}

function invertNameAndColor(param1: string, param2: string) {
  //Closure, então eu posso pegar os parametros e usar dentro da função de retorno
  return function <T extends Constructor>(target: T): T {
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
        return value.split('').reverse().join('') + ' ' + param1 + ' ' + param2;
      }
    };
  };
}

function otherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('I am the other decorator ' + param1);
  };
}

//Caso queira mandar parametros, precisamos mandar assim os mesmos e a função deve retornar a função decoradora
//Caso queira inserir mais de um decorador, é só colocar um @ a mais em cima

@otherDecorator('Parameter of the other decorator')
@invertNameAndColor('Value1', 'Value2')
export class Animal {
  constructor(public name: string, public color: string) {
    console.log('I am the class');
  }
}

//Esse arroba antes do nome está dizendo que é um decorator, ele é chamado quando criamos a classe e não precisamos fazer a chamada explicitamente

const animal = new Animal('Loki', 'blue');

console.log(animal);
