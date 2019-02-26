import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  empId : number;
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit() {
    this.empId = this.route.snapshot.params['empId'];
  }

}
