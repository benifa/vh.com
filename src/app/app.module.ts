import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app.routes';
import {AppComponent} from './app.component';
import {AuthService} from './views/login/auth.service';
import {AuthGuard} from './views/login/auth-guard.service';
import {AppLoaderModule} from './services/app-loader/app-loader.module';
import {AppLoaderService} from './services/app-loader/app-loader.service';
import {RegisterMemberComponent} from './views/register-member/register-member.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatChipsModule, MatIconModule, MatInputModule, MatMenuModule} from '@angular/material';
import {DatePipe} from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatChipsModule,
    MatInputModule,
    AppLoaderModule,
    AppRoutingModule
  ],
  declarations: [AppComponent, RegisterMemberComponent],
  providers: [AuthService, AuthGuard, AppLoaderService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
