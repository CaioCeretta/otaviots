import { AbstractCustomer } from './customer';

export class EnterpriseCustomer implements AbstractCustomer {
  constructor(public name: string) {
    this.name += ' (Enterprise)';
  }
}
