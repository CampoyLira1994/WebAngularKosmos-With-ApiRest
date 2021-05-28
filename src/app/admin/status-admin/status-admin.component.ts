import { Component, OnInit } from '@angular/core';

import { StatusService } from './../../shared/services/status.service/status.service';

import { Status } from './../../shared/models/status.model';

@Component({
  selector: 'app-status-admin',
  templateUrl: './status-admin.component.html',
  styleUrls: ['./status-admin.component.css']
})
export class StatusAdminComponent implements OnInit {
  constructor(private services: StatusService) {}

  status: Status[];

  // to open input
  toOpenAddStatusBool = false;
  toOpenEditStatusBool = false;

  // Status add
  idStatus: number;
  nameStatus: string;

  // Status Edit && Delete
  EidStatus: number; // Delete ID
  EnameStatus: string;

  ngOnInit(): void {
    this.getStatus();
  }

  // tslint:disable-next-line: typedef
  getStatus() {
    this.services.getStatus().subscribe((data) => {
      this.status = data;
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, status_1 = this.status;
        i < this.status.length;
        i++
      ) {
        const empleado = status_1[i];
        this.status[i] = empleado;
      }
      this.idStatus = this.status.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addStatusAdmin() {
    this.services
      .createStatus({
        idStatus: this.idStatus,
        nameStatus: this.nameStatus,
      })
      .subscribe((data) => {
        this.getStatus();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editStatus() {
    this.services
      .editStatus({
        idStatus: this.EidStatus,
        nameStatus: this.EnameStatus,
      })
      .subscribe((data) => {
        this.getStatus();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  delteStatus(EidStatus) {
    this.services.deleteStatus(EidStatus).subscribe();
    this.getStatus();
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  toOpenEditStatus(status) {
    this.toOpenAddStatusBool = false;
    this.toOpenEditStatusBool = true;
    console.log(status);
    this.EidStatus = status.idStatus;
    this.EnameStatus = status.nameStatus;
  }

  // tslint:disable-next-line: typedef
  toOpenAddStatus() {
    this.toOpenEditStatusBool = false;
    this.toOpenAddStatusBool = true;
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.EidStatus = null;
    this.EnameStatus = '';
    this.idStatus = null;
    this.nameStatus = '';
  }
}
