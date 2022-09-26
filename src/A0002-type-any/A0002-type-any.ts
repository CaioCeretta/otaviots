/**  O tipo any é algo que a gente evita deixar os retornos como sendo desse tipo, nesse exemplo abaixo, como estamos colocando um parametro msg +
 * e retornando uma msg, não é possível o typescript inferir algum tipo, então você pode passar o que quiser, e efetuar qualquer operação que você queira
 * porém o ts não reclama e executa normalmente se voce informar que o tipo da variável é any */

function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2, 3]));
console.log(showMessage('Olá'));
console.log(showMessage(1));

// Devemos utilizar o any apenas em último caso
