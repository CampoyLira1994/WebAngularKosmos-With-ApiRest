import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CoverPageComponent } from './cover-page/cover-page.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { FoodServiceComponent } from './food-service/food-service.component';

const routes: Routes = [
  // {path: '', component: LoginComponent},
  {path: '', component: CoverPageComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'foodService', component: FoodServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
