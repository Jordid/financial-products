import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
