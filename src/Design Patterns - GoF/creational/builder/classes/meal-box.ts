import { CompositeMealProtocol } from '../interfaces/composite-meal-protocol';

export class MealBox implements CompositeMealProtocol {
  private readonly _children: CompositeMealProtocol[] = [];

  getPrice(): number {
    return this._children.reduce((sum, meal) => sum + meal.getPrice(), 0);
  }

  add(...meal: CompositeMealProtocol[]): void {
    meal.forEach((item) => {
      return this._children.push(item);
    });
  }
}
