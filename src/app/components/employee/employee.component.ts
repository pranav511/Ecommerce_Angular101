import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/interface/employee';
import { UserService } from 'src/app/services/user.service';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  employeeList: undefined | Employee[];
  deleteMsg:string ='';
  iconDelete=faTrash;
  iconUpdate=faEdit;
  randomImage: undefined|string;

  private images = [
    'https://www.shutterstock.com/shutterstock/photos/2372562547/display_1500/stock-photo-woman-ues-laptop-computer-with-social-media-online-content-freelance-worker-working-online-2372562547.jpg'
  ];


  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.listEmployee();
    this.randomImage = this.getRandomImage();
    
  }
  getRandomImage(): string {
    const randomIndex = Math.floor(Math.random() * this.images.length);
    return this.images[randomIndex];
  }
  listEmployee() {
    //to show all the list of employee at current time
    this.service.listEmployee().subscribe((result) => {
      this.employeeList = result;    
      console.log("EmployeeList",this.employeeList);
        
    });
  }

  //deleted Employee
  deleteEmployee(id:number){
    this.service.deleteEmployee(id).subscribe((result)=>{
      // console.warn(result);
      if(result){
        this.deleteMsg='Product delete successfully..'
        this.listEmployee();
      }setTimeout(() => {
        this.deleteMsg='';
      }, 3000);
    });
  }

  //updated Employee
  

}
