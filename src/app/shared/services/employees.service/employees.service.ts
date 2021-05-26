import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Employees } from '../../models/employees.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  // formData: Employees;
  listEmployees: Employees[];

  readonly rootURL = 'https://localhost:44301/api';


  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: typedef
  getUsers(): Observable<any> {
    return this.http.get(this.rootURL + '/Employees1');
  }

}
