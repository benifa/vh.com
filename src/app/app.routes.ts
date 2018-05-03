import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './views/home/home.module#HomeModule'
  }
];

