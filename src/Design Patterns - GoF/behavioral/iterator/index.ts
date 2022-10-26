/**
 * Intenção Oficial:
 *
 * Fornece uma maneira de acessar sequencialmente os elementos de um objeto agregado sem expor sua representação
 * subjacente
 *
 * Sobre o iterator
 *
 * . Desacopla a intenção principal do objeto do modo como sa sua iteração é realizada
 * (delega a iteração para outro objeto)
 * . Permite vários tipos de iterators, facilitnando a implementação de novos modos de travessia na mesma colação
 * . Encapsula os detalhes e monitora toda a travessia
 * . Permite que a coleção troque de iterador em tempo de execução
 * . Geralmente a linguagem de programação disponibiliza maneiras para trabalhar com iteradores
 *
 * Aplicabilidade
 *
 * - Use o iterator quando:
 *
 *  . Você precisa remover a complexidade de travessia de dentro da coleção principal. Isso permite que sua coleção
 *  foque apenas em armanezar dados de maneira eficiente
 * . Sua coleção pode ter vários modos de travessia, como crescente, decrescente, pelo menor número de saltos, pulando
 *  de dois em dois, ou como preferir
 * . Você quer disponibilizar protocolos de travessia para diferentes tipos de coleções
 *
 * Lado bom
 *
 * . É possível pausar a travessia e continuar posteriormente
 * . É possível atravessar varias vezes a mesma coleção em paralelo usando outro objeto iterador
 * . É fácil adicionar novos objetos iteradores com algoritmos de travessia completamente diferentes
 * . Não polui o código do objeto principal com vários métodos e algoritmos de travessia diferentes
 *
 * Lado ruim
 *
 *  . Este padrão só é útil se sua coleção realmente precisar de uma travessia complexa. Do contrário é apenas uma
 *  complexidade a mais
 *  */

export class Counter {
  public current = 0;
  public last = 5;

  [Symbol.iterator](): CounterIteratorForward {
    return this.resetIterator();
  }

  resetIterator(): CounterIteratorForward {
    return new CounterIteratorForward(this);
  }
}

export class CounterIteratorForward {
  private current = this.counter.current;
  private last = this.counter.last;

  constructor(private counter: Counter) {}

  next(): { value: number; done: boolean } {
    return { value: ++this.current, done: this.current > this.last };
  }
}

const counter = new Counter();
const [one, two, ...rest] = [...counter];
console.log(one, two, rest); // 1 2 [3, 4, 5]
for (const count of counter) console.log(count);
