import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../components/shared/interfaces/character.interface';

const loadFromLocalStorage = (): Character[] => {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  /*characters = signal(<Character[]>[
    {id: 1, name: 'Goku', power: 9000},
    {id: 2, name: 'Vegeta', power: 8500},
  ]);*/

  characters = signal<Character[]>(loadFromLocalStorage());

  saveToLocalStorage= effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  addCharacter(character: Character) {
   // console.log('character:', character);
    
    this.characters.update(
        (list) => [...list, character]);
  }



}