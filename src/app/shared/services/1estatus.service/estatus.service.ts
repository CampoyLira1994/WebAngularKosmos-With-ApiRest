import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Estatus } from './../../models/estatus.model';

@Injectable({
  providedIn: 'root'
})
export class EstatusService {
  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44356/api';


  getEstatus(): Observable<any> {
    return this.http.get(this.rootURL + '/C1Estatus');
  }

  getEstatusId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1Estatus/' + id);
  }

  createEstatus(area: Estatus): Observable<any>{
    return this.http.post(this.rootURL + '/C1Estatus', area);
  }

  editEstatus(estatus: Estatus): Observable<any>{
    return this.http.put(this.rootURL + '/C1Estatus/' + estatus.idEstatus, estatus);
  }

  deleteEstatus(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1Estatus/' + id);
  }


}
