import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { Bicycle } from '../vehicles/bicycle';
import { Vehicle } from '../vehicles/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle('Fusca');
  const car2 = carFactory.getVehicle('Celta Preto');

  const bicycle = bicycleFactory.getVehicle('Honda');

  const vehicles = [car1, car2, bicycle];

  return vehicles[Math.floor(Math.random() * 2)];
}

console.log(randomCarAlgorithm());
