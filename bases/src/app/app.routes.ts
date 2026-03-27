
import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/counter/counter.component';
import { SecondComponent } from './pages/second/second.component';
import { DragonballComponent } from './dragonball/dragonball-page.component';
import { DragonballSuperComponent } from './dragonball-super/dragonball-super-page.component';

export const routes: Routes = [

{
    path: '',
    component: CounterPageComponent
},
{
    path: 'second',
    component: SecondComponent
},
{
    path: 'dragonball',
    component: DragonballComponent
},

{
    path: 'dragonball-super',
    component: DragonballSuperComponent
},
{
    path: '**',
    redirectTo: ''
}

];
