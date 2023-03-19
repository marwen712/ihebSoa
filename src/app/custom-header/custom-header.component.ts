import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit {

  constructor( private route:Router ,private crud:CrudService) { }

  element:any
  saa:any
  sale="Sale"
  prop="Property Type"
  nav(e){
    this.crud.isCustomNavBar = true
    this.route.navigate([e])
    console.log(5)
  }
  searchAllDropList = {
    sale:["Sale","Rent"],
    propertyType:["Property Type","Appartment","Villa","Townhouse","Penthouse","Office space","Shop"],
    minArea: ["Max budget","300k AED","500K AED","1M AED","2M AED","3M+ AED"],
    maxArea:["Max budget","300k AED","500K AED","1M AED","2M AED","3M+ AED"]
  }

  formSearch = {
    saleRent:"Sale",
    propertyType:"Property Type",
    minArea:"Min budget",
    maxArea:"Max budjet"
  }

  selectItemSale(dp:any,key:any,value:any){

    this.formSearch[key] = value
   this.sale=value
    this.saa.value= value
    console.log(this.formSearch[key])

    this.openCloseDrop(dp)

  }
  selectItemP(dp:any,key:any,value:any){

    this.formSearch[key] = value
   this.prop=value
    console.log(this.prop,5555)
    console.log(this.formSearch[key])

    this.openCloseDrop(dp)

  }

  selectItem(dp:any,key:any,value:any){

    this.formSearch[key] = value
   
    console.log(this.formSearch[key])

    this.openCloseDrop(dp)

  }
search(){
  console.log(this.sale ,"aaaa")
  this.crud.isCustomNavBar = true
  if(this.sale=="Sale"){
    if(this.prop=="Appartment" || this.prop=="Property Type"){
      this.route.navigate(['/appr'])
    }
    if(this.prop=="Villa" || this.prop=="Property Type"){
      this.route.navigate(['/vila'])
    }
  }
  if(this.sale =="Rent"){
    console.log("eee")
    this.route.navigate(["/rent"])
  }
}
  dropOpen = false

  openCloseDrop(drop:any){

    if(this.dropOpen){

      drop.style.display = "none"
      this.dropOpen = false

    }
    else{

      drop.style.display = "block"
      this.dropOpen = true

    }

  }

  openSide(){
    this.element = document.getElementById("sideBar")
    this.element.style.display = "flex"
  }

  closeSide(){
    this.element = document.getElementById("sideBar")
    this.element.style.display = "none"
  }

  navBarScroll:any

  ngOnInit(): void {
    this.crud.isCustomNavBar=false
 this.saa= document.getElementById('sale')
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

