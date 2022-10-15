import isEmail from 'validator/lib/isEmail';
import { EmailValidatorProtocol } from './email-validator-protocol';

export class EmailValidatorAdapterClass implements EmailValidatorProtocol {
  isEmail(value: string): boolean {
    return isEmail(value);
  }
}

/* Porém essa maneira acima poderia ser um pouco estranha pois uma classe para apenas uma função é muito estranho*/
