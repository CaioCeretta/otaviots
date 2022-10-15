/**
 * Semelhante ao que acontece na vida real de quando uma tomada não encaixa na tomada e precisamos de um adaptador para conectar
 *
 * Ele tem a intenção de converter a interface de uma classe em outra interface esperada pelos clientes.
 * Ele permite que certas classes trabalhem em conjunto, pos de outra forma seria impossível por causa das interfaces incompatíveis
 * Muito usado para definir limites dentro de camadas da aplicação.
 * Usado para adaptar interfaces de codigo legado para um novo código
 *
 * Use o padrão Adapter quando:
 *
 * - Você não quiser que seu código dependa diretamente do código de terceiros ou legado
 * - Voce quiser usar uma classe existente mas sua interface for incompatível com a interface que seu código ou domínio precisam
 * - Voce quisar reutilizar várias subclasses que não possuam determinada funcionalidade mas for impraticável estender o código
 * de cada uma apenas para adicionar a funcionalidade desejada (Decorator também faz isso)
 *
 * Lado bom
 *
 * . Desacopla o código da aplicação de códigos de terceiros
 * . Aplica o SRP ao separar a conversão de interfaces da lógica da aplicação
 * . Aplica o OCP ao permitir introduzir novos adapters para o código existente
 *
 * Lado ruim
 *
 * . Aumenta a complexidade do código
 *
 */
