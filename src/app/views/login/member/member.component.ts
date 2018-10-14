import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }


  getGreeting() {
    const curHr = new Date().getHours()

    if (curHr < 12) {
      return 'Good morning'
    } else if (curHr < 18) {
      return 'Good afternoon'
    } else {
      return 'Good evening'
    }
  }


}
