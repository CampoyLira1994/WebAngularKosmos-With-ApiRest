import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../shared/services/employees.service/employees.service';
import { Employees } from '../shared/models/employees.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  userFind: number;

  employees: Employees[];
  lengthEmpleados: number;

  constructor(private service: EmployeesService) { }
  // tslint:disable-next-line: typedef
  ngOnInit() {

  }

  // tslint:disable-next-line: typedef
  findUser(){
    this.service.getUsers().subscribe(data => {
      this.employees = data;
      // tslint:disable-next-line: variable-name
      for (let i = 0, employees_1 = this.employees; i < this.employees.length; i++) {
        const empleado = employees_1[i];
        console.log(empleado.name);
        if (this.username === empleado.name && this.password === empleado.password){
          this.userFind = empleado.idEmployee;
          console.log('Encontrado ');
        }else{
          console.log('Error en Usuaior o Contraseña');
        }
      }
    });
  }



}
