import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Services } from '../../models/services.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  listServices: Services[];

  readonly rootURL = 'https://localhost:44356/api';

   // tslint:disable-next-line: typedef
   getServices(): Observable<any> {
    return this.http.get(this.rootURL + '/Services');
  }

  getServiceId(id): Observable<any> {
    return this.http.get(this.rootURL + '/Services/' + id);
  }

  createService(service: any): Observable<any> {
    return this.http.post(this.rootURL + '/Services', service);
  }

  editService(service: Services): Observable<any> {
    return this.http.put(
      this.rootURL + '/Services/' + service.idService,
      service
    );
  }

  deleteService(id): Observable<any> {
    return this.http.delete(this.rootURL + '/Services/' + id);
  }

}
