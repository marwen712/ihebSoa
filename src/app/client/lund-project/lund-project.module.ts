import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LundProjectRoutingModule } from './lund-project-routing.module';
import { AccordComponent } from '../accord/accord.component';
import { VideoComponent } from '../video/video.component';



@NgModule({
  declarations: [AccordComponent,VideoComponent],
  imports: [
    CommonModule,
    LundProjectRoutingModule
  ]
})
export class LundProjectModule { }
