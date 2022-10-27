import { Cigarette } from './cigarette';
import { BrazilTaxVisitor } from './brazil-tax-visitor';
import { USTaxVisitor } from './us-tax-visitor';
import { AlcoholicDrink } from './alcoholic-drink';
import { Food } from './food';

const food = new Food(10);
const cigarette = new Cigarette(5);
const beer = new AlcoholicDrink(6);

const brazilTaxVisitor = new BrazilTaxVisitor();
const usTaxVisitor = new USTaxVisitor();

const cart = [food, cigarette, beer];
const total = cart.reduce((acc, item) => item.getPrice() + acc, 0);
const totalWithBrazilTaxes = cart.reduce(
  (acc, item) => item.getPriceWithTaxes(brazilTaxVisitor) + acc,
  0,
);
const totalWithUSTaxes = cart.reduce(
  (acc, item) => item.getPriceWithTaxes(usTaxVisitor) + acc,
  0,
);

console.log(total);
console.log(totalWithBrazilTaxes);
console.log(totalWithUSTaxes);
