const body = document.querySelector('body');

// Como o typescript não tem certeza da existência da tag body ele vai dar um aviso que essa tag é possivelmente nula
// body?.style.background = 'red';

//Para contornar isso:
if (body) body.style.background = 'red';

//Non-null assertion (!) desta maneira o typescript informa que nas regras padrão, que ele não permite a non-null assertion
const body2 = document.querySelector('body')!;
body2.style.background = 'red';

//Type Assertion
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'blue';
