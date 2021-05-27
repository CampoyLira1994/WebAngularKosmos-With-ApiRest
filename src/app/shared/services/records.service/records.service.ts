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

  readonly rootURL = 'https://localhost:44301/api';

  // tslint:disable-next-line: typedef
  getRecords(): Observable<any> {
    return this.http.get(this.rootURL + '/Records');
  }

  getRecordId(id): Observable<any> {
    return this.http.get(this.rootURL + '/Records/' + id);
  }

  createRecord(record: any): Observable<any> {
    return this.http.post(this.rootURL + '/Records', record);
  }

  editRecord(record: Records): Observable<any> {
    return this.http.put(
      this.rootURL + '/Records/' + record.idRecord,
      record
    );
  }

  deleteRecord(id): Observable<any> {
    return this.http.delete(this.rootURL + '/Records/' + id);
  }
}
