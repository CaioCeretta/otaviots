/**
 * Intenção Oficial:
 *
 * Define uma dependência um para muitos entre objetos, de movo que, quando um objeto muda de estado, todos os seus
 * dependentes são automaticamentes notificados e atualizados
 *
 * Sobre o observer:
 *
 * . Implementado com dois tipos de objetos: objetos observáveis (observable) e observadores (observer)
 * . Objetos observáveis tem uma referência para todos os seus observadores. Isso torna possível adicionar, remover, e
 * notificar todos os observadores quando seu estado muda
 * . Objetos observadores devem ter meios de receber notificação de seus observáveis. Geralmente isso é feito apenas
 * com um método
 *
 * Aplicabilidade:
 *
 * . Quando você precisa notificar vários objetos sobre a mudança de estado de outros objetos
 *
 * Lado bom
 *
 * - Usa o SRP e o OCP
 * - FAcilita a comunicação entre objetos em tempo de execução
 *
 * Lado ruim
 *
 * - Pode ser complexo ou quase impossível manter a ordem que as notificações são enviadas.
 */
