import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgmCoreModule } from '@agm/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";

import { AdminRoutingModule } from './admin-routing.module';
import { AppartementComponent } from '../appartement/appartement.component';
import { DashComponent } from '../dash/dash.component';
import { LoginComponent } from '../login/login.component';
import { Map3Component } from '../map3/map3.component';
import { RentComponent } from '../rent/rent.component';
import { UpdateOffplanComponent } from '../update-offplan/update-offplan.component';
import { UserComponent } from '../user/user.component';
import { VilaComponent } from '../vila/vila.component';
import { OffPlanComponent } from '../off-plan/off-plan.component';
import { ProjectOneComponent } from '../project-one/project-one.component';

@NgModule({
  declarations: [AppartementComponent , ProjectOneComponent, DashComponent, LoginComponent,Map3Component,RentComponent,UpdateOffplanComponent,UserComponent,VilaComponent,OffPlanComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,ReactiveFormsModule,
    AgmCoreModule.forRoot({ apiKey:""  }),
   
  ]
})
export class AdminModule { }
