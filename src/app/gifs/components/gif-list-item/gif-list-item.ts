import { Component, input } from '@angular/core';

@Component({
  selector: 'app-gif-list-item',
  standalone: true,
  imports: [],
  templateUrl: './gif-list-item.html',
  styles: ``,
})
export class GifListItem {
  //imageurl llama a la propiedad imageUrl del componente padre GifList
  imageUrlNieto = input.required<string>();
}
