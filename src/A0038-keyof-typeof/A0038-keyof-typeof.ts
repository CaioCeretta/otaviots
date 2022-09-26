// type ColorsObj = {
//   red: string;
//   green: string;
//   blue: string;
// // };

// const colorsObj = {
//   red: 'vermelho',
//   green: 'verde',
//   blue: 'azul',
// };

// function translateColor(
//   color: 'red' | 'green' | 'blue',
//   colors: typeof colorsObj,
// ) {
//   return colors[color];
// }

// console.log(translateColor('red', colorsObj));

type ColorsObj = typeof colorsObj;
type ColorsKeys = keyof ColorsObj;

const colorsObj = {
  red: 'vermelho',
  green: 'verde',
  blue: 'azul',
  purple: 'roxo',
};

function translateColor(color: 'red' | 'green' | 'blue', colors: ColorsObj) {
  return colors[color];
}

console.log(translateColor('red', colorsObj));
