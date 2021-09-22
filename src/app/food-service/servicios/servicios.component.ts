import { Component, Input, OnInit } from '@angular/core';

// import { EmployeesService } from '../../shared/services/employees.service/employees.service';
import { EmpleadosService } from './../../shared/services/1empleados.service/empleados.service';
// import { RecordsService } from '../../shared/services/records.service/records.service';
import { ReportesService } from './../../shared/services/1reportes.service/reportes.service';
import { ServiciosService } from './../../shared/services/1servicios.service/servicios.service';
import { DerechosService } from './../../shared/services/1derechos.service/derechos.service';

import { Empleados } from '../../shared/models/empleados.model';
import { Reportes } from './../../shared/models/reportes.model';
import { Servicios } from './../../shared/models/servicios.model';
import { Derechos } from './../../shared/models/derechos.model';

declare var $: any;

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  // Cominicacion
  @Input() idServicio: number;

  constructor(
    private empleadosService: EmpleadosService,
    // private serviceRecord: RecordsService,
    private reportesService: ReportesService,
    private serviciosService: ServiciosService,
    private derechosService: DerechosService
  ) { }

  cardEmployee: number;
  idEmployee: number;
  Employee: Empleados;
  Employees: Empleados[];
  nameEmployee: string;
  estatusEmployee: string;
  saludo: string;

  contadorRecordsNew = 0;

  fecha: Date;
  fechaHoy: Date;
  fechaStr: string;

  // Records
  records: Reportes[];
  recordsNew: Reportes[];
  record: Reportes;
  idRecords: number;
  recordConut: number;

  reportes: Reportes[];
  reporte: Reportes;

  // Ticket
  servicio: Servicios;
  servicios: Servicios[];
  servicioName: string;

  // Derechos
  derechos: Derechos[];
  numeroServicios: number;
  derecho: Derechos;

  ngOnInit(): void {

    // tslint:disable-next-line: only-arrow-functions
    // tslint:disable-next-line: typedef
    $('.showtoast').click(function () {
      $('.toast').toast('show');
    });

    // tslint:disable-next-line: only-arrow-functions
    // tslint:disable-next-line: typedef
    $('.closetoast').click(function () {
      $('.toast').toast('close');
    });

    this.empleadosService.getEmpleados().subscribe((data) => {
      this.Employees = data;
      // console.log(data);
    });

    this.serviciosService.getServicios().subscribe((data) => {
      this.servicios = data;
      this.servicio = this.servicios.find((x) => x.idServicio == this.idServicio);
      console.error(this.servicio);
    });

    this.derechosService.getDerechos().subscribe((data) => {
      this.derechos = data;
      // console.log(data, 'this.derechosService');
    });

    this.getRecors();

  }

  // tslint:disable-next-line: typedef
  checkEmployee(cardEmployee) {
    this.cardEmployee = cardEmployee;
    // this.sericeRecord.getRecords().subscribe((data) =>){
    // }

    // tslint:disable-next-line: triple-equals
    this.Employee = this.Employees.find((x) => x.credencial == cardEmployee);


    // tslint:disable-next-line: no-conditional-assignment
    if (this.Employee != null) {

      this.idEmployee = this.Employee.idEmpleado;
      // Busca y selecciona los derechos del usuario o empleado encontrado para poder asignarselo en el
      // this.numeroServicios
      // tslint:disable-next-line: triple-equals
      this.derecho = this.derechos.find((x) => x.idEmpleado === this.idEmployee && x.idServicio == this.idServicio);
      // tslint:disable-next-line: triple-equals
      if (this.derecho != undefined) {
        console.log(this.derecho, 'this.derecho');
        this.numeroServicios = this.derecho.numeroServicios;
        // -----------------------------------------------------

        this.recordsNew = this.records.filter(element => element.idServicio === this.idServicio);
        console.log(this.recordsNew, 'this.recordsNew');
        this.records.forEach((element, i) => {

          // tslint:disable-next-line: triple-equals
          if (element.idEmpleado == this.idEmployee) {
            // Tipo de emleado a filtrar recolocar para el check del filtrado

            const date: Date = new Date();
            let mes: number;
            // console.log(date.getDate(), date.getMonth() + 1, date.getFullYear());
            this.fecha = new Date(element.fechaDate);
            mes = date.getMonth() + 1;
            // this.fechaStr = (date.getFullYear() + '-' + mes + '-' + date.getDate());
            this.fechaHoy = new Date(date.getFullYear() + '-' + mes + '-' + date.getDate());
            // console.log(this.fecha, '----------', this.fechaHoy);
            // Valida que el egistro dea del dia de hoy para poder der contemplado o tomado en cuenta dentro del PUSH
            // tslint:disable-next-line: max-line-length
            if (this.fecha.getDate() === this.fechaHoy.getDate() && this.fecha.getMonth() === this.fechaHoy.getMonth() && this.fecha.getFullYear() === this.fechaHoy.getFullYear()) {

              // tslint:disable-next-line: triple-equals
              if (element.idServicio == this.idServicio) {
                this.recordsNew.push(element);
                this.contadorRecordsNew = this.recordsNew.length;
                console.log(this.recordsNew.length, 'this.recordsNew.length', this.recordsNew, 'this.recordsNew.push(element);');
              }
            }


          }

          // tslint:disable-next-line: triple-equals
          // console.log(this.records.length, 'this.records.length', i + 1, 'i + 1');
          if (this.records.length === i + 1) {

            // tslint:disable-next-line: no-conditional-assignment
            console.log(this.numeroServicios, 'this.numeroServicios', this.contadorRecordsNew, 'this.recordsNew.length + 1');
            // si el numero de servicios es menor al numero de reportes entonces
            if (this.numeroServicios > this.contadorRecordsNew) {
              // tslint:disable-next-line: no-conditional-assignment
              this.estatusEmployee = 'Acceso Correcto';
              this.nameEmployee = this.Employee.nombres + ' ' + this.Employee.apellidos;
              this.saludo = 'Bienvenido';
              $('.toast').toast('show');
              this.addRecord();
              this.cardEmployee = null;
              this.print();
            } else {
              this.estatusEmployee = 'Usuario exedio el numero de servicios disponibles por hoy de ' + this.numeroServicios;
              this.nameEmployee = this.Employee.nombres + ' ' + this.Employee.apellidos;
              $('.toast').toast('show');
              this.saludo = 'Servicio consumido ';
              this.printError();
            }
          }


        });
      } else {
        this.estatusEmployee = 'Usuario sin derecho para este servicio';
        this.nameEmployee = this.Employee.nombres + ' ' + this.Employee.apellidos;
        $('.toast').toast('show');
        this.saludo = 'Verificar derechos con Admin';
        this.printError();
      }

      // -----------------------------------------------------

      // end if nuero de servicios
    }else {
      this.estatusEmployee = 'Sin Usuario';
      this.nameEmployee = 'Usuario no registrado tarjeta no encontrada';
      $('.toast').toast('show');
      this.saludo = 'Sin Usuario';
      this.printError();
    }
  }

  // tslint:disable-next-line: typedef
  getRecors() {
    this.reportesService.getReportes().subscribe((data) => {
      this.records = data;
      // console.log(this.records);
      // tslint:disable-next-line: triple-equals

      // console.log(this.recordsNew, 'PUSH Records by Emplyee');
      // console.log(this.records.length, 'this.records.length');

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
    });

    // if(this.estatusEmployee == '' ){}
  }

  // tslint:disable-next-line: typedef
  addRecord() {
    const date: Date = new Date();
    // this.serviceRecord.createRecord({
    //   idRecord: this.idRecords,
    //   idEmployee: this.idEmployee,
    //   idService: this.idServicio,
    //   record1: date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true })
    // })
    //   .subscribe((data) => {
    //     // this.getEmployees();
    //     // this.refresh();
    //   });
    // console.log(date, 'fecha addRecord');

    this.reportesService
      .createReporte({
        idReporte: this.idRecords,
        idEmpleado: this.idEmployee,
        idServicio: this.idServicio,
        nombreComensal: this.nameEmployee,
        fecha: new Date(),
        fechaDate: new Date(),
        fechaStrnig: date.toLocaleString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          second: 'numeric',
          hour12: true,
        }),
      })
      .subscribe((data) => {
        // this.getEmployees();
        // this.refresh();
        this.getRecors();
      });
  }

  // tslint:disable-next-line: typedef
  cerrartoast() {
    $('.toast').toast('dispose');
  }

    // tslint:disable-next-line: typedef
    refresh(){
      this.cardEmployee = null;
    }

  // tslint:disable-next-line: typedef
    print() {
       this.saludo = 'Bienvenido';
       const date: Date = new Date();
       const mywindow = window.open('', 'PRINT', 'height=400,width=600');
       mywindow.document.write('<p>.</p>');
       mywindow.document.write('<p>Servicio: ' + this.servicio.nombreServicio + '</p>');
       // tslint:disable-next-line: max-line-length
       mywindow.document.write('<h3>Fecha: ' + date.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: '2-digit', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, }) + '</h3>');
       mywindow.document.write('<p>Tiket: ' + this.idRecords + '</p>');
       mywindow.document.write('<p>Tarjeta: ' + this.Employee.credencial + '</p>');
       mywindow.document.write('<p>Empleado: ' + this.Employee.nombres + '</p>');
       mywindow.document.write('<p>Bienvenido...: ' + 'Buen Provecho!!!' + '</p>');
       mywindow.document.close(); // necesario para IE >= 10 this.idRecords
       mywindow.print();
       mywindow.close();
       this.refresh();
    }

  // tslint:disable-next-line: typedef
  catch(Exception) {
    // tslint:disable-next-line: quotemark
    console.log(Exception, 'Something went wrong.');
    //  Block of code to handle errors
  }

  // tslint:disable-next-line: typedef
  printError() {
    const date: Date = new Date();
    const mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<h3>.</h3>');
    mywindow.document.write('<h2>ERROR DE ACCESO !! </h2>');
    mywindow.document.write('<p>Servicio: ' + this.servicio.nombreServicio + '</p>');
    mywindow.document.write('<h3>Tipo de error: ' + this.estatusEmployee + '</h3>');
    // tslint:disable-next-line: max-line-length
    mywindow.document.write('<p>Fecha: ' + date.toLocaleString('en-US', { day: '2-digit', month: '2-digit', year: '2-digit', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true, }) + '</p>');
    mywindow.document.write('<p>Tarjeta: ' + this.cardEmployee + '</p>');
    mywindow.document.write('<p>Empleado: ' + this.nameEmployee + '</p>');
    mywindow.document.write('<p>Detalle: ' + this.saludo + '</p>');
    mywindow.document.close(); // necesario para IE >= 10 this.idRecords
    mywindow.print();
    mywindow.close();
    this.refresh();
  }
}
