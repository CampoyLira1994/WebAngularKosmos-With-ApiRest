import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employees } from '../../models/employees.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }
  // formData: Employees;
  listEmployees: Employees[];

  readonly rootURL = 'https://localhost:44301/api';

  // tslint:disable-next-line: typedef
  getUsers(): Observable<any> {
    return this.http.get(this.rootURL + '/Employees1');
  }

  getEmployeeId(id): Observable<any> {
    return this.http.get(this.rootURL + '/Employees1/' + id);
  }

  createEmpoyee(employees: any): Observable<any>{
    return this.http.post(this.rootURL + '/Employees1', employees);
  }

  editEmployee(employees: Employees): Observable<any>{
    return this.http.put(this.rootURL + '/Employees1/' + employees.idEmployee, employees);
  }

  deleteEmpoyee(id): Observable<any>{
    return this.http.delete(this.rootURL + '/Employees1/' + id);
  }

}
