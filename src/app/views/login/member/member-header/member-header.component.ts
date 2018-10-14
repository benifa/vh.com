import {Component, Inject} from '@angular/core';
import {HeaderComponent} from '../../../home/header/header.component';
import {DOCUMENT} from '@angular/platform-browser';
import {WINDOW} from '../../../../helpers/window.helper';
import {Router} from '@angular/router';
import {AuthService} from '../../auth.service';

@Component({
  selector: 'app-member-header',
  templateUrl: './member-header.component.html',
  styleUrls: ['./member-header.component.css']
})
export class MemberHeaderComponent extends HeaderComponent {
  constructor(public authService: AuthService,
              @Inject(DOCUMENT)  document: Document,
              @Inject(WINDOW)  window: Window, router: Router
  ) {
    super(document, window, router)
  }

}
