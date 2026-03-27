export class Person {
    public name: string;
    public age: number;
    private address: string;
    

    constructor(name: string, address: string, age: number) {
        this.name = 'Jessica';
        this.address = 'Loja';
        this.age = 36;
        
    }   
}

const spiderman = new Person('Peter Parker', 'New York', 18);

console.log('Person: ', spiderman);