import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AppRoutingModule } from './app.routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports:      [ AppRoutingModule, BrowserModule, RouterModule,ReactiveFormsModule  ],
  declarations: [ AppComponent, EmployeeFormComponent, EmployeeListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }