import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  list: Employee[];
  readonly rootUrl = 'https://localhost:44301/api';

  constructor(
    private http: HttpClient
    ) { }

  // tslint:disable-next-line: typedef
  postEmployee(formData: Employee){
    return this.http.post(this.rootUrl + '/Employee', formData);
  }

  // tslint:disable-next-line: typedef
  refreshList(){
    this.http.get(this.rootUrl + '/Employee')
    .toPromise().then(res => this.list = res as Employee[]);
  }

  // tslint:disable-next-line: typedef
  getUsers() {
    this.http.get('https://localhost:44301/api/Employee').subscribe(data => {
      console.log(data);
    });
  }

  // tslint:disable-next-line: typedef
  putEmployee(formData: Employee){
    return this.http.put(this.rootUrl + '/Employee/' + formData.EmployeeID, formData);
  }

  // tslint:disable-next-line: typedef
  deleteEmployee(id: number){
    return this.http.delete(this.rootUrl + '/Employee/' + id);
  }

}

