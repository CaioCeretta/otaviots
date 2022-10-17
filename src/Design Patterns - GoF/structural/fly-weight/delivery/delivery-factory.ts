import { DeliveryLocation } from './deliver-location';
import { IDeliveryFlyweight } from './delivery-flyweight';
import {
  DeliveryLocationData,
  DeliveryLocationDictionary,
} from './delivery-types';

export class DeliveryFactory {
  private locations: DeliveryLocationDictionary = {};

  private createId(data: DeliveryLocationData): string {
    console.log(Object.values(data));
    return Object.values(data)
      .map((item) => item.replace(/\s+/, '').toLowerCase())
      .join('_');
  }

  makeLocation(intrinsicState: DeliveryLocationData): IDeliveryFlyweight {
    const key = this.createId(intrinsicState);
    if (key in this.locations) return this.locations[key];
    this.locations[key] = new DeliveryLocation(intrinsicState);
    return this.locations[key];
  }

  getLocations(): DeliveryLocationDictionary {
    return this.locations;
  }
}
