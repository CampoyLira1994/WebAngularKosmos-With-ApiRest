import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Status } from './../../models/status.model';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  constructor(private http: HttpClient) { }

  listStatus: Status[];

  readonly rootURL = 'https://localhost:44356/api';

   // tslint:disable-next-line: typedef
   getStatus(): Observable<any> {
    return this.http.get(this.rootURL + '/Status');
  }

  getStatusId(id): Observable<any> {
    return this.http.get(this.rootURL + '/Status/' + id);
  }

  createStatus(status: any): Observable<any> {
    return this.http.post(this.rootURL + '/Status', status);
  }

  editStatus(status: Status): Observable<any> {
    return this.http.put(
      this.rootURL + '/Status/' + status.idStatus,
      status
    );
  }

  deleteStatus(id): Observable<any> {
    return this.http.delete(this.rootURL + '/Status/' + id);
  }

}
