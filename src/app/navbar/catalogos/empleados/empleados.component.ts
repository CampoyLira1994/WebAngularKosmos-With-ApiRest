import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';

import { EmpleadosService } from './../../../shared/services/1empleados.service/empleados.service';
import { DerechosService } from './../../../shared/services/1derechos.service/derechos.service';
import { ServiciosService } from './../../../shared/services/1servicios.service/servicios.service';

import { Empleados } from './../../../shared/models/empleados.model';
import { Derechos } from './../../../shared/models/derechos.model';
import { Servicios } from './../../../shared/models/servicios.model';

// Variabe para notificación toster
declare var $: any;


@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.css']
})
export class EmpleadosComponent implements OnInit {

  constructor(private service: EmpleadosService,
              private derechosService: DerechosService,
              private serviciosService: ServiciosService) {
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

  }
  // variables servicios ***********************************************
  servicios: Servicios[];
  idServicio: number;

  // Variables de Derechos ****************************************************
  derechos: Derechos[];
  derechosServi: Derechos[];
  derecho: Derechos;
  derechoEstatus = false;
  idDelete: number;

  // to open input
  btnAgregarDrecho = true;
  toOpenAddDerechosBool = false;
  toOpenEditDerechosBool = false;

  // Derecho
  DereidDerecho: number;
  DereidServicio: number;
  DereidEmpleado: number;
  DerenumeroServicios: number;

  // DerechoEdit

  EDereidDerecho: number;
  EDereidServicio: number;
  EDereidEmpleado: number;
  EDerenumeroServicios: number;

  // Empelados ****************************************************

  // Variables para cambio en botones de carga masiva
  masv = false;
  btnAgregar = false;

  // Variables para carga de excel
  data: any[];
  documento: any;

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
  idDerecho: number;
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
  EidDerecho: number;
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
    this.serviciosService.getServicios().subscribe((data)=>{
    this.servicios = data;
    });

