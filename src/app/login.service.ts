import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {Observable} from 'rxjs'
import { from } from 'rxjs';
import { environment } from './environment-variables/environment-constants'
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private actionUrl: string;
  constructor(private http: HttpClient) { 
    this.actionUrl = environment.URL_DN_P+"/login";
  }
  public getUser<T> (username: String, password: String) : Observable<T>{
    return this.http.post<T>(this.actionUrl,
    {username : username,
      password : password,
      }  
    );
  }
}
