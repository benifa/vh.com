import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {AppLoaderComponent} from './services/app-loader/app-loader.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './views/home/home.module#HomeModule'
  },
  {
    path: 'login',
    loadChildren: './views/login/login.module#LoginModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]

})

export class AppRoutingModule {
}
