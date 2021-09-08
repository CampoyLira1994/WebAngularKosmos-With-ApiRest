import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Empresas } from './../../models/empresas.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44356/api';


  getEmpresa(): Observable<any> {
    return this.http.get(this.rootURL + '/C1Empresa');
  }

  getEmpresaId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1Empresa/' + id);
  }

  createEmpresa(empresa: Empresas): Observable<any>{
    return this.http.post(this.rootURL + '/C1Empresa', empresa);
  }

  editEmpresa(empresas: Empresas): Observable<any>{
    return this.http.put(this.rootURL + '/C1Empresa/' + empresas.idEmpresa, empresas);
  }

  deleteEmpresa(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1Empresa/' + id);
  }


}
