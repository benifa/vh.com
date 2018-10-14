import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';
import {AuthService} from '../login/auth.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {
  public hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);
  firstname = new FormControl('', [Validators.required]);
  lastname = new FormControl('', [Validators.required]);
  account = new FormControl('', [Validators.required]);
  phone = new FormControl('', [Validators.required]);
  newPassword = new FormControl('', [Validators.required]);
  passwordConfirm = new FormControl('', [Validators.required, ]);

  constructor(private authService: AuthService, private datePipe: DatePipe) {}

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }


  ngOnInit() {
  }

  onRegister(f: NgForm) {
    const today = this.datePipe.transform(new Date(), 'dd-MM-yyyy');
    this.authService.register(this.firstname.value, this.lastname.value,
      this.phone.value, this.account.value, this.email.value, this.newPassword.value, today)

  }

  getPasswordErrorMessage() {
    if (this.passwordConfirm.value.length === 0) {
      return 'Invalid password'
    } else if (this.passwordConfirm.value !== this.newPassword.value) {
      return 'Passwords have to match'
    }
    return 'Invalid password'
  }
}
