import { Leave } from './leave.entity';

export class Employee {


    empId: number;
    empName: string = 'Buddyboy';
    empPhone: number;
    empDept: string;
    empMail: string;
    empDoj: Date;
    leaveBalance: number;
    empMngId: number;


    leaves: Array<Leave>

    loadFromSessionStorage() {
        this.empId = parseInt(sessionStorage.getItem("empId"))
        this.empName = sessionStorage.getItem("empName")
        this.empPhone = parseInt(sessionStorage.getItem("empPhone"))
        this.empDept = sessionStorage.getItem("empDept")
        this.empMail = sessionStorage.getItem("empMail")
        this.empDoj = new Date(parseInt(sessionStorage.getItem("empDoj")))
        this.leaveBalance = parseInt(sessionStorage.getItem("leaveBalance"))
        this.empMngId = parseInt(sessionStorage.getItem("empMngId"))
    }
}