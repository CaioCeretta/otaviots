/**
 * Intenção Oficial
 * Sem violar o encapsulamento, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa
 * posteriormente ser restaurado para este estado
 *
 * Sobre mo memento
 *
 * . Praticamente todas as aplicações implementam com a função "desfazer" (CTRL + Z)
 * . Desacopla a responsabilidade da classe originadora de tomar conta dos backups
 * . Garante o encapsulamento e consistência nos backups
 *
 * Use o memento quando:
 *
 * . Você quer ter a possibilidade de rewstaurar o estado atual de um objeto sem viokar o encapsulamento
 * . Você deseja implementar a função "desfazer" no seu sistema
 * . Você deseja fazer backup de estrsdo de determinados classes no seu sistema
 *
 * Lado bom
 *
 * . Desacopla a responsabilidade de tomar conta do backup da classe original
 * . É fácil salvar e restaurar um backup de uma classe
 *
 * Lado ruim
 *
 * . Quanto mais backups, maior o consumo de memória da aplicação
 * . As classes zeladoras precisam acompanhar as mudanças nas classes originadoras
 * . Pode ser desafiador garantir o encapsulamento em algumas linguagens de programação.
 */
