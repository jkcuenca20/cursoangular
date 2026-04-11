import  { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { TopMenuComponent } from '../../components/top-menu/top-menu.component';

@Component({    
    selector: 'app-country-layout',
    imports: [RouterOutlet, FooterComponent, TopMenuComponent],
    templateUrl: './CountryLayout.component.html',
    styles: ``,
})
export class CountryLayoutComponent {}
