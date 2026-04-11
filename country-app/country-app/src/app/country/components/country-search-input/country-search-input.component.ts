import { Component, output } from '@angular/core';

@Component({
  selector: 'app-country-search-input',
  imports: [],
  templateUrl: './country-search-input.component.html',
  styles: ``,
})
export class CountrySearchInputComponent {
  search = output<string>();

  onSearch(query: string) {
    const value = query.trim();
    if (!value) return;

    this.search.emit(value);
  }
}
