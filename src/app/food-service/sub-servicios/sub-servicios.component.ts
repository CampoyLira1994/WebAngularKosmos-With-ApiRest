import { Component, Input, OnInit } from '@angular/core';

import { Empleados } from '../../shared/models/empleados.model';
import { SubServicios } from './../../shared/models/subServicios.model';
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

  subServicios: SubServicios[];
  subServicio: SubServicios;
  selctSubServicio: SubServicios;
  newSubServicios: SubServicios[];

  contadorRecordsNew = 0;

  fecha: Date;
  fechaHoy: Date;
  fechaStr: string;


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
  servicio: SubServicios;
  servicios: SubServicios[];
  saludo: string;

  // Derechos
  derechos: Derechos[];
  numeroServicios: number;
  derecho: Derechos;

  // Control opcines
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
    $('.showtoast').click(function() {
      $('.toast').toast('show');
    });

    // tslint:disable-next-line: only-arrow-functions
    // tslint:disable-next-line: typedef
    $('.closetoast').click(function() {
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

      this.idEmployee = this.Employee.idEmpleado;
      // Busca y selecciona los derechos del usuario o empleado encontrado para poder asignarselo en el
      // this.numeroServicios
      this.derecho = this.derechos.find((x) => x.idEmpleado === this.idEmployee);

      this.numeroServicios = this.derecho.numeroServicios;

      // -----------------------------------------------------

      this.reporteNew = this.reportes.filter((elements) => { });
      this.reportes.forEach((element, i) => {

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
          console.log(this.fecha, '----------', this.fechaHoy);
          // Valida que el egistro dea del dia de hoy para poder der contemplado o tomado en cuenta dentro del PUSH
          // tslint:disable-next-line: max-line-length
          if ( this.fecha.getDate() === this.fechaHoy.getDate() && this.fecha.getMonth() === this.fechaHoy.getMonth() && this.fecha.getFullYear() === this.fechaHoy.getFullYear()){
            this.reporteNew.push(element);
            this.contadorRecordsNew = this.reporteNew.length;
            console.log(this.reporteNew.length, 'this.recordsNew.length');
          }


        }


        if (this.reportes.length === i + 1) {

          console.log(this.numeroServicios, 'this.numeroServicios', this.contadorRecordsNew, 'this.recordsNew.length + 1');

          // tslint:disable-next-line: no-conditional-assignment
          if (this.numeroServicios > this.contadorRecordsNew) {
            // tslint:disable-next-line: no-conditional-assignment
            this.estatusEmployee = 'Acceso Correcto';
            this.nameEmployee = this.Employee.nombres + this.Employee.apellidos;
            this.saludo = 'Bienvenido';
            this.opcion = true;

            // 77777777777777777777777777777777777777777777777777777777777777777777777
            this.newSubServicios = [];
            this.subServicuiosService.getSubServicios().subscribe((data) => {
              this.subServicios = data;
              // tslint:disable-next-line: no-shadowed-variable
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
            // 77777777777777777777777777777777777777777777777777777777777777777777777

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



  // tslint:disable-next-line: typedef
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

  // tslint:disable-next-line: typedef
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
