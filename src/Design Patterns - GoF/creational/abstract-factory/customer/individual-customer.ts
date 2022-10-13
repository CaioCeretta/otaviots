import { AbstractCustomer } from './customer';

export class IndividualCustomer implements AbstractCustomer {
  constructor(public name: string) {
    this.name += ' (Individual)';
  }
}
