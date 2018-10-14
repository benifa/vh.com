import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {LoginComponent} from './member-login/login.component';
import {MemberComponent} from './member/member.component';
import {WINDOW_PROVIDERS} from '../../helpers/window.helper';
import {MemberHeaderComponent} from './member/member-header/member-header.component';
import { ContributionsComponent } from './member/contributions/contributions.component';
import { ContributionComponent } from './member/contributions/contribution/contribution.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    LoginRoutingModule,
    MatIconModule,
    MatCardModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
  ],
  declarations: [LoginComponent, MemberComponent, MemberHeaderComponent, ContributionsComponent, ContributionComponent],
  providers: [WINDOW_PROVIDERS]
})
export class LoginModule {
}
