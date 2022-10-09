/** Intenção Principal - Garantir que uma classe tenha somente uma instância no programa e fornecer um ponto de acesso global para a mesma

Somente uma instância?
Por exemplo o login, causaria uma concorrencia entre os métodos. Se propoem em lugares que terão recursos compartilhados. Como acesso à base de dados, interfaces gráficas, sistemas de arquivos, servidores de impressão, logger, etc.

Uma das principais vantagens é a de proteger a instância com encapsulamento, evitando que outro código sobscreva o seu valor.

a estrutura de um singleton consiste em

- atributo privado para a instância
- Qualquer dado necessário para ele
- construtor privado que não permite o uso de new com o singleton
- getter pra instancia, onde decidiremos se criaremos uma nova ou retornaremos a já criada
- Qualquer métodos necessários

A aplicabilidade dele é para quando a classe precisa ter somente uma instância disponível no programa

Beneficios

- Acesso constrolado à instancia única
- É fácil permitir um numero de ideias caso mude de ideia
- Usa lazy instantiation. Ou seja, só é criado no momento do uso
- Substitui variáveis globais

Desvantagens

- É mais difícil de testar
- Viola o princípio da responsabilidade unica
- Requer um tratamento especial em casos de concorrência, se duas partes do programa chegarem e for null, ambas irão gerar uma nova instância do instance
- Um dos autores do livro disse que esse seria o único padrão que ele removeria caso fosse refatorar o livro

*/

export class Singleton {
  private static _instance: Singleton | null = null;

  private constructor() {
    // new not allowed outside the class
  }

  static get instance(): Singleton {
    if (Singleton._instance === null) {
      Singleton._instance = new Singleton();
    }
    return Singleton._instance;
  }
}

const instance2 = Singleton.instance;
const instance1 = Singleton.instance;

console.log(instance1 === instance2);
