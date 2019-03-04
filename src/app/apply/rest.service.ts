import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {Observable} from 'rxjs'
import { HttpHeaders } from '@angular/common/http';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  private actionUrl: string;
  constructor(private http: HttpClient) { 
    this.actionUrl = "http://localhost:8765/applyLeave";
  }

  public update<T>(formControl: FormGroup): Observable<T>{

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    });

    return this.http.post<T>(this.actionUrl,JSON.stringify({

        "startDate" : formControl.controls['Start_Date'].value,
        "endDate":formControl.controls['End_Date'].value,
        "numDays":formControl.controls['Number_Of_Days'].value,
        "leaveType":formControl.controls['Leave_Type'].value,
        "reasons":formControl.controls['Leave_Reason'].value,
        "employee":formControl.controls['Employee_ID'].value

      }),{headers: headers}
    );
  }
}
