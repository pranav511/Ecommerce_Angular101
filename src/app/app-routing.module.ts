import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  { path: 'employee', component: EmployeeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'details/:productId',component:EmployeeDetailsComponent},
  {path:'update-employee/:productId',component:UpdateEmployeeComponent},
  { path: 'addEmployee', component: AddEmployeeComponent },
  { path: '', redirectTo: '/employee', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/employee' } // Wildcard route for a 404 page
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
