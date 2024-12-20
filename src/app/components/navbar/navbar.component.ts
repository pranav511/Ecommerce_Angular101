import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { ManagerService } from 'src/app/services/manager.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userName: string | null = null;
  constructor( private service :ManagerService,private router: Router,) { }
  ngOnInit(): void {
    this.service.userName$.subscribe(name => {
      this.userName = name;
    });
    this.service.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    });
  
}
  logout(): void {
    this.service.logout();
    // this.isLoggedIn = false;
    this.router.navigate(['/register']);
  }
}
