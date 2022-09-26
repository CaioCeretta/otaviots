// Generics é como se a gente adicionasse um parametro dentro do tipo. Não é um tipo concreto, pode trabalhar com coisas que não sabemos exatamente
// quais seram os tipos

const array = [1, 2, 3, 4, 5, 'a'];
//Nesse caso o typescript está inferindo o tipo, um tipo concreto, que é um array de numbers

const originalFilteredArray = array.filter((item) => item < 5);

console.log(originalFilteredArray);

// Meu próprio filter

type FilterCallBack<U> = (value: U, index?: number, array?: U[]) => boolean;

// O T (Pode ser qualquer letra que quisermos mas o mais comum é o T) é um tipo qualquer que será inferido no momento da chamada da função
// É possível informar um generic após o nome de um tipo, assim, quando formos tipar um parametro ou variável com esse tipo, nós podemos falar para ele o tipo que ele irá inferir dentro do escopo dele

export function myFilter<T>(array: T[], callbackFn: FilterCallBack<T>): T[] {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackFn(array[i])) {
      newArray.push(array[i]);
    }
  }

  return newArray;
}

const filteredArray = myFilter(array, (value) => value < 5);

console.log(filteredArray);
