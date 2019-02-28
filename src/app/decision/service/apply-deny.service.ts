import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LeaveDetails } from '../entity/leave-details';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApplyDenyService {
  BASE_URL='http://localhost:8080/'
  GET_URL = this.BASE_URL + '/leave/details/11'
  POST_ACCEPTED_URL = this.BASE_URL + '/leave/details/accepted'
  POST_DENIED_URL = this.BASE_URL + '/leave/details/denied'

  
  constructor(private http:HttpClient) { }

  getLeaveData():Observable<LeaveDetails>{
   return this.http.get<LeaveDetails>(this.GET_URL)
             .pipe(
                 catchError(this.handleError)
              );
  }

  postAcceptLeave(leaveDetails:LeaveDetails){
    let url = leaveDetails.status == 'approve' ? 
                              this.POST_ACCEPTED_URL : this.POST_DENIED_URL;
    return this.http.post<LeaveDetails>(url, leaveDetails, httpOptions)
              .pipe(
                catchError(e => this.handleError(e))
              );
  }

  private handleError(error:HttpErrorResponse){

    if (error.error instanceof ErrorEvent){
      console.log('***********Error ocurred: '+error.error.message);
    }else{
      console.error(
         `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`
      );
    }

    return throwError(
          'Something bad happened; please try again later.');
  };
}
