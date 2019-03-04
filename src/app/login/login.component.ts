import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  empId: number;
  constructor() { }

  ngOnInit() {
    this.empId = 1;
  }
  login(){
    sessionStorage.setItem("empId",this.empId.toString())
    location.href="/"
  }

}
