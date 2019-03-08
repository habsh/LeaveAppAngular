import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from '../environment-variables/environment-constants'


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
  leaveDataID:number;
  constructor(private http:HttpClient){
  }
  
  ngOnInit(){
    this.url=environment.URL_DN_P+"/leave/status/"+sessionStorage.getItem("empId")
    this.http.get(this.url).subscribe(data => this.leaveData=data,error=>window.alert('Something bad happened; please try again later.'));
    //this.sortIt("leaveId");
    console.log(this.leaveData)
    }
  create(){
    location.href= "/apply"
  }
  edit(){
    if(this.leaveDataID){
      location.href= "/apply/"+this.leaveDataID
    }else{
      window.alert("Please select a row.")
    }
    
  }
  expDetails(leav){
    console.log(leav.leaveID)
    leav.showButton = !leav.showButton;
    this.leaveDataID=null;
    this.leaveDataID=leav.leaveID;
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