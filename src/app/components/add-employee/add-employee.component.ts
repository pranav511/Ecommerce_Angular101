import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  showMsgDiv:string | undefined;
  constructor(private service:UserService,private router:Router) { }
  ngOnInit(): void {
  }

  addEmployees(data:NgForm){
    console.warn(data.value);
    this.service.addEmployee(data.value).subscribe((result)=>{
      console.warn(result);
      if(result){
        this.showMsgDiv='Product Added succesfully...';
      }
      setTimeout(() => {
        this.showMsgDiv='';
        this.router.navigate(['/employee'])
      }, 500);
    });
    
  }

}
