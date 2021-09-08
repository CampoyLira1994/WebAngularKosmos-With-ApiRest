import { NgForm } from '@angular/forms';
import { Component, EventEmitter, OnInit, Output, NgZone } from '@angular/core';
import { EmployeesService } from '../shared/services/employees.service/employees.service';
import { Empleados } from '../shared/models/empleados.model';
import { Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private service: EmployeesService,
              private router: Router,
    // private afAuth: AngularFireAuth,
              private ngZone: NgZone) { }

  username: string;
  password: string;
  access: number;

  employees: Empleados[];
  lengthEmpleados: number;

  errorMessage = '';

  @Output() usuarioSeleccionado = new EventEmitter();
  @Output() loginP: EventEmitter<number> = new EventEmitter<number>();


  // tslint:disable-next-line: typedef
  changeComponentLogin(login: number) {
    // this.usuarioSeleccionado.emit(login);
    this.loginP.emit(login);
  }

  // tslint:disable-next-line: typedef
  ngOnInit() {
    //     this.afAuth.user.subscribe(user => {
    //       if (user) {
    //         this.ngZone.run(() => {
    //           this.router.navigate(['/todos']);
    //         });

    //   }
    // });
  }

  // tslint:disable-next-line: typedef
  loginInit() {
    const user = this.username;
    const pass = this.password;
  }

  // tslint:disable-next-line: typedef
  login(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
  }

  // tslint:disable-next-line: typedef
  findUser() {
    this.service.getUsers().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
      // tslint:disable-next-line: variable-name
      for (let i = 0, employees_1 = this.employees; i < this.employees.length; i++) {
        const empleado = employees_1[i];
        console.log(empleado.nombres);
        console.log(this.username, empleado.nombres, this.password, empleado.contraseña);
        if (this.username === empleado.nombres && this.password === empleado.contraseña) {
          console.log('Encontrado ');
          this.changeComponentLogin(1);
          sessionStorage.setItem('accesLogin', '1');
          this.signIn();
        } else {
          console.log('Error usuario no encontrado');
        }
      }
    });

  }

  // tslint:disable-next-line: typedef
  signIn() {
    // this.afAuth.auth.signInWithEmailAndPassword(this.username, this.password).then(() => {
    this.router.navigate(['/cover']);
    //  }).catch(response => {
    //    this.errorMessage = response.message;
    //  });
    // }

  }

}
