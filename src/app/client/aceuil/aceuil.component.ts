import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-aceuil',
  templateUrl: './aceuil.component.html',
  styleUrls: ['./aceuil.component.css']
})
export class AceuilComponent implements OnInit {
  statusClass = 'topnav';
  affTel=true
  public phone = "+971 58 218 9263"
  constructor(public crud:CrudService) { }

  ngOnInit(): void {
  }
    // funcEng(){
    //   this.crud.englaix=true
    //   this.crud.frensh=false
    //   this.crud.arabic=false
    // }
    // funcFr(){
    //   this.crud.englaix=false
    //   this.crud.frensh=true
    //   this.crud.arabic=false
    // }
    // funcAr(){
    //   this.crud.englaix=false
    //   this.crud.frensh=false
    //   this.crud.arabic=true
    // }
  dropListLangActive = false

  dropList:any

  langDropDown(){

    this.dropList = document.getElementById("dropList")

    if(this.dropListLangActive){

      this.dropList.style.top = "-500%"

    }else{

      this.dropList.style.top = "5.6%"

    }

    this.dropListLangActive = !this.dropListLangActive

  }

  btnIcon:any

  myFunction(){

    this.btnIcon = document.getElementById("btnIcons")

    if (this.statusClass === "topnav") {
      this.statusClass= "topnav responsive";
      this.btnIcon.style.top = "13px"
      this.affTel=false
    } else {
      this.statusClass  = "topnav";
      this.affTel=true
      this.btnIcon.style.top = "42px"
    }
  }
}
