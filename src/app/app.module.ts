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
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { HomeComponent } from './client/home/home.component';
import { AboutComponent } from './client/about/about.component';
import { ProductsComponent } from './client/products/products.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { SingleProductComponent } from './client/single-product/single-product.component';

import { ModalModule, InputsModule, TooltipModule, PopoverModule, ButtonsModule} from 'angular-bootstrap-md';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {  WavesModule } from 'angular-bootstrap-md';
import {IvyCarouselModule} from 'carousel-angular';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';
@NgModule({
declarations: [
    AppComponent,
    AceuilComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProductsComponent,
    ContactUsComponent,
    SingleProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    ModalModule, InputsModule, TooltipModule, PopoverModule, ButtonsModule,  MDBBootstrapModule.forRoot(),CarouselModule, WavesModule,
    IvyCarouselModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxGoogleAnalyticsModule.forRoot('G-QP9B6YSFVC'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [AsyncPipe,MessagingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
