import { Component, OnInit } from '@angular/core';

import { AreaService } from './../../../shared/services/1area.service/area.service';

import { Area } from './../../../shared/models/area.model';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.css']
})
export class AreaComponent implements OnInit {

  constructor(private services: AreaService) { }

  area: Area[];
  idDelete: number;

  // to open input
  toOpenAddAreaBool = false;
  toOpenEditAreaBool = false;

  // TypeUser add
  idArea: number;
  idEmpresa: number;
  nombreArea: string;

  // TypeUser Edit && Delete
  EidArea: number;
  EidEmpresa: number;
  EnombreArea: string;

  ngOnInit(): void {
    this.getArea();
  }

  // tslint:disable-next-line: typedef
  getArea() {
    this.services.getArea().subscribe((data) => {
      this.area = data;
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, area_1 = this.area;
        i < this.area.length;
        i++
      ) {
        const area = area_1[i];
        this.area[i] = area;
      }
      this.idArea = this.area.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addArea() {
    this.services
      .createArea({
        idArea: this.idArea,
        idEmpresa: this.idEmpresa,
        nombreArea: this.nombreArea
      })
      .subscribe((data) => {
        this.getArea();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editArea() {
    this.services
      .editArea({
        idArea: this.EidArea,
        idEmpresa: this.EidEmpresa,
        nombreArea: this.EnombreArea
      })
      .subscribe((data) => {
        this.getArea();
        this.refresh();
      });
    console.log(this.EidArea, this.EidEmpresa, 'Area de componente');
  }

  // tslint:disable-next-line: typedef
  delteArea() {
    console.log(this.idDelete);
    this.services.deleteArea(this.idDelete).subscribe(() => {
      this.getArea();
      this.refresh();
    });

  }

    // tslint:disable-next-line: typedef
    delteID(area){
      console.log(area);
      this.idDelete = area.idArea;
      console.log(this.idDelete);
      }

  // tslint:disable-next-line: typedef
  toOpenEditArea(area) {
    this.toOpenAddAreaBool = false;
    this.toOpenEditAreaBool = true;
    console.log(area);
    this.EidArea = area.idArea;
    this.EidEmpresa = area.idEmpresa;
    this.EnombreArea = area.nombreArea;
  }

  // tslint:disable-next-line: typedef
  toOpenAddArea() {
    this.toOpenEditAreaBool = false;
    this.toOpenAddAreaBool = true;
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.idArea = null;
    this.idEmpresa = null;
    this.nombreArea = '';
    this.EidArea = null;
    this.EidEmpresa = null;
    this.EnombreArea = '';
  }


}
