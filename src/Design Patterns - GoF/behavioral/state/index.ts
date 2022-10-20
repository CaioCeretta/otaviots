/**
 * Intenção Oficial
 *
 * Permite que um objeto altere seu comportamento quando seu estado interno muda.
 * O objeto parecerá ter mudado de classe.
 *
 * Sobre o State:
 *
 * . Evita condicionais quando um objeto contexto muda de comportamento dependendo do seu estado
 * . Desacopla o estado de um objeto contexto e seus métodos em objetos de estado separado.
 * . Facilita a adição de novos estados sem a necessidade de alterar estados anteriores
 *
 * Aplicabiidade
 *
 * Use o State quando
 *
 * . O seu objeto pode se comprar de maneira diferente dependendo do seu estado atual
 * . Você uqer evitar o uso de condicionais que alteram o compotamento da classe de acordo com valores do seus campos
 *
 * Lado bom
 *
 * . Desacopla a lógica de um stado da classe de contexto
 * . Permite a criação de novos estados apenas adicionando novas classes
 * . Elimina condicionais complexas da classe de contexto
 *
 * Lado ruim
 *
 * . Se você tem apenas poucas condicionais simples, aplicar esse padrão pode deixar seu código mais complexo do que o
 * necessário
 *
 *
 *
 *
 */
