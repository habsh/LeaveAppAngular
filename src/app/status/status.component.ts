import { Component, OnInit } from '@angular/core';

var jsontxt=`[{
  "leaveId": 1234,
  "days": 5,
  "start": "2012 - 04 - 23 T18: 25: 43.511 Z",
  "end": "2012 - 04 - 23 T18: 25: 43.511 Z",
  "type": "earned",
  "status": "Pending",
  "reason": "leave",
  "applied": "2012 - 04 - 23 T18: 25: 43.511 Z",
  "comments": "commented"
}]
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
  ngOnInit(){
    this.leaveData=json;
    console.log("initialized");
    console.log(this.leaveData);
  }

}
