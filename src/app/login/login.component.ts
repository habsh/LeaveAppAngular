import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empId: number;
  empName: string;
  empPhone: number;
  empDept: string;
  empMail: string;
  empDoj: Date;
  leaveBalance: number;
  empMngId: number;

  constructor() { }

  ngOnInit() {
    this.empId = 335;
    this.empName = 'Bob Harris';
    this.empPhone = 7035554321;
    this.empDept = 'Salaries';
    this.empMail = 'monkeybrow@yahoo.com';
    this.empDoj = new Date(1954, 3, 28);
    this.leaveBalance = 8;
    this.empMngId = 250;
  }

  login() {
    sessionStorage.setItem("empId", this.empId.toString())
    sessionStorage.setItem("empName", this.empName.toString())
    sessionStorage.setItem("empPhone", this.empPhone.toString())
    sessionStorage.setItem("empDept", this.empDept.toString())
    sessionStorage.setItem("empMail", this.empMail.toString())
    sessionStorage.setItem("empDoj", '' + this.empDoj.getTime())
    sessionStorage.setItem("leaveBalance", this.leaveBalance.toString())
    sessionStorage.setItem("empMngId", this.empMngId.toString())
    location.href = "/"
  }

}

