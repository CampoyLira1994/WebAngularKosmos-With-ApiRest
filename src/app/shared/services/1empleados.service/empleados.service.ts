import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Empleados } from './../../models/empleados.model';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44356/api';


  getEmpleados(): Observable<any> {
    return this.http.get(this.rootURL + '/C1Empleados');
  }

  getEmpleadoId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1Empleados/' + id);
  }

  createEmpleado(empleado: Empleados): Observable<any>{
    return this.http.post(this.rootURL + '/C1Empleados', empleado);
  }

  editEmpleado(empleado: Empleados): Observable<any>{
    return this.http.put(this.rootURL + '/C1Empleados/' + empleado.idEmpleado, empleado);
  }

  deleteEmpleado(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1Empleados/' + id);
  }


}
