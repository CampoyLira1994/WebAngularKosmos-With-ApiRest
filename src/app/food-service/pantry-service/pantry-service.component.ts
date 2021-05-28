import { Component, OnInit } from '@angular/core';

import { EmployeesService } from './../../shared/services/employees.service/employees.service';

import { Employees } from './../../shared/models/employees.model';

@Component({
  selector: 'app-pantry-service',
  templateUrl: './pantry-service.component.html',
  styleUrls: ['./pantry-service.component.css']
})
export class PantryServiceComponent implements OnInit {

  constructor(private serviceEmployee: EmployeesService) { }

  idEmployee: number;
  Employee: Employees;

  mostrar: boolean;

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  checkEmployee(Employee){
  this.serviceEmployee.getEmployeeId(Employee).subscribe((data) => {
  this.Employee = data;
  console.log(data);
  this.mostrar = true;
  });

  }

}