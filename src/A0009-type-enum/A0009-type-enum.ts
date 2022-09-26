//Enum é uma estrutura de dados não ordenada quando queiramos colocar opções, esse é um Enum numérico, ele funciona tanto buscando pela chave quanto pelo valor, podendo trocar o valor implicito

enum Colors {
  RED = 10, // 0
  GREEN = 100, // 1
  BLUE = 200,
  ROXO = 'ROXO', // 2
}

console.log(Colors[10]);
console.log(Colors.RED);
console.log(Colors.ROXO);
console.log(Colors['ROXO']);

// Também é possível fazer o merge de dois enums, podendo criar o enum com o mesmo nome, e só irá unir os dois enums em um enum só

enum Colors {
  PINK = 'PINK',
  BROWN = 201,
  VIOLET,
}

console.log(Colors);

function pickAColor(color: Colors) {
  console.log(Colors[color]);
}
