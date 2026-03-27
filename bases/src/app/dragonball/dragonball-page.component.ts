import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Character } from '../components/shared/interfaces/character.interface';
import { CharacterList } from "../components/shared/character-list/character-list";


/*interface Character {
  id: number;
  name: string;
  power: number;
}*/
@Component({
  selector: 'app-dragonball',
  imports: [CommonModule, CharacterList],
 templateUrl:'./dragonball-page.component.html',
})
export class DragonballComponent {

    name = signal('Gohan');
    power = signal(7000);

    characters = signal <Character[]>([
        { id: 1, name: 'Goku ', power: 9000 },
        { id: 2, name: 'Vegeta ', power: 8500 },
    //  { id: 3, name: 'Gohan ', power: 7000 },
        { id: 4, name: 'Piccolo ', power: 6000 },
        { id: 5, name: 'Trunks ', power: 400 }
    ]);

    addCharacter() {
      if (!this.name() || !this.power() || this.power() <= 0) return;

        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: this.name(),
            power: this.power()
        }
       // this.characters.push(newCharacter);
        this.characters.update(
          (list) => [...list, newCharacter]
        );

      //  console.log(this.name(), this.power());

        this.resetFields();
    }

resetFields() {
  this.name.set('');
  this.power.set(0);

}
}