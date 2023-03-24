import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-custom-nav-bar',
  templateUrl: './custom-nav-bar.component.html',
  styleUrls: ['./custom-nav-bar.component.css']
})
export class CustomNavBarComponent implements OnInit {

  constructor(private route:Router) { }
  element:any

  navBarScroll:any

  nav(e:any){
    this.route.navigate([e])
  }
  openSide(){
    this.element = document.getElementById("sideBar")
    this.element.style.display = "flex"
  }

  closeSide(){
    this.element = document.getElementById("sideBar")
    this.element.style.display = "none"
  }
  openCloseDropSide(drop:any,drop2:any,drop3:any,drop4,drop5){
    drop2.style.height="0px"
    drop3.style.height="0px"
    drop4.style.height="0px"
    drop5.style.height="0px"
  
    console.log(drop.style.height ,"height")
    if( drop.style.height == "0px" ){

      drop.style.height="auto"
      console.log("height")

    }
    else{

      drop.style.height="0px"

    }

  }

  ngOnInit(): void {

    window.addEventListener("scroll",()=>{

      if(window.scrollY > 70){
        this.navBarScroll = document.querySelector(".nav-bar-on-scroll-event")
        this.navBarScroll.style.opacity = "1"
        this.navBarScroll.style.top = "0%"
        this.navBarScroll.style.pointerEvents = "all"
      }else{
        this.navBarScroll.style.opacity = "0"
        this.navBarScroll.style.top = "-100%"
        this.navBarScroll.style.pointerEvents = "none"
      }

    })

  }

}

