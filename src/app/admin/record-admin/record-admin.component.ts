import { Component, OnInit } from '@angular/core';

import { RecordsService } from '../../shared/services/records.service/records.service';

import { Records } from '../../shared/models/records.model';

@Component({
  selector: 'app-record-admin',
  templateUrl: './record-admin.component.html',
  styleUrls: ['./record-admin.component.css']
})
export class RecordAdminComponent implements OnInit {

  constructor(private service: RecordsService) { }

  records: Records[];

  ngOnInit(): void {
    this.service.getRecords().subscribe((data) => {
      console.log(data);
    });
  }

}
