import { Component, OnInit } from '@angular/core';

import { ServicesService } from '../../shared/services/services.service/services.service';

import { Services } from '../../shared/models/services.model';
@Component({
  selector: 'app-service-admin',
  templateUrl: './service-admin.component.html',
  styleUrls: ['./service-admin.component.css'],
})
export class ServiceAdminComponent implements OnInit {
  constructor(private service: ServicesService) {}

  services: Services[];

  // to open input
  toOpenAddServiceBool = false;
  toOpenEditServiceBool = false;

  // Service add
  idService: number;
  nameService: string;

  // Service Edit && Delete
  EidService: number; // Delete ID
  EnameService: string;

  ngOnInit(): void {
    this.getService();
  }

  // tslint:disable-next-line: typedef
  getService() {
    this.service.getServices().subscribe((data) => {
      this.services = data;
      // tslint:disable-next-line: variable-name
      for (
        // tslint:disable-next-line: variable-name
        let i = 0, services_1 = this.services;
        i < this.services.length;
        i++
      ) {
        const empleado = services_1[i];
        this.services[i] = empleado;
      }
      this.idService = this.services.length + 1;
    });
  }

  // tslint:disable-next-line: typedef
  addServiceAdmin() {
    this.service
      .createService({
        idService: this.idService,
        nameService: this.nameService,
      })
      .subscribe((data) => {
        this.getService();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  editService() {
    this.service
      .editService({
        idService: this.EidService,
        nameService: this.EnameService,
      })
      .subscribe((data) => {
        this.getService();
        this.refresh();
      });
  }

  // tslint:disable-next-line: typedef
  delteService(EidService) {
    this.service.deleteService(EidService).subscribe();
    this.getService();
    this.refresh();
  }

  // tslint:disable-next-line: typedef
  toOpenEditService(service) {
    this.toOpenAddServiceBool = false;
    this.toOpenEditServiceBool = true;
    console.log(service);
    this.EidService = service.idService;
    this.EnameService = service.nameService;
  }

  // tslint:disable-next-line: typedef
  toOpenAddService() {
    this.toOpenEditServiceBool = false;
    this.toOpenAddServiceBool = true;
  }

  // tslint:disable-next-line: typedef
  refresh() {
    this.EidService = null;
    this.EnameService = '';
    this.idService = null;
    this.nameService = '';
  }
}
