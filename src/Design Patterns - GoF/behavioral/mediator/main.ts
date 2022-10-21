import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator1 = new Mediator();

const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Keyboard', price: 400.8 });
seller1.addProduct({ id: '2', name: 'Monitor', price: 1200 });

const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'SSD', price: 400 });
seller2.addProduct({ id: '4', name: 'Graphics Card', price: 400 });

mediator1.addSeller(seller1, seller2);

// const buyer = new Buyer(mediator1);
seller1.viewProducts();
seller1.buy('3');
seller1.buy('2');
seller1.viewProducts();
