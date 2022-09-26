// # Uma classe também é um tipo

export class Company {
  public readonly name: string;
  //Desta maneira não podemos reatribuir os valores da propriedade, se quisermos que não seja possível adicionar novos colaboradores o readonly deveria ser dessa maneira
  // private readonly collaboratos: readonly Collaborator[] = [];

  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  public showCollaborators(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }

  public getName(): string {
    return this.name;
  }
}

export class Collaborator {
  constructor(public readonly name: string, public readonly surname: string) {}
}

const collaborator1 = new Collaborator('Caio', 'Ceretta');
const collaborator2 = new Collaborator('Bruno', 'Garcia');
const collaborator3 = new Collaborator('Thiago', 'Marcelino');
const collaborator4 = new Collaborator('Alex', 'Soares');
const company1 = new Company('Udemy', '11.111.111/0001-11');
company1.addCollaborator(collaborator1);
company1.addCollaborator(collaborator2);
company1.addCollaborator(collaborator3);
company1.addCollaborator(collaborator4);

console.log(company1.showCollaborators());
