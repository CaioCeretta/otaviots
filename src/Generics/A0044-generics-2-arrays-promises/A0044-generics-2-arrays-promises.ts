// const numbersArray: Array = [1, 2, 3, 4, 5, 6];
// No caso acima, se eu deixar desse jeito, o typescript irá reclamar dizendo que o tipo array é um generico e precisa de um tipo

async function promiseAsync() {
  return 1;
}

//Nesse caso abaixo, como o valor resolvido está dentro de um setTImeOut e dentro de uma promise, o retorno ainda está como unknown, precisando ser tipado
function myPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseAsync().then((result) => console.log(result + 1));
myPromise().then((result) => console.log(result + 1));
