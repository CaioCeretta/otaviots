import { DeviceImplementation } from '../device/device-implementation';

export class RemoteControl {
  constructor(protected readonly device: DeviceImplementation) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} status is now ${this.device.getPower()}`,
    );
  }
}
