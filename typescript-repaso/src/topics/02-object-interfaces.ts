
let skills: string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
  name: string;
  hp: number;
  skills: string[];
  hometown?: string; // Propiedad opcional
}

const character: Character = {
  name: 'SuperGirl',
  hp: 100,
  skills: ['Bash', 'Counter'],
};

character.hometown = 'Loja';
console.table(character);
export {};