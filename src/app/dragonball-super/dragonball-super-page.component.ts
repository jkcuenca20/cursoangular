import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Character } from '../components/shared/interfaces/character.interface';
import { CharacterList } from "../components/shared/character-list/character-list";
import { CharacterAdd } from "../components/shared/character-add/character-add";
import { DragonballService } from '../services/dragonball.service';

@Component({
  selector: 'app-dragonball-super',
  imports: [CommonModule, CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.component.html',
})
export class DragonballSuperComponent {

    //pasar logica a dragonball.service

    /*name = signal('Gohan');
    power = signal(7000);

    characters = signal <Character[]>([
        { id: 1, name: 'Goku ', power: 9000 },
        { id: 2, name: 'Vegeta ', power: 8500 },
        { id: 3, name: 'Piccolo ', power: 6000 },
        { id: 4, name: 'Trunks ', power: 400 }
    ]);

    addCharacter(data: { name: string; power: number }) {
        const newCharacter: Character = {
            id: this.characters().length + 1,
            name: data.name,
            power: data.power
        };
        this.characters.update(
          (list) => [...list, newCharacter]
        );
        
    }*/

    /*constructor(
       public dragonballService: DragonballService
     ){
       dragonballService.characters
     }*/
    public dragonballService = inject(DragonballService);
}
