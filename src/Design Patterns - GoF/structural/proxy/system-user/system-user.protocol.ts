export type SystemUserAddressProtocol = { street: string; number: number };

export interface ISystemUserProtocol {
  firstName: string;
  username: string;

  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}
