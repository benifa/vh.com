import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {RegisterMemberComponent} from './views/register-member/register-member.component';

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
  },

  {path: 'register', component: RegisterMemberComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false, preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]

})

export class AppRoutingModule {
}
