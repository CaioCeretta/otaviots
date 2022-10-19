/**
 * Intenção Oficial
 * Encapsular uma solicitação como um objeto, desta forma, permitindo que você parametrize clientes com diferentes soli-
 * citações, enfileire ou registre (log) solicitações e suporte operações que possam ser desfeitas.
 *
 * Sobre o command
 *
 * . Transforma uma solicitação (um comando) em um objeto com toda informação necessária para sua execução
 * . È a versão orientada a objetos para funções callback
 * . Permite que comandos possam ser enfileirados, armazenados ou desfeitos
 * . Permite registro de alterações para que possam ser replicados quando não necessário
 * . Permite que você crie objetos compostos
 * . Desacopla o código do objeto que faz a solicitação com o objeto que recebe a solicitação
 * . Usa composição ao invés de herança
 *
 * Aplicabilidade
 *
 * . Você quer desacoplar o objeto que envia asolicitação do objeto que a receberá
 * . Você equer tratar um comando como um objeto (com a possibilidade de armazenar, agenddar, enfileirar, fazer log,
 * agendar execuções, ou fazer qualquer coisa que pode ser feita com um objeto)
 * . Você quer permitir que solicitações possam ser feitas e desfeitas
 *
 * Lados bons e lados ruins
 *
 * Bom
 * . Você pode criar comandos simples e complexos (ou até compostos de outros comandos)
 * . Você pode implementar fazer e desfazer
 * . Comandos são objetos normais, portanto fazer tudo que objetos normais fazem
 * . Desacopla o objeto que envia do objeto que recebe a solicitação
 *
 * Ruim
 * . Muitas classes podem tornar o sistema mais complexo
 */
