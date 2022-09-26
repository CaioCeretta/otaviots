// Tupla é para quando voce quiser fazer um array que ja tenha seus tipos e localizações determinados. O preferencial é que as tuplas sejam imutáveis

const clientData1: readonly [number, string] = [1, 'Caio'];
const clientData2: [number, string, string] = [2, 'Bruno', 'Garcia'];
const clientData3: [number, string, string?] = [3, 'Thiago', 'Marcelino'];

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
