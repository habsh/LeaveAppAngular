import { Component, OnInit } from '@angular/core';

import { CredentialsService } from '../credentials.service';
import { HttpClient, HttpHeaders,HttpErrorResponse, HttpHandler } from '@angular/common/http';

var jsontxt=`[{
  "leaveId": 123,
  "days": 5,
  "start": "2012 - 04 - 23",
  "end": "2012 - 04 - 28",
  "type": "earned",
  "status": "Pending",
  "reason": "leave",
  "applied": "2012 - 04 - 20",
  "comments": "commented"
},
{
  "leaveId": 456,
  "days": 2,
  "start": "2012 - 05 - 10",
  "end": "2012 - 05 - 12",
  "type": "earned",
  "status": "Pending",
  "reason": "leave",
  "applied": "2012 - 04 - 23",
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
  leaveData:string[];
  outputData;
  public show:boolean = true;
  hideView=-1;
  constructor(private http:HttpClient){
  }
  
  ngOnInit(){
    this.leaveData=json;
    console.log(this.leaveData);
    this.http.get("https://reqres.in/api/users?page=2").subscribe(data => console.log(data));
    }
  create(){
    location.href= "/apply"
  }
  expDetails(leav){
    console.log(leav)
    leav.showButton = !leav.showButton;
  }
}
