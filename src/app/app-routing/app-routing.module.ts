import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StatusComponent } from '../status/status.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PersonalComponent } from '../personal/personal.component';
import { ManagerComponent } from '../manager/manager.component';
import { DecisionComponent } from '../decision/decision.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'decision',
        component:DecisionComponent
    },
    {
        path:'manager/:empId',
        component:ManagerComponent
    },
    {
        path:'details',
        component:PersonalComponent
    },
    {
      path:'status',
      component: StatusComponent
    },
    {
        path: '',
        component: DashboardComponent,
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
export class AppRoutingModule { }
