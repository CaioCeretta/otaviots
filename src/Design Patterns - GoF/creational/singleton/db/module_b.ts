import { MyDatabaseFunction } from './my-database-module';
// import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Robert', age: 26 });
myDatabaseClassic.add({ name: 'Joana', age: 31 });
myDatabaseClassic.add({ name: 'Luisa', age: 31 });
myDatabaseClassic.show();

//Tudo que está no modulo A veio para o módulo B, só tem um ponto de acesso na aplicação
