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
  myFunction(){
    if (this.statusClass === "topnav") {
      this.statusClass= "topnav responsive";
      this.affTel=false
    } else {
      this.statusClass  = "topnav";
      this.affTel=true
    }
    console.log(this.statusClass)
  }
}
