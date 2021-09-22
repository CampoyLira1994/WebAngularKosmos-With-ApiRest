import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ServiciosService } from './../../../shared/services/1servicios.service/servicios.service';
import { SubServicuiosService } from './../../../shared/services/1subServicios.service/sub-servicuios.service';

import { SubServicios } from './../../../shared/models/subServicios.model';
import { Servicios } from './../../../shared/models/servicios.model';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css'],
})
export class ServicioComponent implements OnInit {
  constructor(
    private services: ServiciosService,
    private subServicuiosService: SubServicuiosService
  ) {}

  // SUBSERVICIOS********************

  subServicio: SubServicios;
  idSubServicio: number;
  subServicios: SubServicios[];
  idSubDelete: number;

  // subServicio variables
  subIdSubServicio: number;
  subIdServicio: number;
  subNombreSubServicio: string;
  subInicio: Date;
  subFin: Date;
  subCosto: number;
  validarSubServi: number;

  // to open input SubServicios
  toOpenAddSUBServicioBool = false;
  toOpenEditSUBServicioBool = false;

  // Status Edit && Delete
  ESubidSubServicio: number;
  ESubidServicio: number;
  ESubnombreServicio: string;
  ESubcosto: number;
  ESubinicio: Date;
  ESubfin: Date;

  // SUBSERVICIOS********************

  // SERVICIOS
  servicios: Servicios[];
  servicio: Servicios;
  idDelete: number;

  // to open input
  toOpenAddServicioBool = false;
  toOpenEditServicioBool = false;

  // Status add
  idServicio: number;
  idEmpresa: number;
  nombreServicio: string;
  costo: number;
  inicio: Date;
  fin: Date;
  subServicioid: number;
  // Solo Fecha
  hInicio: Date;
  hFin: Date;

  // Status Edit && Delete
  EidServicio: number;
  EidEmpresa: number;
  EnombreServicio: string;
  Ecosto: number;
  Einicio: Date;
  Efin: Date;
  EsubServicio: number;
  // SERVICIOS

  ngOnInit(): void {
    this.getServicios();
  }

