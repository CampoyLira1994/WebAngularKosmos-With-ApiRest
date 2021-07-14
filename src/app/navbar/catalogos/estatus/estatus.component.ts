import { Component, OnInit } from '@angular/core';

import { EstatusService } from './../../../shared/services/1estatus.service/estatus.service';

import { Estatus } from './../../../shared/models/estatus.model';

@Component({
  selector: 'app-estatus',
  templateUrl: './estatus.component.html',
  styleUrls: ['./estatus.component.css']
})
export class EstatusComponent implements OnInit {

  constructor(private services: EstatusService) { }

  estatus: Estatus[];
  idDelete: number;

  // to open input
  toOpenAddEstatusBool = false;
  toOpenEditEstatusBool = false;

  // TypeUser add
  idEstatus: number;
  nombreEstatus: string;

  // TypeUser Edit && Delete
  EidEstatus: number;
  EnombreEstatus: string;

  ngOnInit(): void {
    this.getEstatus();
  }

  // tslint:disable-next-line: typedef
  getEstatus() {
    this.services.getEstatus().subscribe((data) => {
      this.estatus = data;
      console.log(this.estatus,'this.estatus');
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, estatus_1 = this.estatus;
        i < this.estatus.length;
        i++
      ) {
        const estatus = estatus_1[i];
        this.estatus[i] = estatus;
      }
      this.idEstatus = this.estatus.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addEstatus() {
    this.services
      .createEstatus({
        idEstatus: this.idEstatus,
        nombreEstatus: this.nombreEstatus
      })
      .subscribe((data) => {
        this.getEstatus();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editEstatus() {
    this.services
      .editEstatus({
        idEstatus: this.EidEstatus,
        nombreEstatus: this.EnombreEstatus
      })
      .subscribe((data) => {
        this.getEstatus();
        this.refresh();
      });
    console.log(this.EidEstatus, this.EnombreEstatus, 'Estatus de componente');
  }

  // tslint:disable-next-line: typedef
  delteEstatus() {
    this.services.deleteEstatus(this.idDelete).subscribe(()=>{
      this.getEstatus();
      this.refresh();
    });

  }


    // tslint:disable-next-line: typedef
    delteID(estatus){
      this.idDelete = estatus.idEstatus;
      console.log(this.idDelete);
      }


  // tslint:disable-next-line: typedef
  toOpenEditEstatus(estatus) {
    this.toOpenAddEstatusBool = false;
    this.toOpenEditEstatusBool = true;
    console.log(estatus);
    this.EidEstatus = estatus.idEstatus;
    this.EnombreEstatus = estatus.nombreEstatus;
  }

  // tslint:disable-next-line: typedef
  toOpenAddEstatus() {
    this.toOpenEditEstatusBool = false;
    this.toOpenAddEstatusBool = true;
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.EidEstatus = null;
    this.EnombreEstatus = '';
    this.idEstatus = null;
    this.nombreEstatus = '';
  }
}
