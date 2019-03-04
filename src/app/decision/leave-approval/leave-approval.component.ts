import { Component, OnInit } from '@angular/core';
import { ApplyDenyService } from '../service/apply-deny.service';
import { LeaveDetails } from '../entity/leave-details';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.css']
})
export class LeaveApprovalComponent implements OnInit {

  leaveDetails:LeaveDetails;
  updatedLeaveDetails:LeaveDetails;

  constructor(private leaveDataService:ApplyDenyService, private router:Router, private route:ActivatedRoute) {
    this.leaveDetails=new LeaveDetails;
  }
  
  ngOnInit(){
    this.leaveDataService.getLeaveData(this.route.snapshot.params['leaveId']).subscribe((data: LeaveDetails) => this.leaveDetails = data,
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
    
    this.updatedLeaveDetails.acceptance=id;
    this.leaveDataService.postAcceptLeave(this.updatedLeaveDetails)
                        .subscribe(ld => {
                                        if(ld == null){
                                          alert('Employee leave already accepted or denied');
                                        }
                                        else{
                                          this.leaveDetails = ld;
                                          alert('Leave was '+ld.status);
                                      }
                                    },
                          error => this.showErrorAlert(error),
                          () => {
                                          this.router.navigateByUrl('decision');
                            }
                        );
  }


  showErrorAlert(error:any){
    alert(error);
  }
}
