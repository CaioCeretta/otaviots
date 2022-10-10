// import { MealBox } from './classes/meal-box';
// import { Beans, Beverage, Meat, Rice } from './classes/meals';

import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

// const rice = new Rice('Arroz', 5);
// const beans = new Beans('Feijão', 10);
// const beverage = new Beverage('Cerveja', 7);
// const meat = new Meat('Carne', 50);

// const mealBox = new MealBox();
// mealBox.add(rice, beans, meat);

// console.log(mealBox);

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal();
console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

mainDishBuilder.reset();

const meal2 = mainDishBuilder.makeBeverage().getMeal();
console.log(meal2);

const veganDishBuilder = new VeganDishBuilder();
const veganMeal = veganDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
