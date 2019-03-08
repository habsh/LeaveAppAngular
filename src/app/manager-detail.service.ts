import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { environment } from './environment-variables/environment-constants'

const endpoint = environment.URL_DN_P+'/leaveapp/';
const httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})

export class ManagerDetailService {
  
  constructor(private http:HttpClient) { }  
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  getManagerById(empId:number):Observable<any>{
    //var url='http://localhost:8181/leaveapp/getManager/'+empId;
    return this.http.get(endpoint + 'getManager/' + empId).pipe(map(this.extractData));
    //return this.http.get(url).pipe(map((response:any) => response.JSON()));
  }
}