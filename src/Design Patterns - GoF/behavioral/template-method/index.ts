/**
 * Intenção Oficial:
 * Define o esqueleto de um algoritmo em uma operação, postergando a definição de alguns passos para subclasses.
 * O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura.
 *
 * Sobre o Template Metho
 *
 * . Mantém a odem de chamada de métodos no alrotimo
 * . Evita a duplicação de código dentro da classe
 * . Substitui condicionais por polimorfismo
 * . Permite que as subclasses alterem apenas os passos necessários para concluir o algoritmo
 * . Permite a adição de hooks para que as subclasses utilizem pontos estratégicos do algoritmo
 *
 * Aplicabilidade
 *
 * Use o template método quando:
 *
 * . Você precisa de variações de um mesmo algoritmo sem mudar a ordem de execução dos métodos
 * . Você percebe que está usando herança para alterar apenas pequenos trechos de código de um algoritmo
 *
 * Lado bom:
 *
 * . Evita a duplicidade de código
 * . Permite fácil alteração de algoritmos
 * . Aplica o OCP e o SRP
 *
 * Lado ruim:
 *
 *  . Em alguns casos pode violar o LSP ao alterar comportamento de métodos de subclasses
 * */

export abstract class TemplateMethodBaseClass {
  // This is the template method

  readonly templateMethod = (): void => {
    this.stepA();
    this.hook();
    this.stepB();
  };

  abstract stepA(): void; // As classes concretas devem definir
  abstract stepB(): void; // As classes concretas devem definir
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  hook(): void {} // As classes concretas podem usar
}

export class ConcreteTemplateMethod extends TemplateMethodBaseClass {
  stepA(): void {
    console.log('A - stepA');
  }

  stepB(): void {
    console.log('A - stepB');
  }

  hook(): void {
    console.log('A - Hook Used');
  }
}

const concrete = new ConcreteTemplateMethod();

concrete.templateMethod();
