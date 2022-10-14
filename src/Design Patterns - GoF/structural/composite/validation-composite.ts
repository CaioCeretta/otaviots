//Component
export abstract class ValidationComponent {
  abstract validate(value: unknown): boolean;
}

//Leaves
export class ValidateEmailLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateStringLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    if (typeof value !== 'string') return false;
    return /\d+/.test(value);
  }
}

export class ValidateNumberLeaf extends ValidationComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

//Composite
export class ValidationComposite extends ValidationComponent {
  private readonly children: ValidationComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }

    return true;
  }

  add(...validations: ValidationComponent[]): void {
    validations.forEach((validation) => this.children.push(validation));
  }
}

const validateEmail = new ValidateEmailLeaf();
const validateNumber = new ValidateEmailLeaf();
const validateString = new ValidateStringLeaf();
const validationComposite = new ValidationComposite();
// validationComposite.add(validateEmail);
validationComposite.add(validateString);
// validationComposite.add(validateEmail);
// validationComposite.add(validateNumber);

console.log(validationComposite.validate('1'));
// validationComposite.add(validateEmail, validateNumber, validateString);
