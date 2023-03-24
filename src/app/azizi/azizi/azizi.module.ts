import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AziziRoutingModule } from './azizi-routing.module';

import { CourbeCercleComponent } from 'src/app/azizi/courbe-cercle/courbe-cercle.component';
import { AvantageComponent } from 'src/app/azizi/avantage/avantage.component';
import { Avantage2Component } from 'src/app/azizi/avantage2/avantage2.component';
import { HomeAziziComponent } from 'src/app/azizi/home-azizi/home-azizi.component'
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';;
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxCarouselModule } from 'ngx-light-carousel';
import { LundingAziziModule } from '../lunding-azizi/lunding-azizi.module';
import { LundingPageAziziComponent } from '../lunding-page-azizi/lunding-page-azizi.component';
import {Ng2TelInputModule} from 'ng2-tel-input';


@NgModule({
  declarations: [
   LundingPageAziziComponent,
    HomeAziziComponent,
    Avantage2Component,
    AvantageComponent,
    CourbeCercleComponent,

  ],
  imports: [
    Ng2TelInputModule,
    CommonModule,
    AziziRoutingModule,
    FormsModule,ReactiveFormsModule,
    IvyCarouselModule,
    CarouselModule,
    NgxCarouselModule ,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
      /*kkk*/ 
     
    }),
  ]
})
export class AziziModule { }
