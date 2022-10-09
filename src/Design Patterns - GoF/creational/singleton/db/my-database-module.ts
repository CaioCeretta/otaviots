import { User } from '../interfaces/user';

const users: User[] = [];

export const MyDatabaseFunction = (function () {
  const users: User[] = [];
  return {
    add(user: User): void {
      users.push(user);
    },

    remove(index: number): void {
      users.splice(index, 1);
    },

    show(): void {
      for (const user of users) {
        console.log(user);
      }
    },
  };
})();

// Esse é um exemplo de ao invés de criar a classe do singleton, sim utilizando uma IIFE (Immediately Invoked Function Expression)
// Podemos escolher tanto a classe, quanto módulos, quanto esta maneira, ambas funcionam de maneira igual
