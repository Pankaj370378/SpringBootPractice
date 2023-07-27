import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './common-pages/footer/footer.component';
import { CreateEmployeeComponent } from './application-component/create-employee/create-employee.component';
import { EmployeeListComponent } from './application-component/employee-list/employee-list.component';

import { UpdateEmployeeComponent } from './application-component/update-employee/update-employee.component';
import { AboutPageComponent } from './application-component/about-page/about-page.component';
import { EmployeeDetailsComponent } from './application-component/employee-details/employee-details.component';
import { HomePageComponent } from './application-component/home-page/home-page.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { HttpClientModule } from '@angular/common/http';
import { FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { NavbaarComponentComponent } from './common-pages/navbaar-component/navbaar-component.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';





@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    CreateEmployeeComponent,
    EmployeeListComponent,
    UpdateEmployeeComponent,
    AboutPageComponent,
    EmployeeDetailsComponent,
    HomePageComponent,
    NavbaarComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxUiLoaderModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
