import { AbstractCustomer } from '../customer/customer';
import { AbstractVehicle } from './vehicle';

export class IndividualVehicle implements AbstractVehicle {
  constructor(
    public name: string,
    private readonly customer: AbstractCustomer,
  ) {}

  pickUp(): void {
    console.log(
      `${this.name} está buscando ${this.customer.name} (Individual)`,
    );
  }
}
