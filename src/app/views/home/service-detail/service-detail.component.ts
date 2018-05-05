import { Component, OnInit, Inject, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Service } from '../../../models/service';

@Component({
  selector: 'app-service-detail',
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.css']
})
export class ServiceDetailComponent implements OnInit {
  @Input() service: Service

  constructor(public dialogRef: MatDialogRef<ServiceDetailComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
   this.service = data
  }

  ngOnInit() {
  }

}
