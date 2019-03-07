import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from '../apply/apply.component';
import { StatusComponent } from '../status/status.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PersonalComponent } from '../personal/personal.component';
import { ManagerComponent } from '../manager/manager.component';
import { DecisionComponent } from '../decision/decision.component';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { LeaveApprovalComponent } from '../decision/leave-approval/leave-approval.component';
import {Title} from "@angular/platform-browser";
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

const routes: Routes = [
    {
        path:'apply',
        component:ApplyComponent,
        data:{title:"Apply for Leave"}
    },
    {
        path:'login',
        component:LoginComponent,
        data:{title:"Login - LeaveApp"}
    },
    {
      path:'register',
      component:RegisterComponent,
  },
    {
        path:'decision',
        component:DecisionComponent,
        data:{title:"Pending Leaves Status"}
    },
    {
        path:'manager/:empId',
        component:ManagerComponent,
        data:{title:"My Managers Details"}
    },
    {
        path:'details',
        component:PersonalComponent,
        data:{title:"My Details"}
    },
    {
        path:'decision/leave-approval/:leaveId',
        component:LeaveApprovalComponent,
        data:{title:"Approve/Deny Leave"}
    },
    {
        path:'decision/leave-approval/:something/decision',
        redirectTo: 'decision'
    },
 
    {
      path:'status',
      component: StatusComponent,
      data:{title:"Leave Status"}
    },
    {
        path: '',
        component: DashboardComponent,
        data:{title:"Leave Dashboard"}
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { 
    constructor(titleService:Title, router:Router, activatedRoute:ActivatedRoute) {
        router.events.subscribe(event => {
          if(event instanceof NavigationEnd) {
            var title = this.getTitle(router.routerState, router.routerState.root).join('-');
            console.log('title', title);
            titleService.setTitle(title);
          }
        });
      }
    
      // collect that title data properties from all child routes
      // there might be a better way but this worked for me
      getTitle(state, parent) {
        var data = [];
        if(parent && parent.snapshot.data && parent.snapshot.data.title) {
          data.push(parent.snapshot.data.title);
        }
    
        if(state && parent) {
          data.push(... this.getTitle(state, state.firstChild(parent)));
        }
        return data;
      }
  
    
}
