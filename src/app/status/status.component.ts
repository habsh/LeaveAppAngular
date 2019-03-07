import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  title = 'chkleave';
  asc=true;
  leaveData:any;
  outputData;
  public show:boolean = true;
  hideView=-1;
  url:string;
  constructor(private http:HttpClient){
  }
  
  ngOnInit(){
    
    this.url="http://localhost:8080/leave/status/"+sessionStorage.getItem("empId")
    this.http.get(this.url).subscribe(data => this.leaveData=data);
    //this.sortIt("leaveId");
    console.log(this.leaveData)
    }
  create(){
    location.href= "/apply"
  }
  expDetails(leav){
    console.log(leav)
    leav.showButton = !leav.showButton;
  }
  sortIt(col){
    console.log("sorting by"+col);
    var asc1=this.asc
    this.leaveData.sort(function(a:any,b:any){
      if(col=="start"||col=="end"||col=="applied"){
        console.log("date format")
        var c = new Date(a[col]).getTime()
        var d = new Date(b[col]).getTime()
        if(asc1){
          return c-d
        }else{
          return  d-c
        }
      }else{
        if(asc1){
          return a[col] - b[col]
        }else{
          return  b[col] - a[col]
        }
      }
    })
    this.asc= !this.asc
  }
}