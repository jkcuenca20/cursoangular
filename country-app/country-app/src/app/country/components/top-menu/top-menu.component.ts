import  { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component(
    {
        selector: 'country-top-menu',
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './top-menu.component.html',
    styles: `
      .region-signs-icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cg fill='none'%3E%3Cpath fill='%234f4f4f' d='M42 8a2 2 0 1 0-4 0zm-4 4a2 2 0 1 0 4 0zm4 16a2 2 0 1 0-4 0zm-4 6.062a2 2 0 1 0 4 0zm4 16a2 2 0 0 0-4 0zM38 72a2 2 0 1 0 4 0zm0-64v4h4V8zm0 20v6.062h4V28zm0 22.062V72h4V50.062z'/%3E%3Cpath fill='%23219653' d='M16 13.5a1.5 1.5 0 0 1 1.5-1.5h45.672a2 2 0 0 1 1.414.586l6 6a2 2 0 0 1 0 2.828l-6 6a2 2 0 0 1-1.414.586H17.5a1.5 1.5 0 0 1-1.5-1.5zm48 22.062a1.5 1.5 0 0 0-1.5-1.5H16.828a2 2 0 0 0-1.414.585l-6 6a2 2 0 0 0 0 2.829l6 6a2 2 0 0 0 1.414.586H62.5a1.5 1.5 0 0 0 1.5-1.5z'/%3E%3C/g%3E%3C/svg%3E");
      }

      .capital-marker-icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'%3E%3Cg fill='none' stroke-linecap='round' stroke-linejoin='round' stroke-width='4'%3E%3Cpath fill='%23eb5757' stroke='%23eb5757' d='M30.43 16.567a22.22 22.22 0 0 1 31.225 15.077A22.28 22.28 0 0 1 57.68 50.13l-2.012 2.645a28 28 0 0 1-3.133 3.472L40.5 67.53a.73.73 0 0 1-1 0L27.465 56.248a28 28 0 0 1-3.133-3.472L22.32 50.13a22.28 22.28 0 0 1-3.975-18.487A22.24 22.24 0 0 1 30.43 16.567'/%3E%3Cpath fill='%23f2f2f2' stroke='%23f2f2f2' d='M35.769 25.739a9.85 9.85 0 0 1 8.462 0l.094.045a9.64 9.64 0 0 1 5.253 6.534a9.69 9.69 0 0 1-1.908 8.246a9.78 9.78 0 0 1-7.587 3.636h-.166a9.78 9.78 0 0 1-7.587-3.636a9.69 9.69 0 0 1-1.908-8.246a9.64 9.64 0 0 1 5.253-6.534z'/%3E%3Cpath stroke='%23f2994a' d='M16 68h48'/%3E%3C/g%3E%3C/svg%3E");
      }

      .map-pin-icon {
        display: inline-block;
        width: 24px;
        height: 24px;
        flex-shrink: 0;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cg fill='none'%3E%3Cpath fill='%2332bea6' d='M24 47.998c13.255 0 24-10.745 24-24C48 10.746 37.255 0 24 0S0 10.745 0 23.999s10.745 23.999 24 23.999'/%3E%3Cpath fill='%23fbe158' d='m11.782 32.725l-1.746 5.236h4.342l1.872-5.236z'/%3E%3Cpath fill='%23f99134' d='M19.99 22.253h-4.717l-2.91 8.727h4.511z'/%3E%3Cpath fill='%23f37a10' d='m19.344 29.235l-3.116 8.727h8.81c.821-3.491 2.75-6.546 4.8-8.727z'/%3E%3Cpath fill='%23facb1b' d='M31.719 27.489c.812-.641 1.593-1.126 2.282-1.414l-1.274-3.822H21.84l-1.872 5.236zM26.84 37.962h7.079l-4.517-5.415c-1.082 1.54-2.025 3.377-2.561 5.415'/%3E%3Cpath fill='%2321b2d1' d='M34.547 27.717c-1.416.652-3.04 2.218-4.05 3.412l5.695 6.833h1.772z'/%3E%3Cpath fill='%23fff' d='M34.547 27.716L34 26.076c-.69.287-1.47.772-2.282 1.413h-11.75l1.872-5.236h-1.85l-3.116 8.727h-4.512l-.58 1.745h4.468l-1.872 5.236h1.85l3.116-8.727h10.494c-2.05 2.182-3.98 5.236-4.8 8.727h1.803c.536-2.037 1.479-3.874 2.561-5.415l4.516 5.415h2.274l-5.695-6.833c1.009-1.193 2.633-2.76 4.05-3.412'/%3E%3Cpath fill='%23fbe158' d='m21.84 22.253l-1.872 5.236h6.803l5.236-5.236z'/%3E%3Cpath fill='%23f99134' d='m19.344 29.235l-3.116 8.727h.07l8.728-8.727z'/%3E%3Cpath fill='%23df2c2c' d='M24 10.035a5.237 5.237 0 0 1 5.236 5.236c0 2.892-5.236 13.09-5.236 13.09s-5.236-10.198-5.236-13.09A5.236 5.236 0 0 1 24 10.035'/%3E%3Cpath fill='%23fff' d='M24 17.453a2.182 2.182 0 1 0 0-4.363a2.182 2.182 0 0 0 0 4.363'/%3E%3C/g%3E%3C/svg%3E");
      }
    `,
    })
export class TopMenuComponent {}
