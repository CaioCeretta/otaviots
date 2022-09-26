import isEmail from 'validator/lib/isEmail';

const SHOW_ERROR_MESSAGE = 'show-error-message';


const form = document.querySelector('.form') as HTMLFormElement;

const username = document.querySelector(".username") as HTMLInputElement
const email = document.querySelector(".email") as HTMLInputElement
const password = document.querySelector(".password") as HTMLInputElement
const password2 = document.querySelector(".password2") as HTMLInputElement;



form.addEventListener('submit', function (e) {
  e.preventDefault();
  hideErrorMessage(this);
  checkForEmptyFields(username, email, password, password2);
  checkEmail(email);
  checkPasswords(password, password2);
  if(shouldSendForm(this)) console.log('FORM SENT');
})

function checkEmail(input: HTMLInputElement): void {
  if(!isEmail(input.value)) showErrorMessage(input, 'Email inválido');
}

function checkPasswords(p1: HTMLInputElement, p2: HTMLInputElement) {
  if(p1.value !== p2.value) {
    showErrorMessage(p1, 'Passwords doesn\'t match')
  }
}

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach(input => {
    if (!input.value) showErrorMessage(input, "This field cannot be empty");
  })
}

function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGE)
    .forEach(item => item.classList.remove(SHOW_ERROR_MESSAGE));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector('.error-message') as HTMLSpanElement
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGE);
}

function shouldSendForm(form: HTMLFormElement) : boolean {
  let send = true;

  form.querySelectorAll('.' + SHOW_ERROR_MESSAGE).forEach(el => {
    send = false;
  })

  return send;
}

showErrorMessage(username, 'MENSAGEM');
hideErrorMessage(form);

