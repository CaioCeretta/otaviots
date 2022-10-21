import { ShoppingOrder } from './shopping-order';
import { IShoppingOrderState } from './shopping-order-state';

export class RejectedOrder implements IShoppingOrderState {
  private name = 'Rejected';

  constructor(private order: ShoppingOrder) {}

  getName(): string {
    return this.name;
  }
  approvePayment(): void {
    console.log('The order payment was already rejected');
  }

  rejectPayment(): void {
    console.log('The order payment was already rejected');
  }

  waitPayment(): void {
    console.log('The order payment was already rejected');
  }

  shipOrder(): void {
    console.log('The order payment was already rejected');
  }
}
