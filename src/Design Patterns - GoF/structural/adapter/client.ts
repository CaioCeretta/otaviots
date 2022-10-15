import { EmailValidatorAdapterClass } from './validation/email-validator-class-adapter';
import { emailValidatorFnAdapter } from './validation/email-validator-fn-adapter';
import {
  EmailValidatorFnProtocol,
  EmailValidatorProtocol,
} from './validation/email-validator-protocol';

/**
 * Supondo que futuramente nós queiramos trocar o método de validação de e-mail
 * Seria preciso trocar o isEmail em todos os locais do código em que ele foi usado
 * O adapter soluciona este problema para não depender diretamente da biblioteca
 */

const email = 'caioceretta@gmail.com';

function validateEmailClass(
  emailValidator: EmailValidatorProtocol,
  email: string,
): void {
  if (emailValidator.isEmail(email)) {
    console.log('Email is valid (Class)');
  } else {
    console.log('Email is unvalid (Class) ');
  }
}

function validateEmailFn(
  emailValidator: EmailValidatorFnProtocol,
  email: string,
) {
  if (emailValidator(email)) {
    console.log('E-mail is valid (Function)');
  } else {
    console.log('E-mail is unvalid (Function)');
  }
}

/* O nosso código não depende da classe de terceiro, nossa classe depende do validator interno que depende da biblioteca de terceiros, caso algum dia precise trocar, será alterado apenas o adaptador*/

validateEmailFn(emailValidatorFnAdapter, email);
validateEmailClass(new EmailValidatorAdapterClass(), email);
