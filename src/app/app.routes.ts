import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'dashboard',
        //crear bajo demanda, es decir, que se cargue el componente solo cuando se navegue a esa ruta 
        loadComponent: () =>
        import('./gifs/components/pages/dashboard-page.component/dashboard-page.component'),
    //para crear rutas hijas dentro del dashboard, es decir, para navegar a /dashboard/trending o /dashboard/search
    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/components/pages/trending-page.component/trending-page.component/trending-page.component'),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/components/pages/search-page.component/search-page.component/search-page.component'),
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
