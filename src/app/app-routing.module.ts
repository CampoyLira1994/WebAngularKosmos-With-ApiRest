import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoverPageComponent } from './cover-page/cover-page.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { FoodServiceComponent } from './food-service/food-service.component';
import { EmpresasComponent } from './navbar/empresas/empresas.component';
import { CatalogosComponent } from './navbar/catalogos/catalogos.component';
import { EmpleadosComponent } from './navbar/catalogos/empleados/empleados.component';
import { ServicioComponent } from './navbar/catalogos/servicio/servicio.component';
import { EstatusComponent } from './navbar/catalogos/estatus/estatus.component';
import { TipoEmpleadosComponent } from './navbar/catalogos/tipo-empleados/tipo-empleados.component';
import { AreaComponent } from './navbar/catalogos/area/area.component';
import { ReportesComponent } from './navbar/reportes/reportes.component';

const routes: Routes = [

  {path: '', component: LoginComponent},
  {path: 'empresas', component: EmpresasComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'foodService', component: FoodServiceComponent},
  {path: 'cover', component: CoverPageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'catalogos', component: CatalogosComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'servicio', component: ServicioComponent},
  {path: 'estatus', component: EstatusComponent},
  {path: 'tipoEmpleado', component: TipoEmpleadosComponent},
  {path: 'area', component: AreaComponent},
  {path: 'reportes', component: ReportesComponent},

  // {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
