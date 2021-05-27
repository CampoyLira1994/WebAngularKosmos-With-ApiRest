import { Employee } from './../shared/employee.model';
import { Component, OnInit } from '@angular/core';

import { EmployeesService } from '../shared/services/employees.service/employees.service';
import { Employees } from '../shared/models/employees.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  employees: Employees[];
  employee: Employee;

  // to open input
  toOpenAddEmployeeBool = false;
  toOpenEditEmployeeBool = false;

  // Empoyee add
  idEmployee: number;
  idStatus: number = 1;
  idUserType: number = 2;
  name: string;
  credential: number;
  password: string;

  // Empoyee Edit && Delete
  EidEmployee: number; //Delete ID
  EidStatus: number;
  EidUserType: number;
  Ename: string;
  Ecredential: number;
  Epassword: string;

  constructor(private service: EmployeesService) { }

  ngOnInit(): void {
    // this.service.getUsersId(1).subscribe(data => {
    //   console.log(data);
    // });

    this.getEmployees();
  }

  // tslint:disable-next-line: typedef
  getEmployees() {
    this.service.getUsers().subscribe((data) => {
      this.employees = data;
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, employees_1 = this.employees;
        i < this.employees.length;
        i++
      ) {
        const empleado = employees_1[i];
        this.employees[i] = empleado;
      }
      this.idEmployee = this.employees.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addEmpoyeeAdmin() {
    this.service
      .createEmpoyee({
        idEmployee: this.idEmployee,
        idStatus: this.idStatus,
        idUserType: this.idUserType,
        name: this.name,
        credential: this.credential,
        password: this.password,
      })
      .subscribe((data) => {
        this.getEmployees();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editEmployee() {
    this.service
      .editEmployee({
        idEmployee: this.EidEmployee,
        idStatus: this.EidStatus,
        idUserType: this.EidUserType,
        name: this.Ename,
        credential: this.Ecredential,
        password: this.Epassword,
      })
      .subscribe((data) => {
        this.getEmployees();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  delteEmployee(EidEmployee) {
    this.service.deleteEmpoyee(EidEmployee).subscribe();
    this.getEmployees();
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  toOpenAddEmployee() {
    this.toOpenEditEmployeeBool = false;
    this.toOpenAddEmployeeBool = true;
  }

  // tslint:disable-next-line: typedef
  toOpenEditEmployee(employee) {
    this.toOpenAddEmployeeBool = false;
    this.toOpenEditEmployeeBool = true;
    console.log(employee);
    this.EidEmployee = employee.idEmployee;
    this.EidStatus = employee.idStatus;
    this.EidUserType = employee.idUserType;
    this.Ename = employee.name;
    this.Ecredential = employee.credential;
    this.Epassword = employee.password;
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.idEmployee = 0;
    this.idStatus = 1;
    this.idUserType = 2;
    this.name = '';
    this.credential = null;
    this.password = '';
    this.EidEmployee = 0;
    this.EidStatus = 1;
    this.EidUserType = 2;
    this.Ename = '';
    this.Ecredential = null;
    this.Epassword = '';
  }
}
