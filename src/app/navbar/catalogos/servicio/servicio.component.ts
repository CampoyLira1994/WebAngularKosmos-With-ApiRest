import { Component, OnInit } from '@angular/core';

import { ServiciosService } from './../../../shared/services/1servicios.service/servicios.service';

import { Servicios } from './../../../shared/models/servicios.model';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  constructor(private services: ServiciosService) {}

  servicios: Servicios[];
  idDelete: number;

  // to open input
  toOpenAddServicioBool = false;
  toOpenEditServicioBool = false;

  // Status add
  idServicio: number;
  idEmpresa: number;
  nombreServicio: string;
  inicio: Date;
  fin: Date;
  // Solo Fecha
  hInicio: Date;
  hFin: Date;

  // Status Edit && Delete
  EidServicio: number;
  EidEmpresa: number;
  EnombreServicio: string;
  Einicio: Date;
  Efin: Date;

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
          inicio: this.inicio,
          fin: this.fin
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
            inicio: this.hInicio,
            fin: this.hFin
        })
        .subscribe((data) => {
          this.getServicios();
          this.refresh();
        });
    }

  // tslint:disable-next-line: typedef
  edieServicio() {
    this.services
      .editServicio({
          idServicio: this.EidServicio,
          idEmpresa: this.EidEmpresa,
          nombreServicio: this.EnombreServicio,
          inicio: this.Einicio,
          fin: this.Efin
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
      delteID(servicio){
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
    this.Einicio = servicio.inicio;
    this.Efin = servicio.fin;
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
    this.Einicio = null;
    this.Efin = null;
  }
}
