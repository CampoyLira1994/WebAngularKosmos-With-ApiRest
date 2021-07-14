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
              private serviceRecord: RecordsService) { }

  cardEmployee: number;
  idEmployee: number;
  Employee: Employees;
  Employees: Employees[];
  nameEmployee: string;
  estatusEmployee: string;
  saludo: string;

  // Records
  records: Records[];
  recordsNew: Records[];
  record: Records;
  idRecords: number;
  recordConut: number;


  ngOnInit(): void {
    const date: Date = new Date();
    // console.log(date, 'fecha ngOnInit');
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
    // console.log(data);

    });

  }

  // tslint:disable-next-line: typedef
  checkEmployee(cardEmployee){
    // this.sericeRecord.getRecords().subscribe((data) =>){

    // }
   //  console.log(cardEmployee);
   // tslint:disable-next-line: triple-equals
   this.Employee = this.Employees.find(x => x.credential == cardEmployee);
   // tslint:disable-next-line: no-conditional-assignment
   if (this.Employee != null){
     console.log(cardEmployee, this.Employee.idEmployee);
     this.idEmployee = this.Employee.idEmployee;

     // tslint:disable-next-line: no-conditional-assignment
     this.estatusEmployee = 'Acceso Correcto';
     this.nameEmployee = this.Employee.name;
     this.saludo = 'Bienvenido';
     $('.toast').toast('show');
     this.addRecord();
     this.cardEmployee = null;
   }else{
    this.estatusEmployee = 'Sin Acceso';
    this.nameEmployee = 'Ingrese su numero valido';
    $('.toast').toast('show');
    this.printError();
    this.cardEmployee = null;
    this.saludo = 'Sin Usuario';
   }

  }

   // tslint:disable-next-line: typedef
   getRecors() {
    this.serviceRecord.getRecords().subscribe((data) => {
      this.records = data;
      console.log(this.records);
      // tslint:disable-next-line: triple-equals
      this.recordsNew = this.records.filter(elements => {

      });
      this.records.forEach(element => {
        // tslint:disable-next-line: no-conditional-assignment
        if (element.idEmployee === 3){// Tipo de emleado a filtrar recolocar para el check del filtrado
          // tslint:disable-next-line: prefer-const
          // this.recordsNew = element;
          this.recordsNew.push(element);
          console.log(this.recordsNew.length, 'this.recordsNew');
        }

      });

      console.log(this.recordsNew , 'PUSH Records by Emplyee');
      console.log(this.records.length , 'this.records.length');

      // tslint:disable-next-line: variable-name
      // for (
      //   // tslint:disable-next-line: variable-name
      //   let i = 0, records_1 = this.records;
      //   i < this.records.length;
      //   i++
      // ) {
      //   // var empleado = records_1[i];
      //   // this.record[i] = empleado;
      //   // console.log(this.record[i],'this.record[i]');
      // }
      this.idRecords = this.records.length + 1;
      this.print();
    });
    // if(this.estatusEmployee == '' ){}
  }

   // tslint:disable-next-line: typedef
   addRecord() {
     const date: Date = new Date();
     this.serviceRecord.createRecord({
      idRecord: this.idRecords,
      idEmployee: this.idEmployee,
      idService: 3,
      record1: date.toLocaleString('en-US', { hour: 'numeric' , minute: 'numeric', second: 'numeric', hour12: true})
      })
      .subscribe((data) => {
        // this.getEmployees();
        // this.refresh();
        this.getRecors();
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
    mywindow.document.write('<h3>Servicio: ' + 'Desayuno' + '</h3>');
    // tslint:disable-next-line: max-line-length
    mywindow.document.write('<h2>Fecha: ' + date.toLocaleString('en-US', {day: '2-digit', month: '2-digit', year: '2-digit', hour: 'numeric' , minute: 'numeric', second: 'numeric', hour12: true}) + '</h2>');
    mywindow.document.write('<p>Tiket: ' + this.idRecords + '</p>');
    mywindow.document.write('<p>Tarjeta: ' + this.Employee.credential + ' Empleado: ' + this.Employee.name + '</p>');
    mywindow.document.write('<p>Bienvenido...: ' + 'Buen Provecho!!!' + '</p>');
    mywindow.document.close(); // necesario para IE >= 10 this.idRecords
    mywindow.print();
    mywindow.close();
    }

      // tslint:disable-next-line: typedef
  printError(){


    this.saludo = 'Bienvenido';
    const date: Date = new Date();
    const mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<h1>ERROR DE ACCESO !! <h1/>');
    mywindow.document.write('<h3>Tipo de error: ' + 'Mas de un registro' + '</h3>');
    // tslint:disable-next-line: max-line-length
    mywindow.document.write('<p>Fecha: ' + date.toLocaleString('en-US', {day: '2-digit', month: '2-digit', year: '2-digit', hour: 'numeric' , minute: 'numeric', second: 'numeric', hour12: true}) + '</p>');
    mywindow.document.write('<p>Usuario ya registrado por hoy' + this.cardEmployee  + '</p>');
    mywindow.document.write('<p>Empleado: ' + this.nameEmployee + '</p>');
    mywindow.document.close(); // necesario para IE >= 10 this.idRecords
    mywindow.print();
    mywindow.close();
  }

}

