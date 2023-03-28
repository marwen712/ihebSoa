import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LundProjectRoutingModule } from './lund-project-routing.module';
import { AccordComponent } from '../accord/accord.component';
import { VideoComponent } from '../video/video.component';



import { FormsModule,ReactiveFormsModule } from "@angular/forms";


import { CourbeCercleComponent } from 'src/app/azizi/courbe-cercle/courbe-cercle.component';
import { AvantageComponent } from 'src/app/azizi/avantage/avantage.component';
import { Avantage2Component } from 'src/app/azizi/avantage2/avantage2.component';
import { HomeAziziComponent } from 'src/app/azizi/home-azizi/home-azizi.component'
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';;
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxCarouselModule } from 'ngx-light-carousel';

import {Ng2TelInputModule} from 'ng2-tel-input';
import { Form3Component } from '../form3/form3.component';


@NgModule({
  declarations: [AccordComponent,VideoComponent,Form3Component],
  imports: [
    CommonModule,
    LundProjectRoutingModule,
    FormsModule,ReactiveFormsModule,
    Ng2TelInputModule
  ]
})
export class LundProjectModule { }
