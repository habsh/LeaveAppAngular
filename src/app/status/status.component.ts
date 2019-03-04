import { Component, OnInit } from '@angular/core';

import { CredentialsService } from '../credentials.service';
import { HttpClient, HttpHeaders,HttpErrorResponse, HttpHandler } from '@angular/common/http';

var jsontxt=`[
  {
    "leaveId": 456,
    "days": 2,
    "start": "2012-05-10",
    "end": "2012-05-12",
    "type": "earned",
    "status": "Pending",
    "reason": "leave",
    "applied": "2012-04-23",
    "comments": "commented"
  },
  {
  "leaveId": 123,
  "days": 5,
  "start": "2012-04-23",
  "end": "2012-04-28",
  "type": "earned",
  "status": "Pending",
  "reason": "leave",
  "applied": "2012-04-20",
  "comments": "commented"
}
]
`;

var json = JSON.parse(jsontxt);

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
    this.leaveData=json;
    this.sortIt("leaveId");
    this.url="http://localhost:8080/leave/status/"+sessionStorage.getItem("empId")
    this.http.get(this.url).subscribe(data => this.leaveData=data);
    }
  create(){
    location.href= "/apply"
  }
  expDetails(leav){
    console.log(leav)
    leav.showButton = !leav.showButton;
  }
  refreshIt(){
    this.sortIt("start")
    console.log(this.leaveData);
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