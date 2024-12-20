import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  employeeData:undefined| Employee;
  updateEmployeeMsg:string='';

  constructor(private activeRoute: ActivatedRoute,private router:Router,private service: UserService) { }

  ngOnInit(): void {
    //redering the data from employee.components
    let productId = this.activeRoute.snapshot.paramMap.get('productId')

    //get method to involed data from employee 
    productId && this.service.getProduct(productId).subscribe((result) => {
      this.employeeData = result;
  })
}


//Update the employeen 
updateEmp(data: Employee) {
  if(this.employeeData){
    data.id=this.employeeData.id;
  }
  this.service.updateEmployee(data).subscribe((result)=>{
    this.updateEmployeeMsg='Product updated successfully..';
  })
  setTimeout(() => {
    this.updateEmployeeMsg='';
    this.router.navigate(['/employee'])
  }, 500);
}

}
