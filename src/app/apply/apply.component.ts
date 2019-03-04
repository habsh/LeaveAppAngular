import { Component ,OnInit, Input} from '@angular/core';
import { FormsModule,ReactiveFormsModule,FormGroup,  FormBuilder,  Validators, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';
import { RestService } from './rest.service'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'apply-root',
  providers: [  ],
  templateUrl: './apply.component.html',
  styleUrls: ['./apply.component.css']
})
export class ApplyComponent implements OnInit{
  
  empId:number;
  title = "Input"
  applyLeaveForm: FormGroup;
  submitted = false;
  testError = false;
  numDays:number;
  restErrors: any[];
   constructor(private fb: FormBuilder, private restService: RestService,
    private route:ActivatedRoute, private router:Router) {  }
  ngOnInit() {
      this.applyLeaveForm = this.fb.group({
        Start_Date: ['', Validators.required ],
        End_Date: ['', [Validators.required ]],
        Number_Of_Days: [''],
        Leave_Type:[''],
        Leave_Reason:[''],
        Employee_ID:['']
        }, {validator: this.dateLessThan('Start_Date','End_Date')},
      
      );
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
          this.restErrors['errors'].forEach((err) => {
            console.log(err);
          });
        }
        else{
          this.router.navigate(['status']);
          console.log('successfully submitted');
          //have a dialog pop up
        }
      });
  }

}

}