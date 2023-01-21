import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceuil',
  templateUrl: './aceuil.component.html',
  styleUrls: ['./aceuil.component.css']
})
export class AceuilComponent implements OnInit {
  statusClass = 'topnav';
  affTel=true
  public phone = "+971 58 218 9263"
  constructor() { }

  ngOnInit(): void {
  }

  dropListLangActive = false

  dropList:any

  langDropDown(){

    this.dropList = document.getElementById("dropList")

    if(this.dropListLangActive){

      this.dropList.style.top = "-700px"

    }else{

      this.dropList.style.top = "35px"

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
