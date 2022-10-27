import { Cigarette } from './cigarette';
import { AlcoholicDrink } from './alcoholic-drink';
import { Food } from './food';
import { ITaxVisitorProtocol } from './tax-visitor-protocol';

export class USTaxVisitor implements ITaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number {
    return food.getPrice() + food.getPrice() * 0.01;
  }
  calculateTaxesForCigarette(cigarette: Cigarette): number {
    return cigarette.getPrice() + cigarette.getPrice() * 1;
  }
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number {
    return alcoholicDrink.getPrice() + alcoholicDrink.getPrice() * 0.1;
  }
}
