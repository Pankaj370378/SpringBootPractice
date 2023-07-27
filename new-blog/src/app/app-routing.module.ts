import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './application-component/home-page/home-page.component';
import { AboutPageComponent } from './application-component/about-page/about-page.component';
import { EmployeeListComponent } from './application-component/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './application-component/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './application-component/update-employee/update-employee.component';
import { EmployeeDetailsComponent } from './application-component/employee-details/employee-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },    
  { path: 'home', component:HomePageComponent },
  { path: 'about', component: AboutPageComponent },
   { path: 'employees', component: EmployeeListComponent },
   { path: 'add', component: CreateEmployeeComponent },
   { path: 'update/:id', component: UpdateEmployeeComponent },
   { path: 'details/:id', component: EmployeeDetailsComponent },
   
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[CreateEmployeeComponent,EmployeeListComponent]