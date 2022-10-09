import { User } from '../interfaces/user';

export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;

  private users: User[] = [];

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }

    return MyDatabaseClassic._instance;
  }

  add(user: User): void {
    this.users.push(user);
  }

  remove(index: number): void {
    this.users.splice(index, 1);
  }

  show(): void {
    for (const user of this.users) {
      console.log(user);
    }
  }
}

const db1 = MyDatabaseClassic.instance;
const db2 = MyDatabaseClassic.instance;

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'Caio', age: 26 });
myDatabaseClassic.add({ name: 'Bruno', age: 31 });
myDatabaseClassic.add({ name: 'Thiago', age: 31 });
// myDatabaseClassic.show();

// console.log(db1 === db2);
