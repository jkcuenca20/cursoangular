import { Component } from '@angular/core';
@Component({
  /*
  template:` 
  <h1>Counter:{{counter}} </h1>
  <button (click)="increase(1)">+1</button>
  <button (click)="decrease(1)">-1</button>
  <button (click)="resetcounter()">0</button>
`
*/
//cambiar el template del html 
    
    templateUrl: './counter.component.html',
    styles: `
    button {
    padding: 5px;
    margin: 5px 10px;
    } `
})

export class CounterPageComponent {
 counter = 15;

 //funcion
    increase (value: number) {
    this.counter += value;
    }
// decrease
    decrease (value: number) {
        this.counter -= value;
    }
//reset
    resetcounter() {
        this.counter = 0;
    }   

}