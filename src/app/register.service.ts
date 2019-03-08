import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, EmailValidator } from '@angular/forms';
import {Observable} from 'rxjs'
import { from } from 'rxjs';
import { environment } from './environment-variables/environment-constants'

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private actionUrl: string;
  constructor(private http: HttpClient) { 
    this.actionUrl = environment.URL_DN_P+"/register";
  }

  public getRegister<T> (firstName: string, lastName: string, email: string, username: String, password: String) : Observable<T>{
    return this.http.post<T>(this.actionUrl,
      {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username : username,
      password : password,
      }  
    );
  }

}
