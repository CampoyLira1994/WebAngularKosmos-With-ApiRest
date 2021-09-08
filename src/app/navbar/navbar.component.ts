import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit , EventEmitter, Output} from '@angular/core';

import { ServiciosService } from './../shared/services/1servicios.service/servicios.service';

import { Servicios } from './../shared/models/servicios.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  message = 'contacto!';
  servicios: Servicios[];
  idServicio = 0;

  @Output() servicioE = new EventEmitter<number>();

  constructor(private serviciosService: ServiciosService,
              private router: Router) { }

  ngOnInit(): void {
    this.serviciosService.getServicios().subscribe(
      (data) => {
      // console.log('Data:', data);
      this.servicios =  data;
      });
  }

  // tslint:disable-next-line: typedef
   servicio(idServicio){
    // console.log(idServicio);
    this.router.navigate(['/foodService/' + idServicio]);
    this.servicioE.emit(idServicio);
  }

}
