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
  saleId:any
  propId:any
  minId:any
  maxId:any
  saleIdPc:any
  propIdPc:any
  minIdPc:any
  maxIdPc:any
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

  selectItemSale(db:any,key:any,value:any){

    this.formSearch[key] = value
   this.sale=value
    this.saleId.value= value
    console.log(this.formSearch[key])
    
    this.openCloseDrop(db)

  }
  selectItemP(db:any, key:any,value:any){

    this.formSearch[key] = value
   this.prop=value
   this.propId.value=value
    console.log(this.prop,5555)

    console.log(this.formSearch[key])

    this.openCloseDrop(db)

  }

  selectItem(dp:any,key:any,value:any){

    this.formSearch[key] = value
   
    console.log(this.formSearch[key])

    this.openCloseDrop(dp)

  }
  selectItemMax(db:any,key:any,value:any){

    this.formSearch[key] = value
   this.maxId.value=value
    console.log(this.formSearch[key])

    this.openCloseDrop(this.maxId)

  }
  selectItemMin(db:any,key:any,value:any){

    this.formSearch[key] = value
   this.minId.value=value
    console.log(this.formSearch[key])

    this.openCloseDrop(this.minId)

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
  openCloseDropSide(drop:any,drop2:any,drop3:any){
    drop2.style.height="0px"
    drop3.style.height="0px"
    console.log(drop.style.height ,"height")
    if( drop.style.height == "0px" ){

      drop.style.height="auto"
      console.log("height")

    }
    else{

      drop.style.height="0px"

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
 this.saleId= document.getElementById('sale')
 this.propId= document.getElementById('prop')
 this.minId= document.getElementById('min')
 this.maxId= document.getElementById('max')
 this.saleIdPc= document.getElementById('salePc')
 this.propIdPc= document.getElementById('propPc')
 this.minIdPc= document.getElementById('minPc')
 this.maxIdPc= document.getElementById('maxPc')
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