    // console.log(date, 'fecha ngOnInit');
    this.getEmpleados();
  }

  // tslint:disable-next-line: typedef
  getEmpleados() {
    console.log('se ejecuto this.getEmpleados();');
    this.service.getEmpleados().subscribe((data) => {
      this.empleados = data;
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
    this.service
      .createEmpleado({
        idEmpleado: this.idEmpleado,
        idEstatus: this.idEstatus,
        idTipoUsuario: this.idTipoUsuario,
        idEmpresa: this.idEmpresa,
        idArea: this.idArea,
        idDerecho: 0,
        credencial: this.credencial,
        contraseña: this.contrasena,
        nombres: this.nombres,
        apellidos: this.apellidos,
        rFC: this.rFC,
        cDC: this.cDC,
        telefono1: this.telefono1,
        telefono2: this.telefono2,
        radio: this.radio,
        celular: this.celular,
        email: this.email,
        calleYNumero: this.calleYNumero,
        colonia: this.colonia,
        delegacionMunicipio: this.delegacionMunicipio,
        cp: this.cp
      })
      .subscribe((data) => {
        this.getEmpleados();
        this.refresh();
        $('.toast1').toast('show');
        console.log('Agregado');
      });
  }

  // tslint:disable-next-line: typedef
  editEmpleado(ValidDerecho) {
    this.service
      .editEmpleado({
        idEmpleado: this.EidEmpleado,
        idEstatus: this.EidEstatus,
        idTipoUsuario: this.EidTipoUsuario,
        idEmpresa: this.EidEmpresa,
        idArea: this.EidArea,
        idDerecho: ValidDerecho,
        credencial: this.Ecredencial,
        contraseña: this.Econtrasena,
        nombres: this.Enombres,
        apellidos: this.Eapellidos,
        rFC: this.ErFC,
        cDC: this.EcDC,
        telefono1: this.Etelefono1,
        telefono2: this.Etelefono2,
        radio: this.Eradio,
        celular: this.Ecelular,
        email: this.Eemail,
        calleYNumero: this.EcalleYNumero,
        colonia: this.Ecolonia,
        delegacionMunicipio: this.EdelegacionMunicipio,
        cp: this.Ecp
      })
      .subscribe((data) => {
        if (ValidDerecho === 0){
        this.getEmpleados();
        this.refresh();
        $('.toast').toast('show');
        }
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
    this.EidDerecho = empleado.idDerecho;
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
  selecEmpelado(nombre){
    this.toOpenAddEmpleadoBool = false;
    this.toOpenEditEmpleadoBool = true;

    // tslint:disable-next-line: triple-equals
    this.empleado = this.empleados.find(x => x.nombres == nombre);
    // tslint:disable-next-line: no-conditional-assignment
    if (this.empleado != null){

      // tslint:disable-next-line: triple-equals
      if (this.empleado.idDerecho === 0){
        this.derechoEstatus = true;
      }else{
        this.derechoEstatus = false;
      }

      this.EidEmpleado = this.empleado.idEmpleado;
      this.EidEstatus = this.empleado.idEstatus;
      this.EidTipoUsuario = this.empleado.idTipoUsuario;
      this.EidEmpresa = this.empleado.idEmpresa;
      this.EidArea = this.empleado.idArea;
      this.EidDerecho = this.empleado.idDerecho;
      this.Ecredencial = this.empleado.credencial;
      this.Econtrasena = this.empleado.contraseña;
      this.Enombres = this.empleado.nombres;
      this.Eapellidos = this.empleado.apellidos;
      this.ErFC = this.empleado.rFC;
      this.EcDC = this.empleado.cDC;
      this.Etelefono1 = this.empleado.telefono1;
      this.Etelefono2 = this.empleado.telefono2;
      this.Eradio = this.empleado.radio;
      this.Ecelular = this.empleado.celular;
      this.Eemail = this.empleado.email;
      this.EcalleYNumero = this.empleado.calleYNumero;
      this.Ecolonia = this.empleado.colonia;
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
    this.EidDerecho = null;
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
    this.idDerecho = 0;
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
    this.documento = null;
  }

  // tslint:disable-next-line: typedef
  cerrartoast(){
    $('.toast').toast('dispose');
  }


    // tslint:disable-next-line: typedef
    importASXLSX(uploadedFile){
      this.btnAgregar = false;
      this.masv = false;
      console.log(uploadedFile, 'uploadedFile');
      console.log(uploadedFile.target.files, '2uploadedFile');
      this.onFileChangeEmpleado(uploadedFile);
      // this.getreportes();
      return this.getEmpleados();
    }


    // tslint:disable-next-line: typedef
    onFileChangeEmpleado(documento) {
      const target: DataTransfer = (this.documento.target) as DataTransfer;
      if (target.files.length !== 1) { throw new Error('Cannot use multiple files'); }
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const bstr: string = e.target.result;
        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });
        const wsname: string = wb.SheetNames[0];
        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        this.data = (XLSX.utils.sheet_to_json(ws, { header: 1, defval: null }));
        console.log('data: ', this.data);
        // aplico slice para omitir los encabezados.
        const x = this.data.slice(1);
        console.log('x: ', x);
        x.forEach(empelado => {
          console.log(empelado, 'empleado');
          if (empelado[1] != null && empelado[2] != null && empelado[3] != null && empelado[4] != null
            && empelado[7] != null && empelado[8] != null){
          this.service.createEmpleado({
            idEmpleado: empelado[0],
            idEstatus: empelado[1],
            idTipoUsuario: empelado[2],
            idEmpresa: empelado[3],
            idArea: empelado[4],
            idDerecho: empelado[5],
            credencial: empelado[6],
            contraseña: empelado[7],
            nombres: empelado[8],
            apellidos: empelado[9],
            rFC: empelado[10],
            cDC: empelado[11],
            telefono1: empelado[12],
            telefono2: empelado[13],
            radio: empelado[14],
            celular: empelado[15],
            email: empelado[16],
            calleYNumero: empelado[17],
            colonia: empelado[18],
            delegacionMunicipio: empelado[19],
            cp: empelado[20]
           }).subscribe((data) => {
            this.getEmpleados();
          });
        }
        });
      };

      reader.readAsBinaryString(target.files[0]);

    }

    // tslint:disable-next-line: typedef
    getDocument(evt: any){
      this.documento =  evt;
      if (this.documento != null){
      // this.masv = false;
      this.btnAgregar = true;
      }else{
        $('.toast').toast('show');
        $('.toast1').toast('show');
      }
    }

    // tslint:disable-next-line: typedef funcion ocultar botones de carga masiva
    excelButton(){
      this.toOpenAddEmpleadoBool = false;
      // tslint:disable-next-line: no-conditional-assignment decicion para ocultar unos o otros botones
      // tslint:disable-next-line: triple-equals
      if (this.masv == false){
        this.masv = true;
      }else{
        this.masv = false;
      }

    }

    // tslint:disable-next-line: typedef
    cancelarexcel(){
      this.toOpenAddEmpleadoBool = true;
    }

    // Derecheos *************************************************************************

    // tslint:disable-next-line: typedef
    modDerecho(){
    this.refreshDerechos();
    this.derechosService.getDerechos().subscribe((data) => {
    this.derechos = data.filter((x) => x.idEmpleado === this.empleado.idEmpleado);
    console.log(this.derechos);
    });
    }

    // tslint:disable-next-line: typedef
    abirAregarDerecho(){
      this.toOpenAddDerechosBool = true;
      this.toOpenEditDerechosBool = false;
      this.btnAgregarDrecho = false;
    }

    // tslint:disable-next-line: typedef
    abirEditDerecho(derecho){

      this.EDereidDerecho = derecho.idDerecho;
      this.EDereidServicio = derecho.idServicio;
      this.EDereidEmpleado = derecho.idEmpleado;
      this.EDerenumeroServicios = derecho.numeroServicios;

      this.toOpenEditDerechosBool = true;
      this.toOpenAddDerechosBool = false;
      this.btnAgregarDrecho = true;
    }

    // tslint:disable-next-line: typedef
    refreshDerechos(){
      this.btnAgregarDrecho = true;
      this.toOpenAddDerechosBool = false;
      this.toOpenEditDerechosBool = false;
    }

    // tslint:disable-next-line: typedef
    agrearDerecho(){
      console.error(this.DereidServicio,"this.DereidServiciothis.DereidServicio");
      console.log(this.derechosServi, 'this.derechosServi');
      if (this.derechosServi.length === 0){
      this.derechosService.createDerecho({
        idDerecho: this.DereidDerecho,
        idServicio: this.DereidServicio,
        idEmpleado: this.empleado.idEmpleado,
        numeroServicios: this.DerenumeroServicios
      }).subscribe((data) => {
        this.editEmpleado(this.empleado.idEmpleado);
        this.refreshDerechos();
        this.modDerecho();
      });
      }

    }

    // tslint:disable-next-line: typedef
    editarDerecho(){
      console.log(this.EDereidDerecho, this.EDereidServicio, this.EDereidEmpleado, this.EDerenumeroServicios);
      this.derechosService.editDerecho({
        idDerecho: this.EDereidDerecho,
        idServicio: this.EDereidServicio,
        idEmpleado: this.EDereidEmpleado,
        numeroServicios: this.EDerenumeroServicios
      }).subscribe((data) => {
        this.refreshDerechos();
        this.modDerecho();
      });
    }

    // tslint:disable-next-line: typedef
    deleteDerecho(){
    this.derechosService.deleteDerecho(this.idDelete).subscribe(()=>{
    });
    }

      // tslint:disable-next-line: typedef
    delteID(derecho) {
      this.idDelete = derecho.idDerecho;
    }

    // tslint:disable-next-line: typedef
    selectServicio(DereidServicio){
      this.derechosServi = this.derechos.filter((x) => x.idServicio == DereidServicio);
    }


  }
