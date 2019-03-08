import { Component, OnInit } from '@angular/core';
import { EmployeeDetailService } from '../employee-detail.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  empId: number;
  employee: any;
  constructor(private employeeDetailService:EmployeeDetailService) {
    this.empId = 334;
   }

  ngOnInit() {
    this.getEmployeeByEmpId();
  }

  getEmployeeByEmpId():void{
    this.employeeDetailService.getEmployeeById(this.empId).subscribe((data:{}) => {
      console.log(data);
      this.employee = data;
    } )
  }
}
