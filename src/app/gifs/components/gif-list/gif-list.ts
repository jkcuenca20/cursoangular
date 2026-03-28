import { Component, input } from '@angular/core';
import { GifListItem } from '../gif-list-item/gif-list-item';

@Component({
  selector: 'app-gif-list',
  standalone: true,
  imports: [GifListItem],
  templateUrl: './gif-list.html',
  styles: ``,
})
export class GifList {
  imageUrlsHijo = input.required<string[]>();
}
