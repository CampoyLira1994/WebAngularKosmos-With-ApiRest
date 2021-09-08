import { Component, Input, OnInit } from '@angular/core';

import { Empleados } from '../../shared/models/empleados.model';
import { Servicios } from './../../shared/models/subServicios.model';
import { Reportes } from './../../shared/models/reportes.model';
import { Derechos } from './../../shared/models/derechos.model';

import { SubServicuiosService } from './../../shared/services/1subServicios.service/sub-servicuios.service';
import { EmpleadosService } from './../../shared/services/1empleados.service/empleados.service';
import { ReportesService } from './../../shared/services/1reportes.service/reportes.service';
import { ServiciosService } from './../../shared/services/1servicios.service/servicios.service';
import { DerechosService } from './../../shared/services/1derechos.service/derechos.service';

declare var $: any;

@Component({
  selector: 'app-sub-servicios',
  templateUrl: './sub-servicios.component.html',
  styleUrls: ['./sub-servicios.component.css']
})
export class SubServiciosComponent implements OnInit {

  @Input() idServicio: number;

  constructor(private subServicuiosService: SubServicuiosService,
              private empleadosService: EmpleadosService,
              private reportesService: ReportesService,
              private serviciosService: ServiciosService,
              private derechosService: DerechosService) { }

  cardEmployee: number;

  subServicios: Servicios[];
  subServicio: Servicios;
  selctSubServicio: Servicios;
  newSubServicios: Servicios[];


  estatusEmployee: string;
  nameEmployee: string;
  Employee: Empleados;
  Employees: Empleados[];
  idEmployee: number;

  // Reportes
  reportes: Reportes[];
  reporteNew: Reportes[];
  idReportes: number;

  // Ticket
  servicio: Servicios;
  servicios: Servicios[];
  saludo: string;

  // Derechos
  derechos: Derechos[];
  numeroServicios: number;

  //Control opcines
  opcion = false;

  ngOnInit(): void {

    this.empleadosService.getEmpleados().subscribe((data) => {
      this.Employees = data;
      // console.log(data);
    });

    this.serviciosService.getServicios().subscribe((data) => {
      this.servicios = data;
      // console.log(data);
    });

    this.derechosService.getDerechos().subscribe((data) => {
      this.derechos = data;
      // console.log(data, 'this.derechosService');
    });

    this.getRecors();

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

  }

  // tslint:disable-next-line: typedef
  checkEmployee(cardEmployee) {
    // this.sericeRecord.getRecords().subscribe((data) =>){
    // }
    // tslint:disable-next-line: triple-equals
    this.servicio = this.servicios.find((x) => x.idServicio == this.idServicio);
    // console.log(this.servicio, 'this.servicio,this.servicio');
    // tslint:disable-next-line: triple-equals
    this.Employee = this.Employees.find((x) => x.credencial == cardEmployee);

    // tslint:disable-next-line: no-conditional-assignment
    if (this.Employee != null) {
      // console.log(cardEmployee, this.Employee.idEmpleado, 'mensajeeee');
      this.idEmployee = this.Employee.idEmpleado;

      // -----------------------------------------------------

      this.reporteNew = this.reportes.filter((elements) => { });
      this.reportes.forEach((element, i) => {

        if (this.reportes.length === i + 1) {
          this.numeroServicios = this.derechos[0].numeroServicios;

          console.log(this.numeroServicios,this.reporteNew.length,'Contadores en orden');

          // tslint:disable-next-line: no-conditional-assignment
          if (this.numeroServicios > this.reporteNew.length) {
            // tslint:disable-next-line: no-conditional-assignment
            this.estatusEmployee = 'Acceso Correcto';
            this.nameEmployee = this.Employee.nombres + this.Employee.apellidos;
            this.saludo = 'Bienvenido';
            this.opcion = true;


            //77777777777777777777777777777777777777777777777777777777777777777777777
            this.newSubServicios = [];
            this.subServicuiosService.getSubServicios().subscribe((data) => {
              this.subServicios = data;
              // tslint:disable-next-line: no-unused-expression
              this.subServicios.forEach(element => {

                // tslint:disable-next-line: triple-equals
                if (element.idServicio == this.idServicio) {
                  this.subServicio = element;
                  // console.log(this.subServicio, 'this.subServicio');
                  this.newSubServicios.push(this.subServicio);
                  // console.log(this.newSubServicios, 'this.newSubServicios');
                }

              });

              // console.log(this.subServicio, 'Aqui esta el numero de subServicios');
            });
            //77777777777777777777777777777777777777777777777777777777777777777777777

          } else {
            this.opcion = false;
            this.estatusEmployee = 'Sin Acceso';
            this.nameEmployee = 'Usuario no registrado';
            $('.toast').toast('show');
            this.cardEmployee = null;
            this.saludo = 'Sin Usuario';
            this.printError();
          }
        }

        // tslint:disable-next-line: triple-equals
        if (element.idEmpleado == this.idEmployee) {
          this.reporteNew.push(element);
          // console.log(this.recordsNew,'this.recordsNew');
        }
      });

      // -----------------------------------------------------

      // end if nuero de servicios
    }
  }

