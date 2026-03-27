import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideMenuComponent } from '../side-menu/side-menu.component';
@Component({
  selector: 'app-dashboard-page.component',
  standalone: true,
  imports: [RouterOutlet, SideMenuComponent],
  templateUrl: './dashboard-page.component.html',
  styleUrls: [],
})
export default class DashboardPageComponent {}
