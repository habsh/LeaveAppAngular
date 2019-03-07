import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.entity';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from './personal.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [PersonalService]
})
export class PersonalComponent implements OnInit {
  employee;
  constructor(private route: ActivatedRoute, private personalService:PersonalService) { }

  ngOnInit() {
    // this.employee.loadFromSessionStorage()
    let empId:number = parseInt(sessionStorage.getItem("empId"));
    this.personalService.obtainID(empId).subscribe((data: any[]) => this.employee = data);
    
  }

}
