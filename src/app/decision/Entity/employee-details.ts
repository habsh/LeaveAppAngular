import { LeaveDetails } from './leave-details';

export class EmployeeDetails{
    employeeId:number;
    employeeName:string;
    leaveBalance:number;
    leaves:LeaveDetails;

    EmployeeDetails(){
        this.employeeId=0;
        this.employeeName='';
        this.leaveBalance=0;
        this.leaves=new LeaveDetails;
    }
} 