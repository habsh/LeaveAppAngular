import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'leaveapp';
  

  ngOnInit(){
    var path=location.pathname
    var empId=sessionStorage.getItem("empId")
    if(path!="/login"&&empId==null){
      location.href="/login"
    }
  }
  
}
