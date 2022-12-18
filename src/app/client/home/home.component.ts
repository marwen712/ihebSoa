import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { CrudService } from 'src/app/services/crud.service';
import { ImgService } from 'src/app/services/img.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  urlOff= '/off/home/'
  urlRent= '/rent/'
  urlVila= '/vila/'
  urlAppr= '/appr/'
  tabOff:any[]=[]
  tabVila:any[]=[]
  tabRent:any[]=[]
  tabAppr:any[]=[]

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
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
        this.tabOff= this.tabOff.reverse().slice(0,4)

        this.crud.loadingOff=false
       
        console.log(this.tabOff)
       
      }
     
    })
    this.http.get(environment.baseURL+this.urlVila).subscribe(res=>{
      if (res.valueOf()){
        var   ob:any
        ob=res.valueOf()
  
        this.tabVila=ob
        this.tabVila= this.tabVila.reverse().slice(0,4)
        this.crud.loadingVila=false
       
        console.log(this.tabVila)
       
      }
     
    })
    this.http.get(environment.baseURL+this.urlRent).subscribe(res=>{
    if (res.valueOf()){
      var   ob:any
      ob=res.valueOf()

      this.tabRent=ob
      this.tabRent= this.tabRent.reverse().slice(0,4)
      this.crud.loadingRent=false
     
      console.log(this.tabRent)
     
    }
   
  })
  this.http.get(environment.baseURL+this.urlAppr).subscribe(res=>{
    if (res.valueOf()){
      var   ob:any
      ob=res.valueOf()

      this.tabAppr=ob
      this.tabAppr=this.tabAppr.reverse().slice(0,4)
      this.crud.loadingAppr=false
     
      console.log(this.tabAppr)
     
    }
   
  })
  }
 nav1(i:any){
 this.route.navigate(["/single-product",this.tabOff[i]._id])
 }
 nav2(i:any){
  this.route.navigate(["/single-product2",this.tabVila[i]._id])
 }
 nav3(i:any){
  this.route.navigate(["/single-product3",this.tabAppr[i]._id])
 }
}
