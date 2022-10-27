import { Cigarette } from './cigarette';
import { AlcoholicDrink } from './alcoholic-drink';
import { Food } from './food';

export interface ITaxVisitorProtocol {
  calculateTaxesForFood(food: Food): number;
  calculateTaxesForCigarette(cigarette: Cigarette): number;
  calculateTaxesForAlcoholicDrink(alcoholicDrink: AlcoholicDrink): number;
}
