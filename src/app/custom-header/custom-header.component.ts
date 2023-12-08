import { Component, OnInit,OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, TitleStrategy } from '@angular/router';
import { CrudService } from '../services/crud.service';
import { environment } from 'src/environments/environment';

import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css']
})
export class CustomHeaderComponent implements OnInit,OnDestroy {

  constructor( private route:Router ,public crud:CrudService,private http:HttpClient) { }
  baseUrl=environment.baseURL
  element:any
  saleId:any
  propId:any
  minId:any
  maxId:any
  saleIdPc:any
  propIdPc:any
  minIdPc:any
  maxIdPc:any
  name=""
  phone=""
  email=""
  sale="Sale"
  prop="Apartement"
 minn="hhhhh"
city=""
 searchCty:string[]=["Investment","Buy","Sale"]
  tabCity2:string[]=["Sharjah",
  "Al Ain",
  "Ajman",
  "Ras Al Khaimah",
 "Fujairah",
  "Umm Al Quwain"]
 selectItemCity(item){
 
   this.city=item
   this.propId.style.display="none"
   this.propIdPc.style.display="none"
 }
 funcSearchCity(e:any){
  this.searchCty=this.tabCity2
  console.log(e.target.value,this.searchCty)
  this.propIdPc.style.display="block"
  this.propId.style.display="block"
  this.searchCty=this.searchCty.filter(ele=>ele.includes(e.target.value )==true)
 }
  nav(e){
    this.crud.isCustomNavBar = true
    this.route.navigate([e])
    console.log(5)
  }
  openC(){
   this.propIdPc.style.display="block"
  }
  searchAllDropList = {
    sale:["Sale","Rent"],
    saleFrensh:["Vendre","Louer"],
    saleArabe:['بيع', 'تأجير'],
    propertyType:["Property Type","Apartement","Villa","Townhouse","Penthouse"],
    propertyTypeFrensh:["Type de propriété", "Appartement", "Villa", "Maison de ville", "Penthouse"],
    propertyTypeArabe:["تصنيف العقارات", "شقة", "فيلا", "بيت متلاصق", "بنتهاوس"],
    minArea: ["8%","10%","12%","14%","15% ","17+%"],
    maxArea:["Max budget","$20.000","$30.000","$1M","$2M ","$3M+ usd"]
  }

  formSearch = {
    saleRent:"Rent Or Sale",
    propertyType:"Property Type",
    minArea:"Return of investment",
    maxArea:"budjet",
    saleRentFrensh:"Vendre ou louer",
    propertyTypeFrensh:"Type de propriété",
    saleRentArabe:" شراء او كراء",
    propertyTypeArabe:"صنف العقار"
  }
 
   open(){

    console.log(this.saleId.style.height ,"height")
    if( this.saleId.style.height == "0px" ){

      this.saleId.style.height="auto"
      console.log("height")

    }
    else{

      this.saleId.style.height="0px"

    }
   }
  selectItemSale(db:any,value:any){

   // this.formSearch[key] = value

   this.sale=value
    // this.saleId.value= value
    //console.log(this.formSearch[key])
    this.formSearch.saleRent=value
    this.formSearch.saleRentFrensh=value
    this.formSearch.saleRentArabe=value
    db.style.display="none" 
   // this.openCloseDrop(db)

  }
  selectItemP(db:any,value:any){

   // this.formSearch[key] = value
   this.prop=value
  //  this.propId.value=value
   this.formSearch.propertyType=value
   this.formSearch.propertyTypeFrensh=value
   this.formSearch.propertyTypeArabe=value
  db.style.display="none" 

    console.log(this.prop,5555)

   // console.log(this.formSearch[key])

    // this.openCloseDrop(db)

  }

  // selectItem(dp:any,key:any,value:any){

  //   // this.formSearch[key] = value
   
  //   // console.log(this.formSearch[key])

  //   this.openCloseDrop(dp)

  // }
  selectItemMax(db:any,value:any){
       
    // this.formSearch[key] = value
  // this.maxId.value=value
  console.log( db.style.display,"display")
   this.formSearch.maxArea=value
   console.log( this.formSearch.maxArea,"value")
    // console.log(this.formSearch[key])
    db.style.display="none" 
    // this.openCloseDrop(this.maxId)

  }
  selectItemMin(db:any,value:any){

    // this.formSearch[key] = value
    this.formSearch.minArea=value
  //  this.minId.value=value
   db.style.display="none" 
    // console.log(this.formSearch[key])

    // this.openCloseDrop(this.minId)

  }
search(){
  console.log(this.name,"aaaa")
  var user={
   name:this.name,
   email:this.email,
   phone:this.phone,
   project:"invest"
  }

     
if(this.name=="" || this.email=='' || this.phone=='') {
alert('All fields are required!')
}
else{
  this.http.post(this.baseUrl +'/email/send-mail1/',user).subscribe(res=>{
    console.log(res)
  alert("successfully registered")})
}
  // this.crud.isCustomNavBar = true
  // if(this.sale=="Sale"){
  //   if(this.prop=="Apartement" || this.prop=="Property Type" ){
  //     this.route.navigate(['/appr'])
  //   }
  //   if(this.prop=="Villa" || this.prop=="Townhouse" ||  this.prop=="Penthouse" ){
  //     this.route.navigate(['/vila'])
  //   }
  // }
  // if(this.sale =="Rent" ){
  //   console.log("eee")
  //   this.route.navigate(["/rent"])
  // }
  // if(this.sale=="Rent Or Sale"){
  //   alert ("choose sale or rent")
  // }
}
affArea(){
this.propId.style.display="block"
console.log(55)
}
AffValueArea(item:any){
  console.log(item)
  this.formSearch.minArea=item
  this.minId.value=item
  this.minn=item
  this.propId.style.display="none"
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
 this.propId= document.getElementById('uu')
 this.minId= document.getElementById('min')
 this.maxId= document.getElementById('max')
 this.saleIdPc= document.getElementById('salePc')
 this.propIdPc= document.getElementById('ee')
 this.minIdPc= document.getElementById('minPc')
 this.maxIdPc= document.getElementById('maxPc')
 this.propIdPc.style.display="none"
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
ngOnDestroy():void {
  this.crud.isCustomNavBar=true
}
}

