
function addNumbers(a: number, b: number) {
  return a + b;
}

const result = addNumbers(8, 2);

console.log(result);

const addNumbersArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

const result2: string = addNumbersArrow(1, 2);

console.log({result,result2});


interface   Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = (character: Character, amount: number): void => {
    character.hp += amount;
}

const batman: Character = {
    name: 'Batman',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
};

healCharacter(batman, 20);
batman.showHp();




export {};