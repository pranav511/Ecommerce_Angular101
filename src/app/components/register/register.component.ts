import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ManagerService } from 'src/app/services/manager.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showMsgDiv:string | undefined;
  authError: string| undefined;
  constructor(private service:ManagerService,private router:Router) { }
  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted!');
  }
  showLogin = true;

  toggleForm() {
    this.showLogin = !this.showLogin;
  }

  signup(data:NgForm){
    console.warn(data.value);
    this.service.addManager(data.value).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.showMsgDiv='Manager Ids Added succesfully...';
      }
      setTimeout(() => {
        this.showMsgDiv='';
        this.router.navigate(['/employee'])
      }, 500);
    });
    
  }
  
  ngOnInit(): void {
  }

  login(data: NgForm){
    console.warn(data);
    
    this.service.managerLogin(data.value);
    // console.log(data.value);
    // this.service.managerLogin(data.value);
    // this.service.isLoginError.subscribe((isError)=>{
    //   if(isError){
    //     this.authError='Email & password is invalid';
    //   }
     
    // })

}
}
