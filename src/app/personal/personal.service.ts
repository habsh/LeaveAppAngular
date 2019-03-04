import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  BASE_URL = 'http://localhost:8091'
  GET_URL = this.BASE_URL + `/leaveapp/details/`
  constructor(private personal:HttpClient) { }

  obtainID(type: number) {
    let get_url_id = this.GET_URL + type;
    return this.personal.get<any>(this.GET_URL)
        .pipe(
          catchError(this.handleError)
        );
  }

  private handleError(error:HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log('************Error occurred: ' + error.error.message);
     } else {
        console.error(
          `Backend returned code ${error.status}, ` + 
          `body was: ${error.error}`
        );
      }
    
    return throwError(
      'Something bad happened; please try again later.');
    };

}

