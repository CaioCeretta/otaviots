import { Agent } from 'http';

//Record é apenas voce falar do tipo da chave do objeto
const object1: Record<string, string | number> = {
  name: 'Caio',
  surname: 'Ceretta',
  age: 26,
};

console.log(object1);

type PersonProtocol = {
  name?: string;
  surname?: string;
  age?: number;
};

const object2: PersonRequired = {
  name: 'Caio',
  surname: 'Ceretta',
  age: 26,
};

//Tipo required, transforma tudo que é opcional em não opcional
type PersonRequired = Required<PersonProtocol>;

//Partial, tudo que era requirido se tornou opcional
type PersonPartial = Partial<PersonRequired>;

//Read Only <- transforma tudo em read only

type PersonReadOnly = Readonly<PersonRequired>;

// Pick, ele permite que voce escolha o atributo do objeto que voce deseja utilizar
type PersonPick = Pick<PersonRequired, 'name' | 'surname'>;

console.log(object2);

//Extract e Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';
type TypeExclude = Exclude<ABC, CDE>; // Computa todos os tipos que estão em ABC e não estão em CDE
type TypeExtract = Extract<ABC, CDE>; // Tipos que estão em ABC e PODEM ser atribuidos aos tipos de CDE

//Um exemplo do extract, primeiro a maneira como seria feita sem o extract, com repetições

// type AccountMongo = {
//   _id: string;
//   name: string;
//   age: number;
// };

// type AccountApi = {
//   id: string;
//   name: string;
//   age: number;
// };

// const accountMongo: AccountMongo = {
//   _id: '4d8sa4d8sa41d5adas4d5a4d6a',
//   name: 'Jorge',
//   age: 30,
// };

// function mapAccount(accountMongo: AccountMongo): AccountApi {
//   const { _id, ...accountData } = accountMongo;
//   return { ...accountData, id: _id };
// }

// const accountApi = mapAccount(accountMongo);
// console.log('API: ');
// console.log(accountApi);

//Com o extract

type AccountMongo = {
  _id: string;
  name: string;
  age: number;
  surname: string;
};

//Dessa maneira está excluindo o _id do tipo
type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>>;

const accountMongo: AccountMongo = {
  _id: '4d8sa4d8sa41d5adas4d5a4d6a',
  name: 'Jorge',
  age: 30,
  surname: 'Ceretta',
};

//Module mode
export default 1;
