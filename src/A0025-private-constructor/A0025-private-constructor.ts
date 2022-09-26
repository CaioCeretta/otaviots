//Singleton - GoF que é criado somente uma instancia de determinada classe
//Factory Method - Metodo dentro da classe que cria um novo objeto

export class Database {
  private static database: Database;

  private constructor(
    private host: string,
    private user: string,
    private password: string,
  ) {}

  connect(): void {
    console.log(`Connected ${this.host} ${this.user} ${this.password}`);
  }

  static getDatabase(host: string, user: string, password: string): Database {
    if (Database.database) {
      console.log('Retornando instancia ja criada');
      return Database.database;
    }

    console.log('Criando nova instancia');
    Database.database = new Database(host, user, password);

    return Database.database;
  }
}

const db1 = Database.getDatabase('teste.com.br', 'jorge', '123');
db1.connect();
const db2 = Database.getDatabase('teste.com.br', 'jorge', '123');
db2.connect();
const db3 = Database.getDatabase('teste.com.br', 'jorgee', '123');
db2.connect();

console.log(db1 === db2);
