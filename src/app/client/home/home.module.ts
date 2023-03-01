import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
   import {HeaderComponent} from "../header/header.component"

import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AngularFireMessagingModule } from '@angular/fire/messaging' ; 
import { AngularFireDatabaseModule } from '@angular/fire/database' ; 
import { AngularFireAuthModule }  from '@angular/fire/auth' ; 
import { AngularFireModule }from '@angular/fire' ; 

import { environment } from 'src/environments/environment';
import { AsyncPipe } from '@angular/common';

import {Ng2TelInputModule} from 'ng2-tel-input';
import { NgImageSliderModule } from 'ng-image-slider';
import { ModalModule, InputsModule, TooltipModule, PopoverModule, ButtonsModule} from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  WavesModule } from 'angular-bootstrap-md';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { MatCarouselModule } from 'ng-mat-carousel';

import { NgxWhastappButtonModule } from "ngx-whatsapp-button";


import { AgmCoreModule } from '@agm/core';
import { NgxCarouselModule } from 'ngx-light-carousel';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ChooseClientComponent } from '../choose-client/choose-client.component';
@NgModule({
  declarations: [ HomeComponent,ChooseClientComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
 FormsModule,
 ReactiveFormsModule 
    
  ]
})
export class HomeModule { }
