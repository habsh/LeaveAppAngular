import { Component, OnInit } from '@angular/core';
import { ApplyDenyService } from './service/apply-deny.service';
import { EmployeeDetails } from './entity/employee-details';
import { LeaveDetails } from './entity/leave-details';
import { Router } from '@angular/router';

@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css'],
  providers: [ApplyDenyService]
})
export class DecisionComponent implements OnInit {

  leaveDataId:number;
  leaveData:EmployeeDetails[];

  constructor(private applyDenyService:ApplyDenyService, private route:Router) { }
  ngOnInit() 
  {
    
    this.applyDenyService.getAllPendingLeaves().subscribe((data:EmployeeDetails[]) => 
                                                    {
                                                      console.log(data);
                                                      //this.leaveData = JSON.parse(EmployeeDetails[0]);
                                                      this.leaveData = data;
                                                    },
                                                    error => alert(error));
    
  }


  decision(type){
    if(this.leaveDataId==null){
      window.alert("No item was selected!")
    }else{
      window.alert(type+" for "+this.leaveDataId);

    }
    
  }
  selectObj(leave){
      console.log(leave.leaveId)
      this.leaveDataId=null;
      this.leaveDataId=leave.leaveId;
  }

  approvalRoute(){
    let url = 'decision/leave-approval/'+this.leaveDataId
    if(this.leaveDataId){
        this.route.navigateByUrl(url);
    }else{
      window.alert("Please select a table row.")
    }
    }

}
