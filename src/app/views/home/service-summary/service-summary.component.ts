import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ServiceDetailComponent } from '../service-detail/service-detail.component';
import { Service } from '../../../models/service';


@Component({
  selector: 'app-service-summary',
  templateUrl: './service-summary.component.html',
  styleUrls: ['./service-summary.component.css']
})
export class ServiceSummaryComponent implements OnInit {
  @Input() service: Service
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ServiceDetailComponent, {
      data: this.service
    });
}
}
