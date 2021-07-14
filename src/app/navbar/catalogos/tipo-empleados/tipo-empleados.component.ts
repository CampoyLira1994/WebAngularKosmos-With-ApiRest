import { Component, OnInit } from '@angular/core';

import { TipoEmpleadoService } from './../../../shared/services/1tipoEmpleado.service/tipo-empleado.service';

import { TipoEmpleado } from './../../../shared/models/tipoEmpleado.model';
@Component({
  selector: 'app-tipo-empleados',
  templateUrl: './tipo-empleados.component.html',
  styleUrls: ['./tipo-empleados.component.css']
})
export class TipoEmpleadosComponent implements OnInit {

  constructor(private services: TipoEmpleadoService) { }

  tipoEmpleado: TipoEmpleado[];
  idDelete: number;

  // to open input
  toOpenAddTypeUserBool = false;
  toOpenEditTypeUserBool = false;

  // TypeUser add
  idTipoEmpleado: number;
  idEmpresa: number;
  nombreTipoEmpleado: string;

  // TypeUser Edit && Delete
  EidTipoEmpleado: number;
  EidEmpresa: number;
  EnombreTipoEmpleado: string;

  ngOnInit(): void {
    this.getTipoEmpleado();
  }

  // tslint:disable-next-line: typedef
  getTipoEmpleado() {
    this.services.getTipoEmpleado().subscribe((data) => {
      this.tipoEmpleado = data;
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, typeUser_1 = this.tipoEmpleado;
        i < this.tipoEmpleado.length;
        i++
      ) {
        const empleado = typeUser_1[i];
        this.tipoEmpleado[i] = empleado;
      }
      this.idEmpresa = this.tipoEmpleado.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addTipoEmpleado() {

    console.log(this.idTipoEmpleado, this.idEmpresa, this.nombreTipoEmpleado);

    this.services
      .createTipoEmpleado({
        idTipoEmpleado: this.idTipoEmpleado,
        idEmpresa: this.idEmpresa,
        nombreTipoEmpleado: this.nombreTipoEmpleado
      })
      .subscribe((data) => {
        this.getTipoEmpleado();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editTipoEmpleado() {
    this.services
      .editTipoEmpleado({
        idTipoEmpleado: this.EidTipoEmpleado,
        idEmpresa: this.EidEmpresa,
        nombreTipoEmpleado: this.EnombreTipoEmpleado
      })
      .subscribe((data) => {
        this.getTipoEmpleado();
        this.refresh();
      });
    console.log(this.EidTipoEmpleado, this.EnombreTipoEmpleado, 'editTypeUser de componente');
  }

  // tslint:disable-next-line: typedef
  delteTipoEmpleado(tipoEmpleado) {
    this.services.deleteTipoEmpleado(this.idDelete).subscribe(() => {
      this.getTipoEmpleado();
      this.refresh();
    });

  }

    // tslint:disable-next-line: typedef
    delteID(tipoEmpleado){
      console.log(tipoEmpleado);
      this.idDelete = tipoEmpleado.idTipoEmpleado;
      console.log(this.idDelete);
      }

  // tslint:disable-next-line: typedef
  toOpenEditTipoEmpleado(tipoEmpleado) {
    this.toOpenAddTypeUserBool = false;
    this.toOpenEditTypeUserBool = true;
    console.log(tipoEmpleado);
    this.EidTipoEmpleado = tipoEmpleado.idTipoEmpleado;
    this.EidEmpresa = tipoEmpleado.idEmpresa;
    this.EnombreTipoEmpleado = tipoEmpleado.nombreTipoEmpleado;
  }

  // tslint:disable-next-line: typedef
  toOpenAddTipoEmpleado() {
    this.toOpenEditTypeUserBool = false;
    this.toOpenAddTypeUserBool = true;
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.EidEmpresa = null;
    this.EnombreTipoEmpleado = '';
    this.idEmpresa = null;
    this.nombreTipoEmpleado = '';
  }
}
