import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { CrudService } from 'src/app/services/crud.service';
import { ImgService } from 'src/app/services/img.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ngxLightOptions } from  'ngx-light-carousel/public-api'
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  options:any
  urlOff= '/off/home/'
  urlRent= '/rent/'
  urlVila= '/vila/'
  urlAppr= '/appr/'
  testChercher=false
  testChercheAv=false
  tabOff:any[]=[]
  tabOfff:any[]=[1,2,3,4]
  tabVila:any[]=[]
  tabRent:any[]=[]
  tabAppr:any[]=[]
  tabVilaChercher:any[]=[]
  tabRentChercher:any[]=[]
  tabApprChercher:any[]=[]
  role="buy"
  VilaOrAppr="vila"
  min="0"
  max="0"
  public phone = "+971 58 218 9263"
 
  customOptions: OwlOptions = {
    loop: true,
    autoplay:false,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  }
  customOptions2: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
   
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 3,
      }
    }
  }
  constructor(public crud:CrudService , public serIm:ImgService,private http:HttpClient,private route:Router ) {
  
    

   }
   Navigate(elem: HTMLElement ) {
    elem.scrollIntoView({ behavior: 'smooth' });
    }
   //chercher
  selectRole(e:any){
  this.role=e.target.value
  }
  selectVila(e:any){
    this.VilaOrAppr=e.target.value
    }
    chercher(){
      var min=Number(this.min)
      var max=Number(this.max)
      this.testChercher=false
      this.testChercheAv=false
      if(this.role=="buy"){
        if(max==0){
         this.tabApprChercher=this.tabAppr
         this.tabVilaChercher=this.tabVila
         this.testChercher=true
        }
        if(max > 0){
          this.tabApprChercher=this.tabAppr.filter(ele=>Number(ele.prixFinal) >= min && Number(ele.prixFinal) <= max)
          this.tabVilaChercher=this.tabVila.filter(ele=>Number(ele.prixFinal) >= min && Number(ele.prixFinal) <= max)
          console.log(this.tabVilaChercher)
          if(this.tabApprChercher.length > 0 || this.tabVilaChercher.length > 0){
            this.testChercher=true
          }
          if(this.tabApprChercher.length ==0  && this.tabVilaChercher.length == 0){
            this.testChercheAv=true
          }
        }
      }
      if(this.role=="rent"){
        if(max==0){
          this.tabRentChercher=this.tabRent
          this.testChercher=true
          
         }
         if(max > 0){
           this.tabRentChercher=this.tabRent.filter(ele=>Number(ele.prixFinal) >= min && Number(ele.prixFinal) <= max)
           if(this.tabRentChercher.length > 0 ) {
            this.testChercher=true
          }
          if(this.tabRentChercher.length == 0 ) {
            this.testChercheAv=true
          }
         }
      }
    }
   //Fchercher
   funcOff(url:string,tab:any,test:boolean){
    
   }

  ngOnInit(): void {
    this.crud.loadingOff=true
    this.crud.loadingRent=true
    this.crud.loadingAppr=true
    this.crud.loadingVila=true
   var u  =environment.baseURL+'/off/'
    this.http.get(u.trim()).subscribe(res=>{
      if (res.valueOf()){
        var   ob:any
        ob=res.valueOf()

        this.tabOff=ob
        this.tabOff= this.tabOff.reverse().slice(0,11)

        this.crud.loadingOff=false
       
        console.log(this.tabOff)
       
      }
     
    })
    this.http.get(environment.baseURL+this.urlVila).subscribe(res=>{
      if (res.valueOf()){
        var   ob:any
        ob=res.valueOf()
  
        this.tabVila=ob
        this.tabVila= this.tabVila.reverse().slice(0,11)
        this.crud.loadingVila=false
       
        console.log(this.tabVila)
       
      }
     
    })
    this.http.get(environment.baseURL+this.urlRent).subscribe(res=>{
    if (res.valueOf()){
      var   ob:any
      ob=res.valueOf()

      this.tabRent=ob
      this.tabRent= this.tabRent.reverse().slice(0,11)
      this.crud.loadingRent=false
     
      console.log(this.tabRent)
     
    }
   
  })
  this.http.get(environment.baseURL+this.urlAppr).subscribe(res=>{
    if (res.valueOf()){
      var   ob:any
      ob=res.valueOf()

      this.tabAppr=ob
      this.tabAppr=this.tabAppr.reverse().slice(0,11)
      this.crud.loadingAppr=false
     
      console.log(this.tabAppr)
     
    }
   
  })
  }
 nav1(i:any){
 this.route.navigate(["/Off-Plan",this.tabOff[i]._id])
 }
 nav2(i:any){
  this.route.navigate(["/Vila",this.tabVila[i]._id])
 }
 nav3(i:any){
  this.route.navigate(["/Appr",this.tabAppr[i]._id])
 }
 nav4(i:any){
  this.route.navigate(["/Rent",this.tabRent[i]._id])
 }
}
