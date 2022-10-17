import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Jorge', 666, 'Rua XV', 'City X');
deliveryContext(factory, 'Marta', 666, 'Rua XV', 'City X');
deliveryContext(factory, 'Roberta', 502, 'Rua XV', 'City X');
deliveryContext(factory, 'Eliana', 505, 'Rua X', 'City W');
deliveryContext(factory, 'Jorge', 666, 'Rua XV', 'City X');
deliveryContext(factory, 'Marta', 666, 'Rua XV', 'City X');
deliveryContext(factory, 'Roberta', 502, 'Rua XV', 'City X');
deliveryContext(factory, 'Eliana', 505, 'Rua X', 'City W');
deliveryContext(factory, 'Jorge', 666, 'Rua XV', 'City X');
deliveryContext(factory, 'Marta', 666, 'Rua XV', 'City X');
deliveryContext(factory, 'Roberta', 502, 'Rua XV', 'City X');
deliveryContext(factory, 'Eliana', 505, 'Rua X', 'City W');

console.log(factory.getLocations());
