// import { CarFactory } from './factories/car-factory';
// import { Car } from './vehicles/car';

import { CarFactory } from './factories/car-factory';
import { VehicleFactory } from './factories/vehicle-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algoritm';

// const carFactory = new CarFactory();

// const fusca = carFactory.getVehicle('Fusca');

// fusca.pickUp('Joana');
// fusca.stop();

// const celta = carFactory.getVehicle('Celta');

// celta.pickUp('Joana');
// celta.stop();

const carFactory = new CarFactory();
const customersNames = ['Caio', 'Thiago', 'Bruno', 'Alex', 'Regina'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name =
    customersNames[Math.floor(Math.random() * customersNames.length)];
  vehicle.pickUp(name);
  vehicle.stop();
  const newCar = carFactory.pickUp(
    name,
    `NOVO CARRO - ${Math.floor(Math.random() * 100)}`,
  );
  newCar.stop();
  console.log('---');
}
