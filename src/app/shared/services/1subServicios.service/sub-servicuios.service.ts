import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { SubServicios } from './../../models/subServicios.model';


@Injectable({
  providedIn: 'root'
})
export class SubServicuiosService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44356/api';


  getSubServicios(): Observable<any> {
    return this.http.get(this.rootURL + '/C1SubServicio');
  }

  getSubServicioId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1SubServicio/' + id);
  }

  createSubServicio(subServicio: SubServicios): Observable<any>{
    return this.http.post(this.rootURL + '/C1SubServicio', subServicio);
  }

  editSubServicio(subServicio: SubServicios): Observable<any>{
    return this.http.put(this.rootURL + '/C1SubServicio/' + subServicio.idSubServicio, subServicio);
  }

  deleteSubServicio(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1SubServicio/' + id);
  }

}
