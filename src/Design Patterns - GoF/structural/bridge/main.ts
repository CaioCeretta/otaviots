import { Radio } from './device/radio';
import { TV } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clientCode(abstraction: RemoteControl | RemoteControlWithVolume) {
  abstraction.togglePower(); // true
  //Type guard
  if (!('volumeUp' in abstraction)) return;

  abstraction.volumeUp();
  abstraction.volumeUp();
  abstraction.volumeUp();
}

const tv = new TV();
const radio = new Radio();

const tvRemoteControl = new RemoteControlWithVolume(tv);
const radioRemoteControl = new RemoteControlWithVolume(radio);

clientCode(radioRemoteControl);
