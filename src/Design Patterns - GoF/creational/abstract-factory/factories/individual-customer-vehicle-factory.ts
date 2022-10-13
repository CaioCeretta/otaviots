import { AbstractCustomer } from '../customer/customer';
import { IndividualCustomer } from '../customer/individual-customer';
import { IndividualVehicle } from '../vehicle/individual-vehicle';
import { AbstractVehicle } from '../vehicle/vehicle';

export class IndividualCreateVehicleCustomerFactory {
  createCustomer(customerName: string): AbstractCustomer {
    return new IndividualCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): AbstractVehicle {
    const customer = this.createCustomer(customerName);

    return new IndividualVehicle(vehicleName, customer);
  }
}
