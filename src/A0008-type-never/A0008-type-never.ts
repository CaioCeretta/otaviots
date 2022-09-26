/**
 * Uma função que NUNCA irá retornar algo, por exemplo:
 * geralmente ou ela trava a aplicação ou ela gera um erro
 * */

function createError(): never {
  throw new Error('Any error');
}

createError();
