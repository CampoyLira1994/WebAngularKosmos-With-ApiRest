import { RecordsService } from './shared/services/records.service/records.service';
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
import { AdminComponent } from './admin/admin.component';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { EmployeeAdminComponent } from './admin/employee-admin/employee-admin.component';
import { RecordAdminComponent } from './admin/record-admin/record-admin.component';

import { EmployeeService } from './shared/employee.service';
import { EmployeesService } from '../app/shared/services/employees.service/employees.service';
import { ServiceAdminComponent } from './admin/service-admin/service-admin.component';
import { StatusAdminComponent } from './admin/status-admin/status-admin.component';
import { FoodServiceComponent } from './food-service/food-service.component';
import { BreakfastServiceComponent } from './food-service/breakfast-service/breakfast-service.component';
import { TypeUserAdminComponent} from './admin/type-user.admin/typeuser-admin.component';
import { ExcelService } from './shared/services/excel.service/excel.service';
import { EmpresasComponent } from './navbar/empresas/empresas.component';
import { CatalogosComponent } from './navbar/catalogos/catalogos.component';
import { EmpleadosComponent } from './navbar/catalogos/empleados/empleados.component';
import { ServicioComponent } from './navbar/catalogos/servicio/servicio.component';
import { EstatusComponent } from './navbar/catalogos/estatus/estatus.component';
import { TipoEmpleadosComponent } from './navbar/catalogos/tipo-empleados/tipo-empleados.component';
import { AreaComponent } from './navbar/catalogos/area/area.component';
import { ReportesComponent } from './navbar/reportes/reportes.component';
import { ServiciosComponent } from './food-service/servicios/servicios.component';
import { SubServiciosComponent } from './food-service/sub-servicios/sub-servicios.component';


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
    CoverPageComponent,
    EmployeeAdminComponent,
    RecordAdminComponent,
    ServiceAdminComponent,
    StatusAdminComponent,
    FoodServiceComponent,
    BreakfastServiceComponent,
    TypeUserAdminComponent,
    EmpresasComponent,
    CatalogosComponent,
    EmpleadosComponent,
    ServicioComponent,
    EstatusComponent,
    TipoEmpleadosComponent,
    AreaComponent,
    ReportesComponent,
    ServiciosComponent,
    SubServiciosComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

    // BrowserAnimationsModule,
    // ToastrModule
  ],
  providers: [EmployeeService,
    EmployeesService,
    RecordsService,
    ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
