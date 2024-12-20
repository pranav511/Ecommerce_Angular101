import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterModule} from '@angular/router';
import { Employee } from 'src/app/interface/employee';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employeeData:undefined| Employee;
  constructor(private activeRoute: ActivatedRoute,private service: UserService) { }

  ngOnInit(): void {
    //redering the data from employee.components
    let productId = this.activeRoute.snapshot.paramMap.get('productId')

    //get method to involed data from employee 
    productId && this.service.getProduct(productId).subscribe((result) => {
      this.employeeData = result;
  })
}
}
