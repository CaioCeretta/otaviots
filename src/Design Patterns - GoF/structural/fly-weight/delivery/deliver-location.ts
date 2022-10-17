import { IDeliveryFlyweight } from './delivery-flyweight';
import { DeliveryLocationData } from './delivery-types';

export class DeliveryLocation implements IDeliveryFlyweight {
  //Esse é um estado intrínseco e que não poderá ser alterado
  constructor(private readonly intrinsicState: DeliveryLocationData) {}

  deliver(name: string, houseNumber: number): void {
    console.log('Entrega para %s', name);
    console.log(
      'Em ',
      this.intrinsicState.street + ' -',
      this.intrinsicState.city,
    );
    console.log('Número: ', houseNumber);
    console.log('###');
  }
}
