/**
 * Intenção Oficial
 * Agregar responsabilidades adicionais a um objeto dinamicamente.
 * Os decorators fornecem uma alternativa flexível ao uso de subclasses para extensão de funcionalidades.
 *
 * Sobre o Decorator
 * . Usa a composição ao invés da herança (sempre prefira composição ao invés de herança)
 * . É muito parecido com o "Composite" porém tem a intenção diferente
 * . É usado para adicionar funcionalidades a objetos em tempo de execução, ou seja, é possível adicionar
 * funcionalidades sem precisar recompilar o código
 * . Finge ser o objeto sendo decorado, porém repassa chamadas de métodos para o mesmo
 * . Pode manipular os dados antes do retorno
 *
 * Use o padrão decorator quando:
 *
 * . Você precisa adicionar funcionalidades em objetos sem quebrar ou alterar o código existente
 * . Você quiser usar composição ao invés de herança
 * . Você percebe que pode ocorrer uma explosão de subclasses em determinada estrutrura
 *
 * Lado bom
 * . Composição é melhor do que herança na grande maioria dos casos
 * . É facil adicionar ou remover comportamento de objetos sem tocar em código já escrito ou testado (OCP)
 * . É possível decorar um objeto já decorado, adicionando ainda mais funcionalidades (camadas)
 *
 * Lado ruim
 * . Quanto mais decorators em camadas, mais complexo o código fica, porém os benefícios encobrem os lados ruins
 */
