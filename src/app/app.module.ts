import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireMessagingModule } from '@angular/fire/messaging' ; 
import { AngularFireDatabaseModule } from '@angular/fire/database' ; 
import { AngularFireAuthModule }  from '@angular/fire/auth' ; 
import { AngularFireModule }from '@angular/fire' ; 
import { MessagingService }from './services/messaging.service' ; 
import { environment } from 'src/environments/environment';
import { AsyncPipe } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { AceuilComponent } from './client/aceuil/aceuil.component';

import { FooterComponent } from './client/footer/footer.component';

import { AboutComponent } from './client/about/about.component';
import { ProductsComponent } from './client/products/products.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { SingleProductComponent } from './client/single-product/single-product.component';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {Ng2TelInputModule} from 'ng2-tel-input';
import { PixelModule } from 'ngx-pixel'
import { NgImageSliderModule } from 'ng-image-slider';
import { ModalModule, InputsModule, TooltipModule, PopoverModule, ButtonsModule} from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  WavesModule } from 'angular-bootstrap-md';

import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
import { MatCarouselModule } from 'ng-mat-carousel';

import { NgxWhastappButtonModule } from "ngx-whatsapp-button";

import { Lunding2Component } from './client/lunding2/lunding2.component';
import { ProducVilaComponent } from './client/produc-vila/produc-vila.component';
import { PrudcApparComponent } from './client/prudc-appar/prudc-appar.component';
import { Lund3Component } from './client/lund3/lund3.component';
import { Lunding4Component } from './client/lunding4/lunding4.component';
import { Form1Component } from './client/form1/form1.component';
import { Form2Component } from './client/form2/form2.component';

import { AccordComponent } from './client/accord/accord.component';
import { Map1Component } from './client/map1/map1.component';
import { AgmCoreModule } from '@agm/core';
import { Map4Component } from './client/map4/map4.component';

import { CarcComponent } from './client/carc/carc.component';
import { ProductOffPlanComponent } from './client/product-off-plan/product-off-plan.component';
import { Home1Component } from './client/home1/home1.component';
import { NgxCarouselModule } from 'ngx-light-carousel';

import {IvyCarouselModule} from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';;
import { QRCodeModule } from 'angularx-qrcode';

import { SurveyAppComponent } from './survey-app/survey-app.component';
import { NotBoxArabeComponent } from './not-box-arabe/not-box-arabe.component';
import { NotBoxEnglishComponent } from './not-box-english/not-box-english.component';
import { HomeModule } from './client/home/home.module';
import { HeaderComponent } from './client/header/header.component';
import { CustomNavBarComponent } from './custom-nav-bar/custom-nav-bar.component';
import { ProdComponent } from './client/prod/prod.component';
import { VideoComponent } from './client/video/video.component';
import { Form3Component } from './client/form3/form3.component';
import { CardComponent } from './client/card/card.component';
import { SectionAnimationComponent } from './client/section-animation/section-animation.component';
import { FormConslutationComponent } from './client/form-conslutation/form-conslutation.component';
//import { CustomHeaderComponent } from './custom-header/custom-header.component';



@NgModule({
declarations: [
    AppComponent,
    AceuilComponent,
    
    FooterComponent,
   
    AboutComponent,
    ProductsComponent,
    ContactUsComponent,
    SingleProductComponent,
 
  
    Lunding2Component,
    ProducVilaComponent,
    PrudcApparComponent,
    Lund3Component,
    Lunding4Component,
    Form1Component,
    Form2Component,
 
   
    Map1Component,
  
    Map4Component,
    CarcComponent,
    ProductOffPlanComponent,
    Home1Component,
   
    SurveyAppComponent,
    NotBoxArabeComponent,
    NotBoxEnglishComponent,
    CustomNavBarComponent,
    FormConslutationComponent,
   
    
  
   
   
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    PixelModule.forRoot({ enabled: true, pixelId: '1339761106585275'}),
    HomeModule,
    HttpClientModule,
    ModalModule, InputsModule, TooltipModule, PopoverModule, ButtonsModule,  MDBBootstrapModule.forRoot(),CarouselModule, WavesModule,
    IvyCarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxGoogleAnalyticsModule.forRoot('G-QP9B6YSFVC'),
    NgxGoogleAnalyticsRouterModule,
    FormsModule,ReactiveFormsModule ,
    AgmCoreModule.forRoot({ apiKey:""  }),
    NgxWhastappButtonModule,
    Ng2TelInputModule,
    MatCarouselModule.forRoot(),
    NgImageSliderModule,
    NgxCarouselModule ,
    QRCodeModule

   // HomeModule
  ],
  providers: [AsyncPipe,MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
