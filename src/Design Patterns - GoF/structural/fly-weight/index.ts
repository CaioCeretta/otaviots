/*
  Flyweight é um padrão de projeto estrutural que tem a intenção de usar compartilhamento para suportar
  grandes quantidades de objetos de formula granular

  . É um padrão de otimização (cuidado, ele vai deixar o código muito mais complexo)
  . Visa economizar memória RAM devido ao grande número de objetos na aplicação
  . Resolve o problema de desempenho dividindo o estado de um objeto em "intrínseco" e "extrínseco"
    . Estado Intrínseco é o estado que não muda ou que muda muito pouco
    . Estado extrínseco é o estado que pode ser movido para fora do objeto por mudar frequentemente
  .Só deve ser usado se sua aplicação estiver com problemas de alto consumo de memória ram

  Aplicabilidade

  Só use o Flywiehgt se TODAS as condições a seguir forem verdadeiras:

  . Sua aplicação utiliza uma grande quantidade de objetos
  . Os custos de armazenamento são altos por causa da grande quantidade de objetos
  . A maioria dos estados de objetos podem se tornar extrínsecos
  . Muitos objetos podem ser substituídos por poucos objetos compartilhados;
  . A aplicação não depende da identidade dos objetos

  O lado bom é que economiza memória RAM e o ruim é ser complexo e ser difícil não deixar separado os dados e conseguir uni-los

*/
