import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {Observable} from 'rxjs'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private actionUrl: string;
  constructor(private http: HttpClient) { 
    this.actionUrl = "http://localhost:8080/login";
  }

  public getUser<T> (username: String, password: String) : Observable<T>{
    return this.http.post<T>(this.actionUrl,
    {username : username,
      password : password,
      }
      
    );
  }


}
