import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LeaveDetails } from '../entity/leave-details';
import { catchError } from 'rxjs/operators';
import { EmployeeDetails } from '../Entity/employee-details';
import { environment } from '../../environment-variables/environment-constants'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ApplyDenyService {
  BASE_URL = environment.URL_DN_P
  GET_URL = this.BASE_URL + '/leave/details/'
  POST_ACCEPTED_URL = this.BASE_URL + '/leave/details/accepted'
  POST_DENIED_URL = this.BASE_URL + '/leave/details/denied'
  GET_ALL_PENDING = this.BASE_URL + '/leave/details/pending'

  
  constructor(private http:HttpClient) { }

  getLeaveData(id:number):Observable<LeaveDetails>{
    let get_url_id = this.GET_URL + id;
    return this.http.get<LeaveDetails>(get_url_id)
             .pipe(
                 catchError(this.handleError)
              );
  }

  postAcceptLeave(leaveDetails:LeaveDetails){
    let url = leaveDetails.acceptance == 'approved' ? 
                              this.POST_ACCEPTED_URL : this.POST_DENIED_URL;
    return this.http.post<LeaveDetails>(url, leaveDetails, httpOptions)
              .pipe(
                catchError(e => this.handleError(e))
              );
  }

  getAllPendingLeaves(){
      return this.http.get<EmployeeDetails[]>(this.GET_ALL_PENDING)
              .pipe(
                  catchError(this.handleError)
              )
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
