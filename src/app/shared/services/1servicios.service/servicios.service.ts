import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Servicios } from './../../models/servicios.model';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44356/api';


  getServicios(): Observable<any> {
    return this.http.get(this.rootURL + '/C1Servicio');
  }

  getServicioId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1Servicio/' + id);
  }

  createServicio(servicio: Servicios): Observable<any>{
    return this.http.post(this.rootURL + '/C1Servicio', servicio);
  }

  editServicio(servicio: Servicios): Observable<any>{
    return this.http.put(this.rootURL + '/C1Servicio/' + servicio.idServicio, servicio);
  }

  deleteServicio(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1Servicio/' + id);
  }

}
