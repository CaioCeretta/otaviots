/** Void é quando não retorna nada
 * Um adendo, nesse caso, o parametro ...args, como estamos usando o rest operator, nesse caso sabemos que será um array, logo teremos que inferir o tipo do mesmo
 * caso contrário, será inferido o type any, o que não é recomendado */

function noReturn(...args: string[]): void {
  args.join(' ');
}

const person = {
  name: 'Jorge',
  surname: 'Norris',

  showName(): void {
    console.log(this.name + ' ' + this.surname);
  },
};

noReturn('Caio', 'Ceretta');
person.showName();

export { person };

// Nesse caso estamos exportando person porque essa constante ja foi declarada em outro arquivo, porém ao exportar essa variável o erro deixa de acontecer pois deixa de ser global e se torna um módulo
