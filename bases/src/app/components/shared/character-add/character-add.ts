import { Component, output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-character-add',
  imports: [CommonModule],
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  name = signal('');
  power = signal(0);
  
  newCharacter = output<Character>();
  
  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 10000),
      name: this.name(),
      power: this.power()
    };

    this.newCharacter.emit(newCharacter);

    //console.log('Nuevo personaje:', newCharacter);

    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
