import { ApprovedOrder } from './order-approved';
import { RejectedOrder } from './order-rejected';
import { ShoppingOrder } from './shopping-order';
import { IShoppingOrderState } from './shopping-order-state';

export class PendingOrder implements IShoppingOrderState {
  private name = 'Pending';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }

  approvePayment(): void {
    this.order.setState(new ApprovedOrder(this.order));
  }

  rejectPayment(): void {
    this.order.setState(new RejectedOrder(this.order));
  }

  waitPayment(): void {
    console.log('The order payment is already pending');
  }

  shipOrder(): void {
    console.log("Can't ship the order when the payment is still pending");
  }
}
