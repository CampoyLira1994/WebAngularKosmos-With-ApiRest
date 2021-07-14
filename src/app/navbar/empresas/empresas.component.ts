import { Component, OnInit } from '@angular/core';

import { EmpresasService } from './../../shared/services/1empresas.service/empresas.service';

import { Empresas } from './../../shared/models/empresas.model';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  constructor(private service: EmpresasService) { }


  empresas: Empresas[];

  // to open input
  toOpenAddEmpresaBool = false;
  toOpenEditEmpresaBool = false;

  // Empresa add

  idEmpresa: number;
  nombreEmpresa: string;
  direccion1: string;
  direccion2: string;
  estado: string;
  ciudad: string;
  email: string;
  citioWeb: string;
  imagen: any;
  imagenRuta: string;

  // Empresa Edit && Delete

  EidEmpresa: number;
  EnombreEmpresa: string;
  Edireccion1: string;
  Edireccion2: string;
  Eestado: string;
  Eciudad: string;
  Eemail: string;
  EcitioWeb: string;
  Eimagen: any;
  EimagenRuta: string;


  ngOnInit(): void {
    // this.service.getUsersId(1).subscribe(data => {
    //   console.log(data);
    // });

    this.getEmpresas();
  }

  // tslint:disable-next-line: typedef
  getEmpresas() {
    this.service.getEmpresa().subscribe((data) => {
      this.empresas = data;
      console.log(data, 'data');
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, empresas_1 = this.empresas;
        i < this.empresas.length;
        i++
      ) {
        const empleado = empresas_1[i];
        this.empresas[i] = empleado;
      }
      this.idEmpresa = this.empresas.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addEmpresa() {
    this.service
      .createEmpresa({
        idEmpresa: this.idEmpresa,
        nombreEmpresa: this.nombreEmpresa,
        direccion1: this.direccion1,
        direccion2: this.direccion2,
        estado: this.estado,
        ciudad: this.ciudad,
        email: this.email,
        citioWeb: this.citioWeb,
        imagen: this.imagen,
        imagenRuta: this.imagenRuta
      })
      .subscribe((data) => {
        this.getEmpresas();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editEmpresa() {
    this.service
      .editEmpresa({
        idEmpresa: this.EidEmpresa,
        nombreEmpresa: this.EnombreEmpresa,
        direccion1: this.Edireccion1,
        direccion2: this.Edireccion2,
        estado: this.Eestado,
        ciudad: this.Eciudad,
        email: this.Eemail,
        citioWeb: this.EcitioWeb,
        imagen: this.Eimagen,
        imagenRuta: this.EimagenRuta
      })
      .subscribe((data) => {
        this.getEmpresas();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  delteEmployee(EidEmpresa) {
    this.service.deleteEmpresa(EidEmpresa).subscribe();
    this.getEmpresas();
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  toOpenAddEmployee() {
    this.toOpenEditEmpresaBool = false;
    this.toOpenAddEmpresaBool = true;
  }

  // tslint:disable-next-line: typedef
  toOpenEditEmployee(empresa) {
    this.toOpenAddEmpresaBool = false;
    this.toOpenEditEmpresaBool = true;
    // console.log(empresa, 'EidEmpresa');
    this.EidEmpresa = empresa.idEmpresa;
    this.EnombreEmpresa = empresa.nombreEmpresa;
    this.Edireccion1 = empresa.direccion1;
    this.Edireccion2 = empresa.direccion2;
    this.Eestado = empresa.estado;
    this.Eciudad = empresa.ciudad;
    this.Eemail =  empresa.email;
    this.EcitioWeb = empresa.citioWeb;
    this.Eimagen = empresa.imagen;
    this.EimagenRuta = empresa.imagenRuta;

  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.idEmpresa = null;
    this.EidEmpresa = null;
    this.EnombreEmpresa = null;
    this.Edireccion1 = null;
    this.Edireccion2 = null;
    this.Eestado = null;
    this.Eciudad = null;
    this.Eemail =  null;
    this.EcitioWeb = null;
    this.Eimagen = null;
    this.EimagenRuta = null;
  }
}
