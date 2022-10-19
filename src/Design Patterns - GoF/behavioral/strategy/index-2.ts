/**
 * Intenção oficial
 * Definir uma família de algoritmos, encapsular cada um deles e fazê-los intercambiáveis.
 * O Strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.
 *
 * Sobre o Strategy
 *
 * . Separa a regra de negócio de variações de algoritmos que possam existir
 * . Define uma família de algortimos, cada uma com uma variação diferente
 * . Usa composição para permitir a troca de algoritmos em termo de execução
 * . Permite a criação de vários algoritmos sem a cenecessidade de condicionais
 *
 * Aplicabilidade
 *
 * . Você tiver váriantes de um mesmo algoritmo e precisa trocar esses algoritmos em tempo de exec.
 * . Você precisa isolar a regra de negócio do algoritmo que deve ser aplicado (aplicando o SRP)
 * . Você perceber que está usando condicionais apenas para trocar o resultado final de um algoritmo
 *
 * Lados bons e lados ruins
 *
 * Bom
 *  . Troca a herança por composição
 *  . Separa a regra de negócio de algoritmos complexos
 *  . Aplica o OCP e o SRP
 *
 * Ruim
 *  . Pode ser complexo criar toda uma hierarquia de classes para aplicar novos algoritmos
 *  . Voce pode obter o mesmo resultado com funções caso a linguagem de programação permitir
 *  . O codigo cliente precisa conhecer as estratégias que vai usar
 *
 */
