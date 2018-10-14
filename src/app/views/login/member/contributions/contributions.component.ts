import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../auth.service';
import {itemStateTrigger} from '../../../animations';

@Component({
  selector: 'app-contributions',
  templateUrl: './contributions.component.html',
  styleUrls: ['./contributions.component.css'],
  animations: [
    itemStateTrigger
  ]
})
export class ContributionsComponent implements OnInit {
  constructor(public authService: AuthService) {
  }

  ngOnInit() {
  }

}
