import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse, HttpHandler } from '@angular/common/http';

var jsontxt=`[
  {
    "empId":123,
    "empName":"Ace",
    "empBalance":12,
    "leaves":[
      {
        "leaveId":123,
        "days":3,
        "start": "2012-05-10",
        "end": "2012-05-12",
        "type": "earned",
        "status": "Pending",
        "reason": "leave"
      },
      {
        "leaveId":124,
        "days":2,
        "start": "2012-05-10",
        "end": "2012-05-12",
        "type": "earned",
        "status": "Pending",
        "reason": "leave"
      }
    ]
  },
  {
    "empId":456,
    "empName":"Bart",
    "empBalance":12,
    "leaves":[
      {
        "leaveId":125,
        "days":3,
        "start": "2012-05-10",
        "end": "2012-05-12",
        "type": "earned",
        "status": "Pending",
        "reason": "leave"
      },
      {
        "leaveId":126,
        "days":2,
        "start": "2012-05-10",
        "end": "2012-05-12",
        "type": "earned",
        "status": "Pending",
        "reason": "leave"
      }
    ]
  }
]
`;
var json = JSON.parse(jsontxt);
@Component({
  selector: 'app-decision',
  templateUrl: './decision.component.html',
  styleUrls: ['./decision.component.css']
})
export class DecisionComponent implements OnInit {
  leaveData:string[];
  constructor(private http:HttpClient) { }
  selectedItem
  ngOnInit() 
  {this.leaveData=json;
    console.log(this.leaveData);
    this.http.get("https://reqres.in/api/users?page=2").subscribe(data => console.log(data));
    
  }
  decision(type){
    if(this.selectedItem==null){
      window.alert("No item was selected!")
    }else{
      window.alert(type+" for "+this.selectedItem);
    }
    
  }
  selectObj(leaveId){
      console.log(leaveId)
      this.selectedItem=leaveId
  }

}