  // tslint:disable-next-line: typedef
  getServicios() {
    this.services.getServicios().subscribe((data) => {
      this.servicios = data;
      console.log(this.servicios, 'this.servicios');
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, status_1 = this.servicios;
        i < this.servicios.length;
        i++
      ) {
        const servicio = status_1[i];
        this.servicios[i] = servicio;
      }
      this.idServicio = this.servicios.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addServicio() {
    this.services
      .createServicio({
        idServicio: this.idServicio,
        idEmpresa: this.idEmpresa,
        nombreServicio: this.nombreServicio,
        costo: this.costo,
        inicio: this.inicio,
        fin: this.fin,
        subServicio: null, // Cambir dentro de la interface
      })
      .subscribe((data) => {
        this.getServicios();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  addServicioH() {
    this.services
      .createServicio({
        idServicio: this.idServicio,
        idEmpresa: this.idEmpresa,
        nombreServicio: this.nombreServicio,
        costo: this.costo,
        inicio: this.hInicio,
        fin: this.hFin,
        subServicio: this.subServicioid, // Cambir dentro de la interface
      })
      .subscribe((data) => {
        this.getServicios();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editServicio() {
    this.services
      .editServicio({
        idServicio: this.EidServicio,
        idEmpresa: this.EidEmpresa,
        nombreServicio: this.EnombreServicio,
        costo: this.Ecosto,
        inicio: this.Einicio,
        fin: this.Efin,
        subServicio: this.EsubServicio,
      })
      .subscribe((data) => {
        this.getServicios();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  delteServicio() {
    this.services.deleteServicio(this.idDelete).subscribe(() => {
      this.getServicios();
      this.refresh();
    });
  }

  // tslint:disable-next-line: typedef
  delteID(servicio) {
    console.log(servicio);
    this.idDelete = servicio.idServicio;
    console.log(this.idDelete);
  }

  // tslint:disable-next-line: typedef
  toOpenEditServicio(servicio) {
    this.toOpenAddServicioBool = false;
    this.toOpenEditServicioBool = true;
    console.log(servicio);
    this.EidServicio = servicio.idServicio;
    this.EidEmpresa = servicio.idEmpresa;
    this.EnombreServicio = servicio.nombreServicio;
    this.Ecosto = servicio.costo;
    this.Einicio = servicio.inicio;
    this.Efin = servicio.fin;
    this.EsubServicio = servicio.subServicio;
  }

  // tslint:disable-next-line: typedef
  toOpenAddServicio() {
    this.toOpenEditServicioBool = false;
    this.toOpenAddServicioBool = true;
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.EidServicio = null;
    this.EidEmpresa = null;
    this.EnombreServicio = null;
    this.Ecosto = null;
    this.Einicio = null;
    this.Efin = null;
  }

  // SUbServicio***************************************************************

  // tslint:disable-next-line: typedef
  GetSubServicio(SubServicio) {
    this.servicio = SubServicio;
    console.log(SubServicio.idServicio, 'Jala');
    this.idSubServicio = SubServicio.idServicio;
    // tslint:disable-next-line: triple-equals
    if (this.idSubServicio != undefined && this.idSubServicio != null && this.idSubServicio != 0)
     {
      this.subServicuiosService.getSubServicios().subscribe((data) => {
        this.subServicios = data.filter(
          // tslint:disable-next-line: triple-equals
          (subServicios) => subServicios.idServicio == this.idSubServicio
        );

        console.log(this.subServicios);
      });
    } else {
      console.error(
        'idSubServicio undefined o null o 0 cnsultar con admin ' + this.servicio.idServicio);
    }
  }

  // tslint:disable-next-line: typedef
  addSubServicio() {
    // tslint:disable-next-line: triple-equals
    if (this.servicio.subServicio == null){
         this.services
      .editServicio({
        idServicio: this.servicio.idServicio,
        idEmpresa: this.servicio.idEmpresa,
        nombreServicio: this.servicio.nombreServicio,
        costo: this.servicio.costo,
        inicio: this.servicio.inicio,
        fin: this.servicio.fin,
        subServicio: this.servicio.idServicio,
      })
      .subscribe((data) => {
        this.subServicuiosService
        .createSubServicio({
          idSubServicio: this.subIdSubServicio,
          idServicio: this.idSubServicio,
          nombreSubServicio: this.subNombreSubServicio,
          inicio: this.subInicio,
          fin: this.subFin,
          costo: this.subCosto
        })
        .subscribe(() => {
          this.GetSubServicio(this.idSubServicio);
          this.refreshSub();
        });
        this.getServicios();
        this.refresh();
      });
    }else{
      this.subServicuiosService
      .createSubServicio({
        idSubServicio: this.subIdSubServicio,
        idServicio: this.idSubServicio,
        nombreSubServicio: this.subNombreSubServicio,
        inicio: this.subInicio,
        fin: this.subFin,
        costo: this.subCosto
      })
      .subscribe((data) => {
        this.GetSubServicio(this.servicio);
        this.refreshSub();
      });

    }
  }

    // tslint:disable-next-line: typedef
  editSubServicio() {
    this.subServicuiosService
      .editSubServicio({
        idSubServicio: this.ESubidSubServicio,
        idServicio: this.ESubidServicio,
        nombreSubServicio: this.ESubnombreServicio,
        costo: this.ESubcosto,
        inicio: this.ESubinicio,
        fin: this.ESubfin
      })
      .subscribe((data) => {
        this.GetSubServicio(this.servicio);
        this.refreshSub();
      });
  }

  // tslint:disable-next-line: typedef
  delteIDSUB(servicio) {
    console.log(servicio, 'Subservicio');
    this.idSubDelete = servicio.idSubServicio;
    console.log(this.idSubDelete);
  }

  // tslint:disable-next-line: typedef
  delteSubServicio() {
    this.subServicuiosService
      .deleteSubServicio(this.idSubDelete)
      .subscribe(() => {
        this.refreshSub();
      });
  }

  // tslint:disable-next-line: typedef
  toOpenEditSubServicio(subServicio) {
    console.log(subServicio);
    this.toOpenAddSUBServicioBool = false;
    this.toOpenEditSUBServicioBool = true;

    this.ESubidSubServicio = subServicio.idSubServicio;
    this.ESubidServicio = subServicio.idServicio;
    this.ESubnombreServicio = subServicio.nombreSubServicio;
    this.ESubcosto = subServicio.costo;
    this.ESubinicio = subServicio.inicio;
    this.ESubfin = subServicio.fin;
  }

  // tslint:disable-next-line: typedef
  toOpenAddSubServicio() {
    this.toOpenAddSUBServicioBool = true;
    this.toOpenEditSUBServicioBool = false;
  }

  // tslint:disable-next-line: typedef
  refreshSub() {
    this.ESubidSubServicio = null;
    this.ESubidServicio = null;
    this.ESubnombreServicio = null;
    this.ESubcosto = null;
    this.ESubinicio = null;
    this.ESubfin = null;

    this.toOpenAddSUBServicioBool = false;
    this.toOpenEditSUBServicioBool = false;
  }
}
