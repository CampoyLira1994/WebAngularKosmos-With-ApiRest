import { Component, OnInit } from '@angular/core';

import { EmployeesService } from '../../shared/services/employees.service/employees.service';
import { RecordsService } from '../../shared/services/records.service/records.service';

import { Employees } from '../../shared/models/employees.model';
import { Records } from '../../shared/models/records.model';

declare var $: any;

@Component({
  selector: 'app-breakfast-service',
  templateUrl: './breakfast-service.component.html',
  styleUrls: ['./breakfast-service.component.css']
})
export class BreakfastServiceComponent implements OnInit {

  constructor(private serviceEmployee: EmployeesService,
              private sericeRecord: RecordsService) { }

  cardEmployee: number;
  idEmployee: number;
  Employee: Employees;
  Employees: Employees[];
  nameEmployee: string;
  estatusEmployee: string;
  saludo: string;

  // Records
  records: Records[];
  record: Records;
  idRecords: number;


  ngOnInit(): void {
    const date: Date = new Date();
    console.log(date, 'fecha ngOnInit');
    // tslint:disable-next-line: only-arrow-functions
    // tslint:disable-next-line: typedef
    $('.showtoast').click(function(){
      $('.toast').toast('show');
      });

    // tslint:disable-next-line: only-arrow-functions
    // tslint:disable-next-line: typedef
    $('.closetoast').click(function(){
        $('.toast').toast('close');
        });

    this.serviceEmployee.getUsers().subscribe((data) => {
    this.Employees = data;
    console.log(data);

    });

  }

  // tslint:disable-next-line: typedef
  checkEmployee(cardEmployee){
   // tslint:disable-next-line: triple-equals
   console.log(this.Employees);
   console.log(cardEmployee);
   this.Employee = this.Employees.find(x => x.credential == cardEmployee);
   // tslint:disable-next-line: no-conditional-assignment
   if (this.Employee != null){
     this.idEmployee = this.Employee.idEmployee;
     console.log(this.Employee);
     this.estatusEmployee = 'Acceso Correcto';
     this.nameEmployee = this.Employee.name;
     this.saludo = 'Bienvenido';
     $('.toast').toast('show');
     this.cardEmployee = null;
     this.addRecord();
     this.print();
   }else{
    this.estatusEmployee = 'Sin Acceso';
    this.nameEmployee = 'Usuario no reconocido';
    $('.toast').toast('show');
    this.cardEmployee = null;
    this.saludo = '';
   }

  }

   // tslint:disable-next-line: typedef
   getRecors() {
    this.sericeRecord.getRecords().subscribe((data) => {
      this.records = data;
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, records_1 = this.records;
        i < this.records.length;
        i++
      ) {
        const empleado = records_1[i];
        this.record[i] = empleado;
      }
      this.idRecords = this.records.length + 1;
    });
  }

   // tslint:disable-next-line: typedef
   addRecord() {
     this.getRecors();
     const date: Date = new Date();
     this.sericeRecord.createRecord({
      idRecord: this.idRecords,
      idEmployee: this.idEmployee,
      idService: 3,
      record1: date.toLocaleString('en-US', { hour: 'numeric' , minute: 'numeric', second: 'numeric', hour12: true})
      })
      .subscribe((data) => {
        // this.getEmployees();
        // this.refresh();
      });
     console.log(date, 'fecha addRecord');
  }

  // tslint:disable-next-line: typedef
  cerrartoast(){
    console.log('cerrar');
    $('.toast').toast('dispose');
  }


  // tslint:disable-next-line: typedef
  print(){
    this.saludo = 'Bienvenido';
    const date: Date = new Date();
    const mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<h1>Desayuno OCS<h1/>');
    mywindow.document.writeln('------------------------');
    mywindow.document.writeln('<h3>Empleado: </h3><p>' + this.Employee.name + '</p>');
    mywindow.document.writeln('<h3>Tarjeta: </h3><p>' + this.Employee.credential + '</p>');
    mywindow.document.writeln('<h3>Servicio: </h3><p>' + 'Desayuno' + '</p>');
    // tslint:disable-next-line: max-line-length
    mywindow.document.writeln('<h3>Fecha: </h3><p>' + date.toLocaleString('en-US', {day: '2-digit', month: '2-digit', year: '2-digit', hour: 'numeric' , minute: 'numeric', second: 'numeric', hour12: true}) + '</p>');
    mywindow.document.close(); // necesario para IE >= 10
    mywindow.print();
    mywindow.close();
    }

}

