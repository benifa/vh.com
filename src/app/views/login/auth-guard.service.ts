import { AuthService } from './auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const isLoggedIn = this.authService.isAuthenticated();
        if (!isLoggedIn) {
            this.authService.logout();
        }
        return isLoggedIn;
    }
}
