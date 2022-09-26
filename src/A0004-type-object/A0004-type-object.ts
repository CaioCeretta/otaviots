const objetoA = {
  chaveA: 'A',
  chaveB: 'B',
};

objetoA.chaveA = 'Chave Qualquer';

// A partir do momento que o ts inferiu o tipo do objetoA, você não consegue fazer isso, porque ele ja determinou e "sabe" como é o objeto
// objetoA.chaveC = 'Nova chave';

/**Também podemos criar um objeto desta maneira, que é tipando o objeto, e caso queira permitir uma chave nova seria colocar a chaveC como opcional
 * caso nao saiba qual sera o valor da chave pode se usar uma coisa chamada index signature, avisando que o tipo da chave e o tipo do valor
 * dessa maneira como do objeto B, você cria um objeto aberto que DEVEM existir, e caso precise de mais chaves, uma das opções é usar o index signature
 */

const objetoB: {
  chaveA: string;
  chaveB: string;
  chaveC?: string;
  [key: string]: unknown;
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoB.chaveC = 'Valor C';
objetoB.chaveD = 'Valor D';
