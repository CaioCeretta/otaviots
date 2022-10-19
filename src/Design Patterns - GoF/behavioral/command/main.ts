import { LighIntensityCommand } from './light-intensity-command';
import { LightPowerCommand } from './light-power-command';
import { SmartHouseApp } from './smart-house-app';
import { SmartHouseLight } from './smart-house-light';

//Receiver
const bedroomLight = new SmartHouseLight('Bedroom Light');
const bathroomLight = new SmartHouseLight('Bathroom Light');

//Command
const lightPowerCommandBedroom = new LightPowerCommand(bedroomLight);
const lightPowerCommandBathroom = new LightPowerCommand(bathroomLight);
const bedroomIntensityCommand = new LighIntensityCommand(bedroomLight);

// Controle - Invoker
const smartHouseApp = new SmartHouseApp();
smartHouseApp.addCommand('btn-1', lightPowerCommandBedroom);
smartHouseApp.addCommand('btn-2', lightPowerCommandBathroom);
smartHouseApp.addCommand('btn-3', bedroomIntensityCommand);
smartHouseApp.addCommand('btn-4', bedroomIntensityCommand);

smartHouseApp.executeCommand('btn-1');
smartHouseApp.undoCommand('btn-1');
smartHouseApp.executeCommand('btn-2');
smartHouseApp.undoCommand('btn-2');
// lightPowerCommand.execute();
// lightPowerCommand.undo();
for (let i = 0; i < 200; i++) {
  smartHouseApp.executeCommand('btn-3');
}

for (let i = 0; i < 200; i++) {
  smartHouseApp.undoCommand('btn-3');
}
