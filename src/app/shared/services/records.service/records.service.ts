import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Records } from '../../models/records.model';

@Injectable({
  providedIn: 'root',
})
export class RecordsService {
  constructor(private http: HttpClient) {}

  // formData: Reords;
  listRecords: Records[];

  readonly rootURL = 'https://localhost:44356/api';

  // tslint:disable-next-line: typedef
  getRecords(): Observable<any> {
    return this.http.get(this.rootURL + '/C1Reportes');
  }

  getRecordId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1Reportes/' + id);
  }

  createRecord(record: any): Observable<any> {
    return this.http.post(this.rootURL + '/C1Reportes', record);
  }

  editRecord(record: Records): Observable<any> {
    return this.http.put(
      this.rootURL + '/C1Reportes/' + record.idRecord,
      record
    );
  }

  deleteRecord(id): Observable<any> {
    return this.http.delete(this.rootURL + '/C1Reportes/' + id);
  }
}
