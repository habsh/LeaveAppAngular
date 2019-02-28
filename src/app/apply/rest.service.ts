import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import {Observable} from 'rxjs'
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestService {

  private actionUrl: string;
  constructor(private http: HttpClient) { 
    this.actionUrl = "http://localhost:9999/applyLeave";
  }

  public update<T>(formControl: FormGroup): Observable<T>{
    return this.http.post<T>(this.actionUrl,
      {
        startDate : formControl.controls['Start_Date'].value,
        endDate:formControl.controls['End_Date'].value,
        numDays:formControl.controls['Number_Of_Days'].value,
        leaveType:formControl.controls['Leave_Type'].value,
        reasons:formControl.controls['Leave_Reason'].value
        //employee: get emp id from session

      }
      
    );
  }
}
