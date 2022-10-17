/* Objetivo do facade nesse projeto será pegar o código criado no builder, e reduzir as chamadas de códigos por parte do código do cliente */

import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';
import { VeganDishBuilder } from '../../creational/builder/classes/vegan-dish-builder';

export class BuilderFacade {
  //Essa é a fachada para a pasta src/creational/builder/index.ts
  private mainDishBuilder = new MainDishBuilder();
  private veganDishBuilder = new VeganDishBuilder();

  makeMeal1(): void {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
    console.log(this.mainDishBuilder.getPrice());
  }

  makeMeal2(): void {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
    console.log(this.mainDishBuilder.getPrice());
  }
  makeMeal3(): void {
    this.mainDishBuilder.makeMeal();
    console.log(this.mainDishBuilder.getMeal());
    console.log(this.mainDishBuilder.getPrice());
    console.log(this.mainDishBuilder.getPrice());
  }
}
