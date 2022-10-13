import { EnterpriselCreateVehicleCustomerFactory } from './factories/enterprise-customer-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriselCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const vehicle1 = enterpriseFactory.createVehicle('Fusca', 'Lomar');
const vehicle2 = individualFactory.createVehicle('Ferrari', 'Bruno');

vehicle1.pickUp();
vehicle2.pickUp();
