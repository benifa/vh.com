import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private  router: Router) { }

  ngOnInit() {
  }

  onLogIn(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;
    this.authService.loginUser(email, password);
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
