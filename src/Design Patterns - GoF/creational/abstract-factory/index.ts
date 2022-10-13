/* Ele é bem similar ao factory, a intenção dele é fornecer uma interface para a criação de famílias de objetos
  relacionados ou dependentes sem especificar as classes concretas
  Tem uma camada a mais de abstração e cria factories específicas para famílias de objetos
  É composto por vários factory methods
  Visa agrupar famílias de objetos compatíveis e cria uma fábrica concreta por grupos de objetos compatíveis

  Aplicabilidade:

  Devemos usar o abstract factory quando:

  . Um sistema deve ser independente de como seus produtos são criados, compostos ou representados
  . Um sistema deve ser configurado com uma família de produtos que podem(ou não) trabalhar juntos
  . Uma família de objetos for projetada para ser usada em conjunto e você necessita garantir essa restrição
  . Você quer fornecer uma biblioteca de classes de produtos e quer revelar somente suas interfaces
    Não suas implementações

  Lado bom

  . Os produtos serão sempre compatíveis entre si
  . Aplicação clara do OCP, é fácil adicoipnar novas fábricas e produtos
  . Aplicação clara do SRP, o código que cria está separado do código que usa os objetos

  Lado Ruim

  . Muitas classes e maior complexidade será introduzida no código

  */
