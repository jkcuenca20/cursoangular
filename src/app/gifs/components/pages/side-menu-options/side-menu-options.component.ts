import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuOptions {
  label: string; 
  route: string;
  sublabel: string;
  icon: string;
}


@Component({
  selector: 'gifs-side-menu-options',
  //standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.component.html',
})
export class SideMenuOptionsComponent {

  menuOptions: MenuOptions[] = [
    {
      label: 'Trending',
      route: '/dashboard/trending',
      sublabel: 'Gifs más populares',
      icon: 'fa-solid fa-chart-line',
    },
    {
      label: 'Search',
      route: '/dashboard/search',
      sublabel: 'Busca tus gifs favoritos',
      icon: 'fa-solid fa-magnifying-glass',
    },
  ];
}
