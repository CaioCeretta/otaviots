type Idade = number;

type Person = {
  name: string;
  age: Idade;
  surname: string;
  preferredColor?: PreferredColor;
};

type RGBColor = 'Red' | 'Green' | 'Blue';
type CMYKColor = 'Cyan' | 'Magent' | 'Yellow' | 'Black';
type PreferredColor = RGBColor | CMYKColor;

const person: Person = {
  age: 26,
  name: 'Caio',
  surname: 'Ceretta',
  // preferredColor: 'Black', // Podendo estar vazio porque é opcional,
};

export function setPreferredColor(
  person: Person,
  color: PreferredColor,
): Person {
  return { ...person, preferredColor: color };
}

console.log(setPreferredColor(person, 'Black'));
