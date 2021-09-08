import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ServiciosService } from './../shared/services/1servicios.service/servicios.service';

import { Servicios } from './../shared/models/servicios.model';

@Component({
  selector: 'app-food-service',
  templateUrl: './food-service.component.html',
  styleUrls: ['./food-service.component.css']
})
export class FoodServiceComponent implements OnInit {

  @Output() servicioID = new EventEmitter<number>();

  constructor(private serviciosService: ServiciosService) {}

  idServicio = 0;
  servicios: Servicios[];
  servici: Servicios;

  // Control de navbar
  navbarB = true;
  servicioB = false;
  subServicioB = false;

  ngOnInit(): void {
    this.serviciosService.getServicios().subscribe(
      (data) => {
      // console.log('Data:', data);
      this.servicios =  data;
      });
  }

  // tslint:disable-next-line: typedef
  servicioE(idServicio){
    this.idServicio = idServicio;
    // console.log(idServicio, 'qwerty');
    this.servicioID.emit(idServicio);
  }

    // tslint:disable-next-line: typedef
    servicio(idServicio){
      // tslint:disable-next-line: triple-equals
      this.servici = this.servicios.find(x => x.idServicio == this.idServicio);
      // console.log(idServicio, 'qwerty', this.servici);

      // tslint:disable-next-line: triple-equals
      if (idServicio != 0){
        // tslint:disable-next-line: triple-equals

        this.servicioID.emit(idServicio);
        // console.log(this.servici.subServicio, 'this.servici.subServicio');
        if (this.servici.subServicio != null){
        this.subServicioB = true;
        this.servicioB = false;
        this.navbarB = false;
        }else{
        this.subServicioB = false;
        this.servicioB = true;
        this.navbarB = false;
        }
      }else{
        this.navbarB = true;
        this.subServicioB = false;
        this.servicioB = false;
      }
  }


}
