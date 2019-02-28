export class LeaveDetails {
    leaveId:number;
    employeeId:number;
    employeeName:string;
    leaveBalance:number;
    startDate:string;
    endDate:string;
    days:number;
    leaveType:string;
    reason:string;
    status:string;
    comments:string;

    constructor(){
        this.leaveId=0;
        this.employeeId=0;
        this.employeeName='';
        this.leaveBalance=0;
        this.startDate='';
        this.endDate='';
        this.days=0;
        this.reason='';
        this.status='';
        this.comments;
    }
}