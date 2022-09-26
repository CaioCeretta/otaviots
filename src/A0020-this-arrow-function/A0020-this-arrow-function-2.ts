//Essa foi uma maneira para tipar o this

export function func (this: Date, argument1: string, age: number): void {
  console.log(this);
  console.log(argument1);
  console.log(age);
}

func.call(new Date(), 'blablabla', 20);


