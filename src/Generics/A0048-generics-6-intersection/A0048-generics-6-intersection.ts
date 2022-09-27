// function uniteObjects(obj1, obj2) {
//   // return { ...obj1, ...obj2 };
//   // Podemnos fazer assim, mas caso queiramos tipar os objetos
// }

//O costuma representar objeto e K a representar chave
function uniteObjects<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return { ...obj1, ...obj2 };
}

const obj1 = { key1: 'key1' };
const obj2 = { key2: 'key2' };
const objectsUnion = uniteObjects(obj1, obj2);

console.log(objectsUnion);
