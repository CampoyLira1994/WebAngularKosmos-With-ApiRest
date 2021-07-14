import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { EmpleadosService } from './../../../shared/services/1empleados.service/empleados.service';

import { Empleados } from './../../../shared/models/empleados.model';

declare var $: any;

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private service: EmpleadosService) { }


  empleados: Empleados[];
  empleado: Empleados;

  // to open input
  toOpenAddEmpleadoBool = true;
  toOpenEditEmpleadoBool = false;

  // Empoyee add
  idEmpleado: number;
  idEstatus = 1;
  idTipoUsuario = 1;
  idEmpresa = 1;
  idArea = '1';
  credencial: number;
  contrasena: string;
  nombres: string;
  apellidos: string;
  rFC: string;
  cDC: string;
  telefono1: string;
  telefono2: string;
  radio: string;
  celular: string;
  email: string;
  calleYNumero: string;
  colonia: string;
  delegacionMunicipio: string;
  cp: any;

  // Empoyee Edit && Delete
  EidEmpleado: number;
  EidEstatus: number;
  EidTipoUsuario: number;
  EidEmpresa: number;
  EidArea: string;
  Ecredencial: number;
  Econtrasena: string;
  Enombres: string;
  Eapellidos: string;
  ErFC: string;
  EcDC: string;
  Etelefono1: string;
  Etelefono2: string;
  Eradio: string;
  Ecelular: string;
  Eemail: string;
  EcalleYNumero: string;
  Ecolonia: string;
  EdelegacionMunicipio: string;
  Ecp: any;


  ngOnInit(): void {
    // this.service.getUsersId(1).subscribe(data => {
    //   console.log(data);
    // });

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

    this.getEmpleados();
  }

  // tslint:disable-next-line: typedef
  getEmpleados() {
    this.service.getEmpleados().subscribe((data) => {
      this.empleados = data;
      console.log(this.empleados, 'Empleados');
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, empleados_1 = this.empleados;
        i < this.empleados.length;
        i++
      ) {
        const empleado = empleados_1[i];
        this.empleados[i] = empleado;
      }
      this.idEmpleado = this.empleados.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addEmpleadoAdd() {
    console.log('Agregado');
    this.service
      .createEmpleado({
        idEmpleado: this.idEmpleado,
        idEstatus: this.idEstatus,
        idTipoUsuario: this.idTipoUsuario,
        idEmpresa: this.idEmpresa,
        idArea: this.idArea,
        credencial: this.credencial,
        contraseña: this.contrasena,
        nombres: this.nombres,
        apellidos: this.apellidos,
        RFC: this.rFC,
        CDC: this.cDC,
        telefono1: this.telefono1,
        telefono2: this.telefono2,
        radio: this.radio,
        celular: this.celular,
        email: this.email,
        calleYNumero: this.calleYNumero,
        Colonia: this.colonia,
        delegacionMunicipio: this.delegacionMunicipio,
        cp: this.cp
      })
      .subscribe((data) => {
        this.getEmpleados();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editEmpleado() {
    this.service
      .editEmpleado({
        idEmpleado: this.EidEmpleado,
        idEstatus: this.EidEstatus,
        idTipoUsuario: this.EidTipoUsuario,
        idEmpresa: this.EidEmpresa,
        idArea: this.EidArea,
        credencial: this.Ecredencial,
        contraseña: this.Econtrasena,
        nombres: this.Enombres,
        apellidos: this.Eapellidos,
        RFC: this.ErFC,
        CDC: this.EcDC,
        telefono1: this.Etelefono1,
        telefono2: this.Etelefono2,
        radio: this.Eradio,
        celular: this.Ecelular,
        email: this.Eemail,
        calleYNumero: this.EcalleYNumero,
        Colonia: this.Ecolonia,
        delegacionMunicipio: this.EdelegacionMunicipio,
        cp: this.Ecp
      })
      .subscribe((data) => {
        this.getEmpleados();
        this.refresh();
        $('.toast').toast('show');
      });
  }

  // tslint:disable-next-line: typedef
  delteEmpleado(EidEmpleado) {
    console.log(EidEmpleado);
    this.service.deleteEmpleado(EidEmpleado).subscribe(() =>
      {
        this.getEmpleados();
        this.refresh();
        $('.toast').toast('show');
      });
  }

  // tslint:disable-next-line: typedef
  toOpenAddEmpleado() {
    this.toOpenEditEmpleadoBool = false;
    this.toOpenAddEmpleadoBool = true;
    this.idEmpleado = 0;

  }

  // tslint:disable-next-line: typedef
  toOpenEditEmpleado(empleado) {
    this.toOpenAddEmpleadoBool = false;
    this.toOpenEditEmpleadoBool = true;
    console.log(empleado);
    this.EidEmpleado = empleado.idEmpleado = empleado.idEmpleado;
    this.EidEstatus = empleado.idEstatus;
    this.EidTipoUsuario = empleado.idTipoUsuario;
    this.EidEmpresa = empleado.idEmpresa;
    this.EidArea = empleado.idArea;
    this.Ecredencial = empleado.credencial;
    this.Econtrasena = empleado.contraseña;
    this.Enombres = empleado.nombres;
    this.Eapellidos = empleado.apellidos;
    this.ErFC = empleado.rFC;
    this.EcDC = empleado.cDC;
    this.Etelefono1 = empleado.telefono1;
    this.Etelefono2 = empleado.telefono2;
    this.Eradio = empleado.radio;
    this.Ecelular = empleado.celular;
    this.Eemail = empleado.email;
    this.EcalleYNumero = empleado.calleYNumero;
    this.Ecolonia = empleado.colonia;
    this.EdelegacionMunicipio = empleado.delegacionMunicipio;
    this.cp = empleado.cp;

  }

  // tslint:disable-next-line: typedef
  click(nombre){
    this.toOpenAddEmpleadoBool = false;
    this.toOpenEditEmpleadoBool = true;

    // tslint:disable-next-line: triple-equals
    this.empleado = this.empleados.find(x => x.nombres == nombre);
    // tslint:disable-next-line: no-conditional-assignment
    if (this.empleado != null){

      this.EidEmpleado = this.empleado.idEmpleado;
      this.EidEstatus = this.empleado.idEstatus;
      this.EidTipoUsuario = this.empleado.idTipoUsuario;
      this.EidEmpresa = this.empleado.idEmpresa;
      this.EidArea = this.empleado.idArea;
      this.Ecredencial = this.empleado.credencial;
      this.Econtrasena = this.empleado.contraseña;
      this.Enombres = this.empleado.nombres;
      this.Eapellidos = this.empleado.apellidos;
      this.ErFC = this.empleado.RFC;
      this.EcDC = this.empleado.CDC;
      this.Etelefono1 = this.empleado.telefono1;
      this.Etelefono2 = this.empleado.telefono2;
      this.Eradio = this.empleado.radio;
      this.Ecelular = this.empleado.celular;
      this.Eemail = this.empleado.email;
      this.EcalleYNumero = this.empleado.calleYNumero;
      this.Ecolonia = this.empleado.Colonia;
      this.EdelegacionMunicipio = this.empleado.delegacionMunicipio;
      this.Ecp = this.empleado.cp;


      // tslint:disable-next-line: no-conditional-assignment
      console.log(this.empleado, 'Click');
    }else{
      console.log(this.empleado, 'Error');
    }
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.EidEmpleado = null;
    this.EidEstatus = null;
    this.EidTipoUsuario = null;
    this.EidEmpresa = null;
    this.EidArea = null;
    this.Ecredencial = null;
    this.Econtrasena = null;
    this.Enombres = null;
    this.Eapellidos = null;
    this.ErFC = null;
    this.EcDC = null;
    this.Etelefono1 = null;
    this.Etelefono2 = null;
    this.Eradio = null;
    this.Ecelular = null;
    this.Eemail = null;
    this.EcalleYNumero = null;
    this.Ecolonia = null;
    this.EdelegacionMunicipio = null;
    this.Ecp = null;
    this.idEmpleado = null;
    this.idEstatus = 1;
    this.idTipoUsuario = 1;
    this.idEmpresa = 1;
    this.idArea = '1';
    this.credencial = null;
    this.contrasena = null;
    this.nombres = null;
    this.apellidos = null;
    this.rFC = null;
    this.cDC = null;
    this.telefono1 = null;
    this.telefono2 = null;
    this.radio = null;
    this.celular = null;
    this.email = null;
    this.calleYNumero = null;
    this.colonia = null;
    this.delegacionMunicipio = null;
    this.cp = null;
  }

  // tslint:disable-next-line: typedef
  cerrartoast(){
    $('.toast').toast('dispose');
  }
}
