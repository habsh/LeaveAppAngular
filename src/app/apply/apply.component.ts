import { Component ,OnInit, Input} from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { RestService } from './rest.service'
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common'


@Component({
  selector: 'apply-root',
  providers: [ DatePipe ],
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit{
  leaveId:number;
  empId:number;
  title = "Input"
  applyLeaveForm: FormGroup;
  submitted = false;
  testError = false;
  pageTitle="Apply Leave"
  numDays:number;
  restErrors: any[];
   constructor(public datepipe: DatePipe,private fb: FormBuilder, private restService: RestService,
    private route:ActivatedRoute, private router:Router) {
      
      this.leaveId= parseInt(this.route.snapshot.paramMap.get("leaveId"))
      
    }

   
  ngOnInit() {
      this.applyLeaveForm = this.fb.group({
        Start_Date: ['', Validators.required ],
        End_Date: ['', [Validators.required ]],
        Number_Of_Days: [''],
        Leave_Type:[''],
        Leave_Reason:[''],
        Leave_ID:[''],
        Employee_ID:['']
        }, {validator: this.dateLessThan('Start_Date','End_Date')},
      
      );
      if(this.leaveId){
        this.pageTitle="Edit Existing Leave"
        this.restService.get(this.leaveId).subscribe(data => this.fillCurrentLeave(data))
      }
  }

  fillCurrentLeave(response){
    console.log(response)
    var date=new Date(response.startDate)
    var start=this.datepipe.transform(date, 'yyyy-MM-dd')
    var date=new Date(response.endDate)
    var end=this.datepipe.transform(date, 'yyyy-MM-dd')
    this.applyLeaveForm.controls["Number_Of_Days"].setValue(response.days);
    this.applyLeaveForm.controls["Leave_Type"].setValue(response.leaveType);
    this.applyLeaveForm.controls["Leave_Reason"].setValue(response.reason);
    this.applyLeaveForm.controls["Start_Date"].setValue(start);
    this.applyLeaveForm.controls["End_Date"].setValue(end)
    this.applyLeaveForm.controls["Leave_ID"].setValue(this.leaveId);
  }

  dateLessThan(first: string, last: string) {
  
    return (group: FormGroup): {[key: string]: any} => {

        let f = new Date(group.controls["Start_Date"].value);
        let t = new Date(group.controls["End_Date"].value);
        this.title = "anything";
        if (f.getTime() > t.getTime()) {
          return { invalidDates : "Date from should be less than Date to" }
        }
        else{
          var diff = Math.abs(t.getTime() - f.getTime());
          var diffDays = Math.ceil(diff/(1000*3600*24)) +1;
          this.numDays=diffDays;
        }
    };
  }
public onSubmit(){

  if(this.applyLeaveForm.valid){
    this.applyLeaveForm.controls["Number_Of_Days"].setValue(this.numDays);
    this.applyLeaveForm.controls["Employee_ID"].setValue(sessionStorage.getItem("empId"));
    this.restService.update<any[]>(this.applyLeaveForm)
      .subscribe((data: any[]) => this.restErrors = data,
      error => () =>{
        console.log("submitted w/ errors");
      },
      () => {
        if (this.restErrors['errors'].length > 0){
          let concat = "";
          this.restErrors['errors'].forEach((err) => {
            concat += err + "\n";
            console.log(err);
          });
          alert(concat);
        }
        else{
          alert('Leave Application Submission Successful!');
          console.log('successfully submitted');
          this.router.navigate(['status']);
          //have a dialog pop up
        }
      });
  }

}

}