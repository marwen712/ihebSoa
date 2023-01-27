import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router,ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/services/crud.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import * as  AOS from 'aos';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {

  public  loadingOff=false
  public dev=""
  public title=""
  public stitle=""
  public desc=""
  public imgs:any[]=[]
  imageProfil=""

  public prix=""
  video: any;
  public phone = "+971 58 218 9263"
  public prixFinal=""


  tabim:any[]=[]
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  }
  images = [
    {path: 'assets/images/IMG-20221117-WA0012.jpg'},
    {path: 'assets/images/IMG-20221117-WA0014.jpg'},
    {path: 'assets/images/IMG-20221107-WA0016.jpg'},
    {path: 'assets/images/IMG-20221107-WA0015.jpg'},
  ]
  constructor(private route:ActivatedRoute,private http:HttpClient,public crud:CrudService , private sanitizer: DomSanitizer) { 
    AOS.init();
  }

  sliderElement:any

  fullScreenPage(slider: HTMLElement) {
    this.sliderElement = slider
    slider.style.display = "flex"
    slider.requestFullscreen();
  }

  exitFullScreen(){

    document.exitFullscreen();
    this.sliderElement.style.display = "none"

  }

  counter = 1

  counter_fullscreen = 1

  slide


  nextSlideFullScreen(){

    this.slide = document.getElementById("sliderImagesRoomDetailsFullScreen")

    this.slide.style.transform = "translateX(-"+this.counter_fullscreen+"00%)"

    if(!(this.counter_fullscreen === (this.imgs.length-1))){
      this.counter_fullscreen++
    }

  }

  prevSlideFullScreen(){

    var index = this.counter_fullscreen-1

    this.slide = document.getElementById("sliderImagesRoomDetailsFullScreen")

    this.slide.style.transform = "translateX(-"+index+"00%)" 

    if(!(this.counter_fullscreen === 1)){
      this.counter_fullscreen -= 1
    }

  }


  nextSlide(){

    this.slide = document.getElementById("sliderImagesRoomDetails")

    this.slide.style.transform = "translateX(-"+this.counter+"00%)"

    this.slide = document.getElementById("sliderImagesRoomDetailsFullScreen")

    if(!(this.counter === (this.images.length-1))){
      this.counter++
    }

  }


  previousSlide(){

    var index = this.counter-1

    this.slide = document.getElementById("sliderImagesRoomDetails")

    this.slide.style.transform = "translateX(-"+index+"00%)" 

    if(!(this.counter === 1)){
      this.counter -= 1
    }

  }


  getLogoDevp(dev){

    const devp_name = dev.toLowerCase()

    return "/assets/images/developers/"+devp_name+".png" 

  }

  ngOnInit(): void {
   
   
    this.loadingOff=true  
    this.http.get(environment.baseURL+"/off/"+this.route.snapshot.paramMap.get('id')+"/").subscribe(res=>{
    if(res.valueOf()){
        var ob:any         
         ob=res.valueOf()  
         this.imageProfil=ob.imageProfil
         this.title=ob.title
         this.crud.project=ob.title

         this.desc=ob.desc
         this.stitle=ob.stitle
         this.video=ob.video
         this.prix=ob.prix
         this.crud.lat=ob.lat
         this.dev=ob.dev
         this.crud.lng=ob.lng
         this.prixFinal=ob.prixFinal
        
         for (let i = 0; i < ob.imgs.length; i++) {
        var img ={
         
          image: ob.imgs[i],
          thumbImage: ob.imgs[i],
          title:ob.title
        }
        this.imgs.push(img)
        }
         this.crud.tabCarc=ob.carc
         this.video =  this.sanitizer.bypassSecurityTrustResourceUrl(ob.video);
      /*//     this.off=ob          
      ////console.log(imgs)
      console.log(this.video)
      // this.tabim=this.off.imgs
      console.log( this.title)
      console.log(ob,'aabb')
      console.log(this.crud.tabCarc,'eeeee')*/
       this.loadingOff=false
     }
    })


    setInterval(()=>{


      if(!((window.innerWidth === screen.width) && (window.innerHeight === screen.height))){

        this.sliderElement.style.display = "none"

      }

    },5)
  }

}