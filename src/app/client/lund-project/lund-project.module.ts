import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LundProjectRoutingModule } from './lund-project-routing.module';
import { AccordComponent } from '../accord/accord.component';
import { VideoComponent } from '../video/video.component';



import { FormsModule,ReactiveFormsModule } from "@angular/forms";



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
