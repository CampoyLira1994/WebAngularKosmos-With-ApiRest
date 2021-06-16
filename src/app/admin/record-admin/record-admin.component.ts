import { Component, OnInit } from '@angular/core';

import { RecordsService } from '../../shared/services/records.service/records.service';
import { ExcelService } from './../../shared/services/excel.service/excel.service';

import { Records } from '../../shared/models/records.model';

@Component({
  selector: 'app-record-admin',
  templateUrl: './record-admin.component.html',
  styleUrls: ['./record-admin.component.css']
})
export class RecordAdminComponent implements OnInit {

  constructor(private service: RecordsService,
              private excelService: ExcelService) { }

  records: Records[];

  // to open input
  toOpenAddRecordBool = false;
  toOpenEditRecordBool = false;

  // Empoyee add
  idRecord: number;
  idStatus = 1;
  idUserType = 2;
  idEmployee: string;
  idService: number;
  record1: Date;

  // Record Edit && Delete
  EidRecord: number; // Delete ID
  EidEmployee: number;
  EidService: number;
  Erecord1: Date;



  ngOnInit(): void {
    // this.service.getUsersId(1).subscribe(data => {
    //   console.log(data);
    // });

    this.getRecords();
  }

  // tslint:disable-next-line: typedef
  getRecords() {
    this.service.getRecords().subscribe((data) => {
      this.records = data;
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, records_1 = this.records;
        i < this.records.length;
        i++
      ) {
        const empleado = records_1[i];
        this.records[i] = empleado;
      }
      this.idRecord = this.records.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addRecordAdmin() {
    this.service
      .createRecord({
        idRecord: this.idRecord,
        idEmployee: this.idEmployee,
        idService: this.idService,
        record1: this.record1,

      })
      .subscribe((data) => {
        this.getRecords();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editRecord() {
    this.service
      .editRecord({
        idRecord: this.EidRecord,
        idEmployee: this.EidEmployee,
        idService: this.EidService,
        record1: this.Erecord1,
      })
      .subscribe((data) => {
        this.getRecords();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  delteRecord(EidRecord) {
    this.service.deleteRecord(EidRecord).subscribe();
    this.getRecords();
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  toOpenAddRecord() {
    this.toOpenEditRecordBool = false;
    this.toOpenAddRecordBool = true;
  }

  // tslint:disable-next-line: typedef
  toOpenEditRecord(record) {
    this.toOpenAddRecordBool = false;
    this.toOpenEditRecordBool = true;
    console.log(record);
    this.EidRecord = record.idRecord;
    this.EidEmployee = record.idEmployee;
    this.Erecord1 = record.record1;
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.idRecord = 0;
    this.idStatus = 1;
    this.idUserType = 2;
    this.EidRecord = 0;
    this.EidEmployee = 1;
    this.Erecord1 = null;

  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.records, 'footballer_data');
  }


}
