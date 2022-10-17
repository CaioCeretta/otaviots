import { SystemUserProxy } from './system-user/system-user-proxy';

async function clientClode(): Promise<void> {
  const user = new SystemUserProxy('Caio', 'caceretta');
  console.log('Isso vai levar dois segundos');
  console.log(await user.getAddresses());
  console.log('Isso vai se repetir');

  for (let i = 0; i < 5; i++) {
    console.log(await user.getAddresses());
  }
}

clientClode();
