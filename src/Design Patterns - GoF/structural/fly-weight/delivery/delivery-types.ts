import { DeliveryLocation } from './deliver-location';

export type DeliveryLocationData = {
  readonly street: string;
  readonly city: string;
};

export type DeliveryLocationDictionary = { [k: string]: DeliveryLocation };
