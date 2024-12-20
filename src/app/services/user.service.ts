import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { User } from '../interface/user';
import { Employee } from '../interface/employee';
import * as e from 'express';
@Injectable({
  providedIn: 'root'
})
export class UserService {
 

  private empUrl='https://ecommerce-node101.onrender.com/employee';

  constructor(private http: HttpClient) { }


  listEmployee() {
    return this.http.get<Employee[]>(this.empUrl
    )
    };
  

  addEmployee(employee: Employee) {
    return this.http.post(this.empUrl, employee);
  }//
 
  deleteEmployee(id: number) {
    return this.http.delete(this.empUrl+`/${id}`)
  }//

  getProduct(id: string) {
    return this.http.get<Employee>(this.empUrl+`/${id}`)
  }//

  updateEmployee(employee: Employee) {
    return this.http.put(this.empUrl+`/${employee.id}`, employee);
  }//

  private handleError(error: HttpErrorResponse) {
    console.error('An error occurred:', error.message);
    return throwError('Something went wrong; please try again later.');
  }
  
}
