// 2/26/2019, Abdullah, based on An's employee-detail.service.ts
/// ran in cli this to great `employee_detail` service:  ng generate service employee_detail

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import {map, catchError, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';


const endpoint = 'http://192.168.20.203:8181/leaveapp/';
const httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})

export class EmployeeDetailService {
  
  constructor(private http:HttpClient) { }  
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  
  getEmployeeById(empId:number):Observable<any>{
    //var url='http://192.168.20.203:8181/leaveapp/getEmployee/'+empId;
    return this.http.get(endpoint + 'getEmployee/' + empId).pipe(map(this.extractData));
    //return this.http.get(url).pipe(map((response:any) => response.JSON()));
  }
}
