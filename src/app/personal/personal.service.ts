import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from '../environment-variables/environment-constants'

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  BASE_URL = environment.URL_DN_P
  GET_URL = this.BASE_URL + `/leaveapp/details/`
  constructor(private personal:HttpClient) { }

  obtainID(type: number) {
    return this.personal.get<any>(this.BASE_URL+"/details/"+type);
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

