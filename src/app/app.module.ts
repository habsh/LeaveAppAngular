import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusComponent } from './status/status.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PersonalComponent } from './personal/personal.component';
import { ManagerComponent } from './manager/manager.component';
import { ApplyComponent } from './apply/apply.component';
import { DecisionComponent } from './decision/decision.component';

@NgModule({
  declarations: [
    AppComponent,
    StatusComponent,
    DashboardComponent,
    LoginComponent,
    PersonalComponent,
    ManagerComponent,
    ApplyComponent,
    DecisionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
