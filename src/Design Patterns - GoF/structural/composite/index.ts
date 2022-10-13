/* Composite consiste em compor objetos em estrutura de árvore para representar hierarquias partes/todo
Permite aos clientes tratar de maneira uniforme objetos individuais e composições de objetos

. É um padrão da categoria estrutural
. Faz mais sentido em estrutura que podem ser tratados hierarquicamente (como árvores)
. Pode ser uma solução para estrutura complexas que podem ser tratadas de maneira uniforme
. Prioriza composição ao invés de herança
. Exemplo: produto solto com preço e caixa com vários do mesmo produto também com preço, um exemplo um leite
  podendo pegar um fardo completo ou um leite separado. Pode tratar o fardo ou apenas um produto dentro do fardo
  como um produto normal.

  A interface comum de um component nesse patern é a de dois filhos, o "Leaf" que é a folha da árvore e realmente faz o trabalho
  e os objetos composite que são objetos com filhos e não fazem o trabalho real, mas delegam para seus filhos

  Aplicabilidade

  Deveremos usar quando:
  * A estrutura de objetos possa ser representada hierarquicamente
  * Quando quisermos que o código cliente trate objetos compostos e objetos simples da mesma maneira

  Lado bom e o lado ruim:

  Bom
  - É muito fácil criar objetos complexos
  - É fácil gerar uma hierarquia de objetos
  - É fácil usar polimorfismo e recursão
  - É fácil adicionar novos tipos de elementos na estrutura (OCP)

  Ruim
  - Dependendo da estrutura, pode quebrar o princípio da segreção de interfaces (ISP)
  ele tende a ter métodos que dependem de interfaces que não usam. Porém, não serão
  forçados a implementar esses métodos. Eles só receberão os métodos da classe abstrata



*/
