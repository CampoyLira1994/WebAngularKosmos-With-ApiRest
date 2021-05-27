import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kosmosTest';
  accesLogin = 0;
  accsesHome = 1;

  @Input() usuarioSeleccionado = new EventEmitter();

  // tslint:disable-next-line: typedef
  changeComponentLogin(login: number) {
  this.accesLogin = login;
  if (this.accesLogin === 0){
    this.accsesHome = 1;
  }
 }

}
