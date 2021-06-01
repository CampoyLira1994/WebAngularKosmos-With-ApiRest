import { logging } from 'protractor';
import { Component, OnInit } from '@angular/core';

import { TypeUserService } from '../../shared/services/typeUser.service/type-user.service';

import { TypeUser } from './../../shared/models/typeUser.model';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'app-typeUser',
  templateUrl: './typeuser-admin.component.html',
  styleUrls: ['./typeuser-admin.component.css']
})
export class TypeUserAdminComponent implements OnInit {

  constructor(private services: TypeUserService) { }

  typeUser: TypeUser[];

  // to open input
  toOpenAddTypeUserBool = false;
  toOpenEditTypeUserBool = false;

  // TypeUser add
  idTypeUser: number;
  nameTypeUser: string;

  // TypeUser Edit && Delete
  EidTypeUser: number; // Delete ID
  EnameTypeUser: string;

  ngOnInit(): void {
    this.getTypeUser();
  }

  // tslint:disable-next-line: typedef
  getTypeUser() {
    this.services.getTypeUser().subscribe((data) => {
      this.typeUser = data;
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, typeUser_1 = this.typeUser;
        i < this.typeUser.length;
        i++
      ) {
        const empleado = typeUser_1[i];
        this.typeUser[i] = empleado;
      }
      this.idTypeUser = this.typeUser.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addTypeUserAdmin() {
    this.services
      .createTypeUser({
        idTypeUser: this.idTypeUser,
        nameTypeUser: this.nameTypeUser,
      })
      .subscribe((data) => {
        this.getTypeUser();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editTypeUser() {
    this.services
      .editTypeUser({
        idTypeUser: this.EidTypeUser,
        nameTypeUser: this.EnameTypeUser,
      })
      .subscribe((data) => {
        this.getTypeUser();
        this.refresh();
      });
    console.log(this.EnameTypeUser, this.EidTypeUser, 'editTypeUser de componente');
  }

  // tslint:disable-next-line: typedef
  delteTypeUser(EidTypeUser) {
    this.services.deleteTypeUser(EidTypeUser).subscribe();
    this.getTypeUser();
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  toOpenEditTypeUser(typeUser) {
    this.toOpenAddTypeUserBool = false;
    this.toOpenEditTypeUserBool = true;
    console.log(typeUser);
    this.EidTypeUser = typeUser.idTypeUser;
    this.EnameTypeUser = typeUser.nameTypeUser;
  }

  // tslint:disable-next-line: typedef
  toOpenAddTypeUser() {
    this.toOpenEditTypeUserBool = false;
    this.toOpenAddTypeUserBool = true;
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.EidTypeUser = null;
    this.EnameTypeUser = '';
    this.idTypeUser = null;
    this.nameTypeUser = '';
  }
}
