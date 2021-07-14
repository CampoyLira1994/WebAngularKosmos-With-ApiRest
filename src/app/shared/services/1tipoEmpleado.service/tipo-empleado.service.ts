import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TipoEmpleado } from './../../models/tipoEmpleado.model';

@Injectable({
  providedIn: 'root'
})
export class TipoEmpleadoService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44301/api';


  getTipoEmpleado(): Observable<any> {
    return this.http.get(this.rootURL + '/C1TipoEmpleado');
  }

  getTipoEmpleadoId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1TipoEmpleado/' + id);
  }

  createTipoEmpleado(tipoEmpleado: TipoEmpleado): Observable<any>{
    return this.http.post(this.rootURL + '/C1TipoEmpleado', tipoEmpleado);
  }

  editTipoEmpleado(tipoEmpleado: TipoEmpleado): Observable<any>{
    return this.http.put(this.rootURL + '/C1TipoEmpleado/' + tipoEmpleado.idTipoEmpleado, tipoEmpleado);
  }

  deleteTipoEmpleado(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1TipoEmpleado/' + id);
  }


}
