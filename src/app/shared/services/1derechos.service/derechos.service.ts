import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Derechos } from './../../models/derechos.model';

@Injectable({
  providedIn: 'root'
})
export class DerechosService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44356/api';

  getDerechos(): Observable<any> {
    return this.http.get(this.rootURL + '/C1Derechos');
  }

  getDerechoId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1Derechos/' + id);
  }

  createDerecho(derecho: Derechos): Observable<any>{
    return this.http.post(this.rootURL + '/C1Derechos', derecho);
  }

  editDerecho(derecho: Derechos): Observable<any>{
    return this.http.put(this.rootURL + '/C1Derechos/' + derecho.idServicio, derecho);
  }

  deleteDerecho(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1Derechos/' + id);
  }

}
