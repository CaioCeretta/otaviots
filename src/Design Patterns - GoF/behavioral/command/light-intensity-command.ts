import { SmartHouseCommand } from './command';
import { SmartHouseLight } from './smart-house-light';

export class LighIntensityCommand implements SmartHouseCommand {
  constructor(private readonly light: SmartHouseLight) {}
  execute(): void {
    const intensity = this.light.increaseIntensity();
    console.log(
      `The light intensity of ${this.light.name} is now ${intensity}`,
    );
  }

  undo(): void {
    const intensity = this.light.decreaseIntensity();
    console.log(
      `The light intensity of ${this.light.name} is now ${intensity}`,
    );
  }
}
