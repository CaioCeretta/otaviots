/**
 * Intenção Oficial
 *
 * Evita o acoplamento do remetente de uma solicitação ao seu destinatário, dando a mais de um objeto a chance de tratar
 * a solicitação. Encadeia os objetos receoptores e passa a solicitação ao longo da cadeira até que um objeto a trate
 *
 * Sobre o Chain Of Responsibility
 *
 * . É usado quando uma requisição precisa passar por uma sequência de operações até ser totalmente tratada.
 * . Desacopla quem envia de quem vai tratar a requisição
 * . É muito usado com requisições HTTP
 * . É a base de outros padrões de projeto conhecidos como os middlewares usados no express
 * . Permite que um objeto TRATE a requisição e chame o PRÓXIMO da cadeia
 * . Permite que um objeto NÃO TRATE a requisição e chame o PRÓXIMO da cadeia
 * . Permite que um objeto TRATE a requisição e FINALIZE a cadeia
 * . Permite que um objeto NÃO TRATE a requisição e FINALIZE a cadeia
 * . O cliente pode iniciar a requisição de qualquer objeto se necessário.
 *
 * Use o Chain of Responsibility quando:
 *
 * . Seu sistema precisa processar uma requisição em várias etapas diferentes e você não quer criar uma ordem rígida
 *   para o processamento. O chain of responsibility permite que você altere a ordem dos objetos na cadeira facilmente
 *  (mesmo assim mantendo uma ordem específica)
 * . Você quer aplicar o princípio da responsabilidade única para tratamento de dados da requisição. Cada objeto fica
 *   responsável por tratar apenas a parte que lhe couber
 * . Você quer permitir que os objetos responsáveis pelo tratamento da requisição possam variar em tempo de execução
 *
 * Lado bom
 *
 * . Aplica o SRP e aplica o OCP
 * . Permite que voce altere facilmente a cadeia de objetos e a ordem das chamadas.
 *
 * Lado ruim
 *
 * . É comum uma requisição passar por toda a cadeia e não ser tratada
 *
 */

//Implementação
abstract class ChainObject {
  protected next: ChainObject | null = null;

  addNext(next: ChainObject): ChainObject {
    this.next = next;
    return next;
  }

  handler(req: string): string {
    if (this.next) return this.next.handler(req);
    return req;
  }
}

class ObjA extends ChainObject {
  handler(req: string): string {
    return super.handler(req + 'ObjA, ');
  }
}

class ObjB extends ChainObject {
  handler(req: string): string {
    return super.handler(req + 'ObjB, ');
  }
}

const objectA = new ObjA();
objectA.addNext(new ObjB()).addNext(new ObjB()).addNext(new ObjA());
console.log(objectA.handler('Initial, '));
