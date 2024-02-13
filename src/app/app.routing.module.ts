import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
 
 
export const routes: Routes = [
  { path: "", component: HomeComponent },  
  { path: "new", component: EmployeeFormComponent },
  { path: "list", component:EmployeeListComponent },    // Default route to Home component
 
]
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 