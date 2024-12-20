import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { AddManagerComponent } from './components/add-manager/add-manager.component';
import { AuthInterceptor } from './Interceptor/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
    AddManagerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
