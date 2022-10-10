import { CompositeMealProtocol } from '../interfaces/composite-meal-protocol';

export abstract class AbstractMeal implements CompositeMealProtocol {
  constructor(private _name: string, private _price: number) {}

  get price(): number {
    return this._price;
  }

  getPrice(): number {
    return this.price;
  }
}
