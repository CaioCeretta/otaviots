type Vehicle = {
  brand: string;
  year: string;
};

type Carro = {
  marca: Vehicle['brand'];
  ano: Vehicle['year'];
  name: string;
};

const car: Carro = {
  marca: 'Ford',
  ano: '2020',
  name: 'Fusion',
};

console.log(car);
