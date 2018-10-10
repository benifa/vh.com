import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {LoginComponent} from './login.component';
import { MemberComponent } from './member/member.component';
import {WINDOW_PROVIDERS} from '../../helpers/window.helper';

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
  declarations: [LoginComponent, MemberComponent],
  providers: [WINDOW_PROVIDERS]
})
export class LoginModule { }
