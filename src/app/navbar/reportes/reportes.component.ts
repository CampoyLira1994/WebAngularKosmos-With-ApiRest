import { Component, OnInit } from '@angular/core';

import { ReportesService } from './../../shared/services/1reportes.service/reportes.service';
import { ServiciosService } from './../../shared/services/1servicios.service/servicios.service';
import { ExcelService } from './../../shared/services/excel.service/excel.service';

// import { Reportes } from './../../shared/models/reportes.modl';
import { Reportes } from './../../shared/models/reportes.model';
import { Servicios } from './../../shared/models/servicios.model';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})


export class ReportesComponent implements OnInit {

  reportes: Reportes[];
  servicios: Servicios[];

  inicio: Date;
  fin: Date;
  filterReportes: Reportes[];
  reportes2: Reportes[];

  servicio = 0;

  constructor(private servicioReport: ReportesService,
              private sevicioService: ServiciosService,
              private excelService: ExcelService) { }

  ngOnInit(): void {
    this.getreportes();
    this.sevicioService.getServicios().subscribe((data) => {
      console.log(data, 'sevicioService');
      this.servicios = data;
    });
  }

  // tslint:disable-next-line: typedef
  getreportes(){
    this.servicioReport.getReportes().subscribe((data) => {

      this.reportes = data;
      this.reportes2 = data;
      console.log(this.reportes, 'this.reportes');
      // this.reportes.forEach(element => {
        //  console.log(element.fechaStrnig, 'element.fechaString');
        //  element.fecha = new Date(element.fecha.toString().substr(0,10) + 'GMT-0500');
        //  console.log(element.fecha, 'element.fecha (10)');
        //  element.fecha = new Date(element.fecha.toString().substr(0,15));
        //  console.log(element.fecha, 'element.fecha (15)');
      // });

    });
  }

  // tslint:disable-next-line: typedef
  filtrar(){
    this.reportes = this.reportes2;
    console.log(this.servicio);

    // tslint:disable-next-line: triple-equals
    if (this.inicio == null && this.fin == null){
      // tslint:disable-next-line: triple-equals
      if (this.servicio == 0){
        this.reportes = this.reportes2;
      }else{
        // tslint:disable-next-line: triple-equals
        this.reportes = this.reportes.filter(reporte => reporte.idServicio == this.servicio);
      }
    }else{

      // tslint:disable-next-line: triple-equals
      if (this.servicio != 0){
        // tslint:disable-next-line: triple-equals
        this.reportes = this.reportes.filter(reporte => reporte.idServicio == this.servicio);
      }

    // this.inicio = new Date(this.inicio.toString().substr(0,10)+ 'GMT-0500');
    // this.fin = new Date(this.fin.toString().substr(0,10)+ 'GMT-0500');

    // this.inicio = new Date(this.inicio.toString().substr(0,15));
    // this.fin = new Date(this.fin.toString().substr(0,15));

      console.log(this.inicio);
      console.log(this.fin);
      // let a = new Date(this.inicio.getFullYear(),this.fin.getMonth(),this.fin.getDate());
      // var b = new Date(this.fin.getFullYear(),this.fin.getMonth(),this.fin.getDate());

      this.filterReportes = this.reportes.filter(reporte => reporte.fecha > this.inicio && reporte.fecha < this.fin);
      console.log(this.filterReportes);

      // tslint:disable-next-line: triple-equals
      if (this.filterReportes.length != 0){
        this.reportes = this.filterReportes;
      }

      this.inicio = null;
      this.fin = null;

    }

  }

  exportAsXLSX(): void {
    this.excelService.exportAsExcelFile(this.reportes, 'footballer_data');
  }

  // tslint:disable-next-line: typedef
  importASXLSX(uploadedFile){
    console.log(uploadedFile, 'uploadedFile');
    console.log(uploadedFile.target.files, '2uploadedFile');
    this.excelService.onFileChangeReporte(uploadedFile);
  }

}

