import { Component, OnInit } from '@angular/core';
import { ManagerDetailService } from '../manager-detail.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  empId:number;
  manager:any;
  constructor(private managerDetailService:ManagerDetailService, private route:ActivatedRoute, private router:Router) {
    //this.empId = 334;
  }

  ngOnInit() {
    this.getMangerByEmpId();
  }

  getMangerByEmpId():void{
    
    this.managerDetailService.getManagerById(this.route.snapshot.params['empId']).subscribe((data:{}) => {
      console.log(data);
      this.manager = data;
    } )
  }
}