  // tslint:disable-next-line: typedef
  getRecors() {
    this.reportesService.getReportes().subscribe((data) => {
      this.reportes = data;

      this.idReportes = this.reportes.length + 1;
    });

  }


  // tslint:disable-next-line: typedef
  addRecord() {
    const date: Date = new Date();

    this.reportesService
      .createReporte({
        idReporte: this.idReportes,
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
        this.getRecors();
      });
  }


  selectSubServicio(selctSubServicio){
    this.selctSubServicio = selctSubServicio;
    // console.log(this.selctSubServicio);
    $('.toast').toast('show'); // Esto se tiene que cambiar al fnal de todo
    this.addRecord(); // Esto se tiene que cambiar al fnal de todo
    this.cardEmployee = null; // Esto se tiene que cambiar al fnal de todo
    this.print(); // Esto se tiene que cambiar al fnal de todo
  }


  // tslint:disable-next-line: typedef
  cerrartoast() {
    $('.toast').toast('dispose');
  }


  // tslint:disable-next-line: typedef
  print() {
    this.saludo = 'Bienvenido';
    const date: Date = new Date();
    const mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<h3>.</h3>');
    mywindow.document.write(
      '<h3>Servicio: ' + this.selctSubServicio.nombreSubServicio + '</h3>'
    );
    // tslint:disable-next-line: max-line-length
    mywindow.document.write(
      '<h3>Fecha: ' +
      date.toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }) +
      '</h3>'
    );
    mywindow.document.write('<p>Tiket: ' + this.idReportes + '</p>');
    mywindow.document.write(
      '<p>Tarjeta: ' +
      this.Employee.credencial +
      ' Empleado: ' +
      this.Employee.nombres +
      '</p>'
    );
    mywindow.document.write('<p>Bienvenido...: ' + 'Buen Provecho!!!' + '</p>');
    mywindow.document.close(); // necesario para IE >= 10 this.idRecords
    mywindow.print();
    mywindow.close();
    this.opcion = false;
  }

  printError() {
    const date: Date = new Date();
    const mywindow = window.open('', 'PRINT', 'height=400,width=600');
    mywindow.document.write('<h3>.</h3>');
    mywindow.document.write('<h2>ERROR DE ACCESO !! </h2>');
    mywindow.document.write(
      '<h3>Tipo de error: ' + 'Mas de un registro' + '</h3>'
    );
    // tslint:disable-next-line: max-line-length
    mywindow.document.write(
      '<p>Fecha: ' +
      date.toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
      }) +
      '</p>'
    );
    mywindow.document.write(
      '<p>Usuario ya registrado por hoy' + this.cardEmployee + '</p>'
    );
    mywindow.document.write('<p>Empleado: ' + this.nameEmployee + '</p>');
    mywindow.document.close(); // necesario para IE >= 10 this.idRecords
    mywindow.print();
    mywindow.close();
    this.opcion = false;
  }

}
