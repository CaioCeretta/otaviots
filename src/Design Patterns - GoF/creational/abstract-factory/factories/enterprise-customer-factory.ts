import { AbstractCustomer } from '../customer/customer';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseVehicle } from '../vehicle/enterprise-vehicle';
import { IndividualVehicle } from '../vehicle/individual-vehicle';
import { AbstractVehicle } from '../vehicle/vehicle';

export class EnterpriselCreateVehicleCustomerFactory {
  createCustomer(customerName: string): AbstractCustomer {
    return new EnterpriseCustomer(customerName);
  }

  createVehicle(vehicleName: string, customerName: string): AbstractVehicle {
    const customer = this.createCustomer(customerName);

    return new EnterpriseVehicle(vehicleName, customer);
  }
}
