import { MyDatabaseFunction } from './my-database-module';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Alex', age: 26 });
myDatabaseClassic.add({ name: 'Jorge', age: 31 });
myDatabaseClassic.add({ name: 'André', age: 31 });
// myDatabaseClassic.show();

export { myDatabaseClassic };
