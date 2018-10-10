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

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppLoaderModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  providers: [AuthService, AuthGuard, AppLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
