import { AdminUser } from './admin-user';
import {
  ISystemUserProtocol,
  SystemUserAddressProtocol,
} from './system-user.protocol';

export class SystemUserProxy implements ISystemUserProtocol {
  private realUser: ISystemUserProtocol | null = null;
  private realUserAddresses: SystemUserAddressProtocol[] | null = null;

  constructor(public firstName: string, public username: string) {}

  private createUser(): ISystemUserProtocol {
    if (this.realUser === null) {
      this.realUser = new AdminUser(this.firstName, this.username);
    }

    return this.realUser;
  }

  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    this.realUser = this.createUser();

    if (this.realUserAddresses === null) {
      this.realUserAddresses = await this.realUser.getAddresses();
    }

    return this.realUserAddresses;
  }
}
