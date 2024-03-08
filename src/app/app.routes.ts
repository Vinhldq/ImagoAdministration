import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.routes').then((mod) => mod.LOGIN_ROUTES),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/layout/layout.routes').then((mod) => mod.LAYOUT_ROUTES),
  },
  {
    path: 'error/404',
    loadChildren: () =>
      import('./pages/error/error.routes').then((mod) => mod.ERROR_ROUTES),
  },
  {
    path: 'loading',
    loadChildren: () =>
      import('./pages/loading/loading.routes').then((mod) => mod.LOADING_ROUTES),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'error/404',
  },

];
