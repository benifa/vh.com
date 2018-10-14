import {Component, Input, OnInit} from '@angular/core';
import {Contribution} from '../../../../../models/contribution.model';

@Component({
  selector: 'app-contribution',
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {
  @Input() contribution: Contribution;
  date: string;

  constructor() { }

  ngOnInit() {
    this.date = this.contribution.date.replace(/"/g, '')
  }

}
