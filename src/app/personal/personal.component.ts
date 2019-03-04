import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.entity';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from './personal.service';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
  providers: [PersonalService]
})
export class PersonalComponent implements OnInit {
  employee = new Employee();
  constructor(private route: ActivatedRoute, private personalService:PersonalService) { }

  ngOnInit() {
    // this.employee.loadFromSessionStorage()
    this.personalService.obtainID(this.route.snapshot.params['empID']).subscribe((data: Employee) => 
        this.employee = data);
  }

}
