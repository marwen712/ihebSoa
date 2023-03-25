import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit { 
  al=false
  baseUrl=environment.baseURL 
  user= new FormGroup({
   
  name: new FormControl('',[Validators.required ]),
 
  lastName: new FormControl(''),
 
  email: new FormControl('',[Validators.required,Validators.email]),
  phone: new FormControl('',[Validators.required]),
  typRef:new FormControl(""),

  project:new FormControl(""),
  typM:new FormControl(""),
  typB:new FormControl(""),
  date:new FormControl(""),
  DateN:new FormControl(""),
  country:new FormControl(""),
  

})

envoyer(){
  this.al=false
  console.log(this.user.value ,"ee")
  this.http.post(this.baseUrl +'/todo/c/',this.user.value).subscribe(res=>{
         
    console.log(res.valueOf())
   this.al=true
  })
 
  this.http.post(this.baseUrl +'/email/send-mail1/',this.user.value).subscribe(res=>{
    console.log(res)})
  
    this.al=true

}
 aff(value){
  console.log(value)
  this.crud.affChoose=false
 }
  constructor(public crud:CrudService ,private http:HttpClient) { }

  ngOnInit(): void {
  }

}
