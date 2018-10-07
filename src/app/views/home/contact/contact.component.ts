import { Component, OnInit, Input } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  @Input('backgroundGray') public backgroundGray;
  contactForm: FormGroup;
  name = new FormControl('', [Validators.required])
  email = new FormControl('', [Validators.email])
  subject = new FormControl('', [Validators.required])
  message = new FormControl('', Validators.required)
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message
    })
  }

}
