import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.entity';


@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  employee = new Employee();
  constructor() { }

  ngOnInit() {
    this.employee.loadFromSessionStorage()
  }

}
