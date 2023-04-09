import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

import { CrudService } from 'src/app/services/crud.service';
import { ImgService } from 'src/app/services/img.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { ngxLightOptions } from  'ngx-light-carousel/public-api'
import { MatCarousel, MatCarouselComponent } from 'ng-mat-carousel'
import * as  AOS from 'aos';
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
  
    AOS.init();

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


   developers = [
    "logo-dev1.png",
    "logo-dev2.png",
    "logo-dev3.png",
    "logo-dev4.png",
    "logo-dev5.png",
    "logo-dev6.png",
    "logo-dev7.png",
    "logo-dev8.png",
    "logo-dev9.png"]

  // create developer item
  createSlide({devp}){

    var container = document.createElement("div")
    var content = document.createElement("img")

    container.setAttribute("class","sd-img")

    content.src = "/assets/images/developers/"+devp
     content.alt="hearrt of carthage real estate"
    content.style.width = "85%"

    container.appendChild(content)

    return container

  }

  slideContainer:any

  // create slide
  createContainerSlide({slides,id}){

    this.slideContainer = document.getElementById("sliderContainer")

    var container = document.createElement("div")

    container.setAttribute("class","slide")

    container.style.width = "100%"
    container.style.height = "100%"
    container.style.display = "flex"
    container.style.alignItems = "center"
    container.style.justifyContent = "space-around"

    container.id = id

    this.groupes_slide.push(id)

    this.slides.map(sl=>{

      container.appendChild(sl)

    })

    this.slideContainer.appendChild(container)

  }

  slides_counter = 0

  slides:any = []

  groupes_counter = 0

  slide:any

  phoneScreen:any

  logoOffPlan(devName){

    const devp_name = devName.toLowerCase().split(' ').join('') 

    return "/assets/images/developers/"+devp_name+".png"

  }

  groupes_slide:any = []

  direction = "left"

  counter_slide_auto = 0

  slideWidth:any

  ngOnInit(): void {
   
    

    //slider developers : scrolling auto

    this.phoneScreen = window.matchMedia('(max-width: 480px)')

    if(!(this.phoneScreen.matches)){

      setInterval(()=>{

        this.slide = document.getElementById("sliderContainer")

        this.slideWidth = document.getElementById(this.groupes_slide[0])

        if(this.counter_slide_auto === 0){

          this.direction = "left"

        }else if(this.counter_slide_auto === (this.groupes_slide.length-1)){

          this.direction = "right"

        } 

        if(this.direction === "left"){

          this.slide.scrollBy({
            left: this.slide.scrollLeft + this.slideWidth.offsetWidth,
            behavior: 'smooth'
          });
          this.counter_slide_auto++
          
        }else if(this.direction === "right"){

          this.slide.scrollBy({
            left: this.slide.scrollLeft - (this.slideWidth.offsetWidth*this.groupes_slide.length),
            behavior: 'smooth'
          });
          this.counter_slide_auto--

        }

    },5000)

    }

    // create slides devevlopers
  for (var i = 0 ; i < this.developers.length; i++) {
    
    if(this.slides_counter === 3){


      this.createContainerSlide({slides:this.slides,id:"group"+this.groupes_counter})
      this.slides = []
      this.groupes_counter++
      this.slides_counter = 0
    }

    if(i === this.developers.length-1){

      var slide = this.createSlide({devp:this.developers[i]})

      this.slides.push(slide)

      this.createContainerSlide({slides:this.slides,id:"group"+this.groupes_counter})
      this.slides = []
      this.groupes_counter++
      this.slides_counter = 0

    }
    var slide = this.createSlide({devp:this.developers[i]})

    this.slides.push(slide)

    this.slides_counter++

  }
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
        this.tabOff= this.tabOff.reverse().slice(0,3)

        this.crud.loadingOff=false
       
        console.log(this.tabOff)
       
      }
     
    })
    this.http.get(environment.baseURL+this.urlVila).subscribe(res=>{
      if (res.valueOf()){
        var   ob:any
        ob=res.valueOf()
  
        this.tabVila=ob
        this.tabVila= this.tabVila.reverse().slice(0,3)
        this.crud.tabVilaProd=this.tabVila
        this.crud.loadingVila=false
       
        console.log(this.tabVila)
       
      }
     
    })
    this.http.get(environment.baseURL+this.urlRent).subscribe(res=>{
    if (res.valueOf()){
      var   ob:any
      ob=res.valueOf()

      this.tabRent=ob
      this.tabRent= this.tabRent.reverse().slice(0,3)
      this.crud.tabRentProd=this.tabRent
      this.crud.loadingRent=false
     
      console.log(this.tabRent)
     
    }
   
  })
  this.http.get(environment.baseURL+this.urlAppr).subscribe(res=>{
    if (res.valueOf()){
      var   ob:any
      ob=res.valueOf()

      this.tabAppr=ob
      this.tabAppr=this.tabAppr.reverse().slice(0,3)
      this.crud.tabApprProd=this.tabAppr
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
/*  <section id="aa-latest-property" style="margin-top: 4%;margin-bottom: 3%;">
    <div class="container">
      <div class="aa-latest-property-area">
        <div class="aa-title" id="featuredTitle">
          <h2>FEATURED PROPERTIES</h2>
          <span></span>
                 
        </div>
        <div class="row" style="text-align: center;margin-top: 20%; " *ngIf="crud.loadingVila">
          <div class="col-12">
              <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                  <span class="visually-hidden"> Loading...</span>
                </div>
          </div>
      </div>
      <div class="row" style="text-align: center;margin-top: 20%; " *ngIf="crud.loadingAppr">
        <div class="col-12">
            <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                <span class="visually-hidden"> Loading...</span>
              </div>
        </div>
    </div>
 
        <div class="aa-latest-properties-content" style="padding: 2% 0;">
         <div class="row" *ngIf="!crud.loadingVila">
            

            <div class="ft-ctn off-plan" *ngFor="let vila of tabVila; index as i">
              <div class="title-box" style="background-color: red;">Villa</div>
              <div class="cover-image">
                <img [src]="vila.imgs[0]" />
              </div>
              <div class="details-ctn">
                <p class="item-details-ctn"><i class="fa-solid fa-sink"></i> {{vila.bath}} Baths</p>
                <p class="item-details-ctn"><i class="fa-solid fa-bed"></i> {{vila.bed}} Beds</p>
                <p class="item-details-ctn"><i class="fa-regular fa-square"></i> {{vila.surface}} SQ FT</p>
              </div>
              <p class="title" >{{vila.title}}</p>
              <div class="description" >
                {{vila. stitle}} {{vila. prix}}
              </div>
              <div class="footer-box">
                <div class="logo-devp"><p  class="priceHabib"> {{vila.prixFinal}}  </p></div>
                <p class="view-btn" (click)="nav2(i)"><i class="fa-regular fa-eye"></i></p>
              </div>
            </div>

            <!--div class="col-md-4"  *ngFor="let vila of tabVila; index as i">
              <article class="aa-properties-item">
                <a  class="aa-properties-item-img">
                  <img [src]="vila.imgs[0]" alt="img">
                </a>                
                <div class="aa-tag sold-out">
                  Vila
                </div>
                <div class="aa-properties-item-content">
                  <div class="aa-properties-info">
                    <span>{{vila.room}} Rooms</span>
                    <span>{{vila.bed}} Beds</span>
                    <span>{{vila.bath}} Baths</span>
                    <span>{{vila.surface}} SQ FT</span>
                  </div>
                  <div class="aa-properties-about">
                    <h3><a style="color: #C9A770;">{{vila.title}}</a></h3>
                    <p>{{vila. stitle}} {{vila. prix}}</p>                      
                  </div>
                  <div class="aa-properties-detial">
                    <span class="aa-price">
                      {{vila.prixFinal}} <img src="assets/images/2857905-200.png" style="height: 30px;width: 50px;" alt="Heart of carthage Dubai">
                    </span>
                    <a  class="aa-secondary-btn" (click)="nav2(i)">View Details</a>
                  </div>
                </div>
              </article>
            
            </div-->
          </div>
        
        </div>
        <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="aa-promo-banner-area" style="text-align:center;">
        
          <a routerLink="/vila" style="text-align: center;width:200px;background-color: transparent; " class="aa-view-btn" style="color: #f37233;">View  more <i class="fas fa-angle-double-right"></i></a>
        </div>
      </div>
    </div>
  </div>
        <!--2-->

        <div class="aa-latest-properties-content">
          
           <div class="row">

            <div class="ft-ctn off-plan" *ngFor="let vila of tabAppr ;index as i">
              <div class="title-box" style="background-color: rgb(32, 206, 179);">
                Apartment</div>
              <div class="cover-image">
                <img [src]="vila.imgs[0]" />
              </div>
              <div class="details-ctn">
                <p class="item-details-ctn"><i class="fa-solid fa-sink"></i> {{vila.bath}} Baths</p>
                <p class="item-details-ctn"><i class="fa-solid fa-bed"></i> {{vila.bed}} Beds</p>
                <p class="item-details-ctn"><i class="fa-regular fa-square"></i> {{vila.surface}} SQ FT</p>
              </div>
              <p class="title" >{{vila.title}}</p>
              <div class="description" >
                {{vila. stitle}} {{vila. prix}}
              </div>
              <div class="footer-box">
                <div class="logo-devp"><p  class="priceHabib"> {{vila.prixFinal}}  </p></div>
                <p class="view-btn" (click)="nav3(i)"><i class="fa-regular fa-eye"></i></p>
              </div>
            </div>

           <!--div class="col-md-4" *ngFor="let vila of tabAppr ;index as i">
             <article class="aa-properties-item">
               <a class="aa-properties-item-img">
                 <img [src]="vila.imgs[0]" alt="img">
               </a>
               <div class="aa-tag for-rent">
                Apartement
               </div>
               <div class="aa-properties-item-content">
                 <div class="aa-properties-info">
                   <span>{{vila.room}} Room</span>
                   <span>{{vila.bed}} Beds</span>
                   <span>{{vila.bath}} Baths</span>
                   <span>{{vila.surface}} SQ FT</span>
                 </div>
                 <div class="aa-properties-about">
                   <h3><a style="color: #C9A770;">{{vila.title}}</a></h3>
                   <p>{{vila. stitle}} {{vila. prix}}</p>                      
                 </div>
                 <div class="aa-properties-detial">
                   <span class="aa-price">
                     {{vila.prixFinal}} <img src="assets/images/2857905-200.png" style="height: 30px;width: 50px;" alt="Heart of carthage Dubai">
                   </span> 
                   <a  class="aa-secondary-btn" (click)="nav3(i)">View Details</a>
                 </div>
               </div>
             </article>
           </div-->
          </div>
         </div>
         <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="aa-promo-banner-area" style="text-align:center;">
              
                <a routerLink="/appr" style="text-align: center;width:200px;background-color: transparent; " class="aa-view-btn" style="color: #f37233;">View  more <i class="fas fa-angle-double-right"></i></a>
              </div>
            </div>
          </div>
        </div>
        <!--fin 2-->
      </div>
    </div>
  </section> */
/*
<section id="aa-latest-property" style="margin-top: 4%;margin-bottom: 3%;">
    <div class="container">
      <div class="aa-latest-property-area">
        <div class="aa-title">
          <h2>Rent</h2>
          <span></span>
                 
        </div>
        <div class="row" style="text-align: center;margin-top: 20%; " *ngIf="crud.loadingRent">
          <div class="col-12">
              <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
                  <span class="visually-hidden"> Loading...</span>
                </div>
          </div>
      </div>
     
 
        <div class="aa-latest-properties-content">

         <div class="row" *ngIf="!crud.loadingRent">
          
            <div class="ft-ctn" *ngFor="let vila of tabRent; index as i">
              <div class="title-box" style="background-color: rgb(32, 206, 179);">Rent</div>
              <div class="cover-image">
                <img [src]="vila.imgs[0]" />
              </div>
              <div class="details-ctn">
                <p class="item-details-ctn"><i class="fa-solid fa-sink"></i> {{vila.bath}} Baths</p>
                <p class="item-details-ctn"><i class="fa-solid fa-bed"></i> {{vila.bed}} Beds</p>
                <p class="item-details-ctn"><i class="fa-regular fa-square"></i> {{vila.surface}} SQ FT</p>
              </div>
              <p class="title">{{vila.title}}</p>
              <div class="description">
                {{vila. stitle}} {{vila. prix}}
              </div>
              <div class="footer-box">
                <div class="logo-devp"><p class="priceHabib"> {{vila.prixFinal}} </p></div>
                <p class="view-btn" (click)="nav4(i)"><i class="fa-regular fa-eye"></i></p>
              </div>
            </div>
            <!--div class="col-md-4"  *ngFor="let vila of tabRent; index as i">
              <article class="aa-properties-item">
                <a  class="aa-properties-item-img">
                  <img [src]="vila.imgs[0]" alt="img">
                </a>                
                <div class="aa-tag for-rent">
                Rent
                </div>
                <div class="aa-properties-item-content">
                  <div class="aa-properties-info">
                    <span>{{vila.room}} Rooms</span>
                    <span>{{vila.bed}} Beds</span>
                    <span>{{vila.bath}} Baths</span>
                    <span>{{vila.surface}} SQ FT</span>
                  </div>
                  <div class="aa-properties-about">
                    <h3><a style="color: #C9A770;">{{vila.title}}</a></h3>
                    <p>{{vila. stitle}} {{vila. prix}}</p>                      
                  </div>
                  <div class="aa-properties-detial">
                    <span class="aa-price">
                      {{vila.prixFinal}} <img src="assets/images/2857905-200.png" style="height: 30px;width: 50px;" alt="Heart of carthage Dubai">
                    </span>
                    <a  class="aa-secondary-btn" (click)="nav4(i)">View Details</a>
                  </div>
                </div>
              </article>
            
            </div-->
          </div>
        
        </div>
        <!--2-->
        
        <!--fin 2-->
      </div>
    </div>
  </section>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="aa-promo-banner-area" style="text-align:center;">
        
          <a routerLink="/" style="text-align: center;width:200px;background-color: transparent; " class="aa-view-btn" style="color: #f37233;">View  more <i class="fas fa-angle-double-right"></i></a>
        </div>
      </div>
    </div>
  </div>*/ 