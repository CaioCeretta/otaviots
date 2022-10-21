import { ShoppingOrder } from './shopping-order/shopping-order';

const order = new ShoppingOrder();
order.approvePayment();
order.shipOrder();

const order2 = new ShoppingOrder();
order2.waitPayment();
order2.shipOrder();

const order3 = new ShoppingOrder();
order.rejectPayment(); // A partir daqui o pagamento não pode ser alterado
order.approvePayment();
