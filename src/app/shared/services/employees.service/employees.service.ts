import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employees } from './../../models/employees.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  readonly rootURL = 'https://localhost:44356/api';

  // tslint:disable-next-line: typedef
  getUsers(): Observable<any> {
    return this.http.get(this.rootURL + '/C1Empleados');
  }

  getEmployeeId(id): Observable<any> {
    return this.http.get(this.rootURL + '/C1Empleados/' + id);
  }

  createEmpoyee(employees: any): Observable<any>{
    return this.http.post(this.rootURL + '/C1Empleados', employees);
  }

  editEmployee(employees: Employees): Observable<any>{
    return this.http.put(this.rootURL + '/C1Empleados/' + employees.idEmployee, employees);
  }

  deleteEmpoyee(id): Observable<any>{
    return this.http.delete(this.rootURL + '/C1Empleados/' + id);
  }

}
