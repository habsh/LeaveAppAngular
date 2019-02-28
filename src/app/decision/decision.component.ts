import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { LeaveDetails } from './entity/leave-details';
import { catchError } from 'rxjs/operators'; 
import { ApplyDenyService } from './service/apply-deny.service';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css'],
  providers: [ApplyDenyService]
})
export class DecisionComponent implements OnInit {

  leaveDetails:LeaveDetails;
  updatedLeaveDetails:LeaveDetails;

  constructor(private applyDenyService:ApplyDenyService) {
    this.leaveDetails=new LeaveDetails;
  }
  
  ngOnInit(){
    this.applyDenyService.getLeaveData().subscribe((data: LeaveDetails) => this.leaveDetails = data,
          error => this.showErrorAlert(error));
  }

  aprove(id:string){
    this.updateLeaveDetails(id);
  }

  deny(id:string){
    this.updateLeaveDetails(id);
  }

  updateLeaveDetails(id:string){
    
    this.updatedLeaveDetails=new LeaveDetails;
    this.updatedLeaveDetails=this.leaveDetails;
    
    this.updatedLeaveDetails.status=id;
    this.applyDenyService.postAcceptLeave(this.updatedLeaveDetails)
                        .subscribe(ld => {
                                        alert('Leave was '+ld.status);},
                          error => this.showErrorAlert(error),
                          () => console.log('****************Completed**************')
                        );
  }


  showErrorAlert(error:any){
    alert(error);
  }

}
