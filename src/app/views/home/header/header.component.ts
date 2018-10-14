import {Component, HostBinding, HostListener, Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {WINDOW} from '../../../helpers/window.helper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isFixed;
  @HostBinding('class.menu-opened') menuOpened = false;

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(WINDOW) private window: Window, private router: Router) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    this.isFixed = offset > 10;
  }

  toggleMenu() {
    this.menuOpened = !this.menuOpened
  }

  loadLoginScreen() {
    this.router.navigate(['/login']);
  }

}
