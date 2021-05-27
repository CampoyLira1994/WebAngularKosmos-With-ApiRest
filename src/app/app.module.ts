import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeComponent } from './employees/employee/employee.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { LoginComponent } from './login/login.component';

import { EmployeeService } from './shared/employee.service';
import { EmployeesService } from '../app/shared/services/employees.service/employees.service';
import { AdminComponent } from './admin/admin.component';
import { CoverPageComponent } from './cover-page/cover-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    EmployeesComponent,
    EmployeeComponent,
    EmployeeListComponent,
    LoginComponent,
    AdminComponent,
    CoverPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    // BrowserAnimationsModule,
    // ToastrModule
  ],
  providers: [EmployeeService,
    EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
