import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Manager } from '../interface/manager';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
 
  private userName = new BehaviorSubject<string | null>(localStorage.getItem('userName'));
  private loggedIn = new BehaviorSubject<boolean>(this.isLoggedIn());

  private managerUrl='https://ecommerce-node101.onrender.com/manager';
  private managerUrl1='https://ecommerce-node101.onrender.com/manager/login';

  constructor(private http: HttpClient,private router:Router) { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  get isLoggedIn$() {
    return this.loggedIn.asObservable();
  }
  
  get userName$() {
    return this.userName.asObservable();
  }
  addManager(manager: Manager) {
    return this.http.post(this.managerUrl, manager);

  }//
  managerLogin(manager: Manager) {
    return this.http.post(this.managerUrl1, manager).subscribe((result:any)=>{
      localStorage.setItem("token",result.token);
      localStorage.setItem('userName', result.name);
      this.loggedIn.next(true);
      this.userName.next(result.name);
      this.router.navigate(['/employee'])
      
    });
  }//
  logout(): void {
    localStorage.removeItem('userName');
    this.userName.next(null);
    localStorage.removeItem('token'); // Remove token on logout
    this.loggedIn.next(false);
  }
  getToken(){
    return localStorage.getItem('token');
  }
 
}
