import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent implements OnInit {
  username: string = ''
  password: string = ''
  empId: number;
  errorMessage = 'invalid credentials'
  invalidLogin = false
  
  //dependency injection
  constructor(private router: Router, private service: LoginService) { }
  
  ngOnInit() {
    this.empId = null;
  }

  handleLogin():void{
    //this.service.getUser(this.empId).subscribe((data: {})) =>
    this.service.getUser(this.username, this.password).subscribe((data:{}) => {
      if (data!=null){
          this.empId=data.empId
          sessionStorage.setItem("empId",this.empId.toString())
          this.router.navigate([''])
          this.invalidLogin= false
        }
        else{
          this.invalidLogin = true;
        }
    } )
  }  
}
