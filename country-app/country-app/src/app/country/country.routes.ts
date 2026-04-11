import { Routes } from "@angular/router";

import { CountryLayoutComponent } from "./layouts/CountryLayout/CountryLayout.component";
import  ByCapitalPageComponent from "./pages/by-capital-page/by-capital-page.component";
import { HomePageComponent } from "../shared/pages/home-page/home-page.component";
import { ByCountryPageComponent } from "./pages/by-country-page.component/by-country-page.component";
import { ByRegionPageComponent } from "./pages/by-region-page.component/by-region-page.component";

export const routes: Routes = [
    {  
        path: '',
        component: CountryLayoutComponent,
        children: [
            {
                path: '',
                component: HomePageComponent
            },
            {
                path: 'by-capital',
                component: ByCapitalPageComponent
            },
             {
                path: 'by-country',
                component: ByCountryPageComponent
            },
             {
                path: 'by-region',
                component: ByRegionPageComponent
            },
            {
                path: '**',
                redirectTo: 'by-capital',
            }
        ]
    },

]
