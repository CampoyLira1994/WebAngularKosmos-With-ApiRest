import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kosmosTest';
  accesLogin = 0;
  LocalaccesLogin: string;

  miNombre = localStorage.getItem('nombre');


  @Input() usuarioSeleccionado = new EventEmitter();

  // tslint:disable-next-line: typedef
  changeComponentLogin(login: number) {
  this.accesLogin = login;
  sessionStorage.setItem('accesLogin','1');
  console.error(this.accesLogin);
  if (login === 1){
    this.accesLogin = 1;
    this.LocalaccesLogin = sessionStorage.getItem('accesLogin');
    console.error(this.LocalaccesLogin,'this.LocalaccesLogin');
    console.error(this.accesLogin,'this.accesLogin');
  }
 }

}
