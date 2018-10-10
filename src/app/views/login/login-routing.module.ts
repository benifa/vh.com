import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login.component';
import {MemberComponent} from './member/member.component';
import {AuthGuard} from './auth-guard.service';

const routes: Routes = [ { path: '', component: LoginComponent},
  { path: ':member', component: MemberComponent,  canActivate: [AuthGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
