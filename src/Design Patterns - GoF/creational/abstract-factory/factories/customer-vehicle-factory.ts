import { AbstractCustomer } from '../customer/customer';
import { AbstractVehicle } from '../vehicle/vehicle';

export interface CreateVehicleCustomer {
  createCustomer(customerName: string): AbstractCustomer;
  createVehicle(vehicleName: string): AbstractVehicle;
}
