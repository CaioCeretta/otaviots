import { PendingOrder } from './order-pending';
import { RejectedOrder } from './order-rejected';
import { ShoppingOrder } from './shopping-order';
import { IShoppingOrderState } from './shopping-order-state';

export class ApprovedOrder implements IShoppingOrderState {
  private name = 'Approved';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('The order payment is already approved');
  }

  rejectPayment(): void {
    this.order.setState(new RejectedOrder(this.order));
  }

  waitPayment(): void {
    this.order.setState(new PendingOrder(this.order));
  }

  shipOrder(): void {
    console.log('Sending the order to the customer');
  }
}
