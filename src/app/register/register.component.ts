import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {RegisterService} from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers : [RegisterService]
})
export class RegisterComponent implements OnInit {
  empId: number
  firstName: string = ''
  lastName: string = ''
  email: string = ''
  username: string = ''
  password: string = ''
  errorMessage = 'invalid data'
  invalidRegister = false
  
  //dependency injection
  constructor(private router: Router, private registerService: RegisterService) { }
  
  ngOnInit() {
    //this.empId = 2;
  }

  handleRegister():void{
    if (this.firstName != '' && this.lastName != '' && this.email != '' && this.username != '' && this.password != ''){
        console.log(this.username+ 'user');
        
      this.registerService.getRegister(this.firstName, this.lastName, this.email,this.username, this.password).subscribe((data:{}) => {
      this.invalidRegister= false
      this.router.navigate(['login'])
      console.log (this.firstName+ 'firstname')
      } )
      }
      else {
      this.errorMessage
      this.invalidRegister = true
      
      }

  }  
}
