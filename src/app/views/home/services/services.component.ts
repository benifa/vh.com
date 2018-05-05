import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../../models/service';


@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
   services = [new Service('Business Application',
   'Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.', 'dashboard' ),
   new Service('Custom System Integration',
   'Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.', 'perm_data_setting' ),
   new Service('Database Administration',
   'Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.', 'storage' ),
   new Service('Custom Mobile Application',
   'Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.', 'stay_primary_portrait' )
   ]

  @Input('backgroundGray') public backgroundGray;
  constructor() { }

  ngOnInit() {
  }


}
