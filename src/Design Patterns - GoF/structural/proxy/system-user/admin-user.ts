import {
  ISystemUserProtocol,
  SystemUserAddressProtocol,
} from './system-user.protocol';

export class AdminUser implements ISystemUserProtocol {
  public firstName: string;
  public username: string;

  constructor(firstName: string, username: string) {
    this.firstName = firstName;
    this.username = username;
  }
  async getAddresses(): Promise<SystemUserAddressProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av Brasil', number: 50 },
          { street: 'Lá', number: 40 },
        ]);
      }, 2000);
    });
  }
}
