import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aceuil',
  templateUrl: './aceuil.component.html',
  styleUrls: ['./aceuil.component.css']
})
export class AceuilComponent implements OnInit {
  statusClass = 'topnav';
  constructor() { }

  ngOnInit(): void {
  }
  myFunction(){
    if (this.statusClass === "topnav") {
      this.statusClass= "topnav responsive";
    } else {
      this.statusClass  = "topnav";

    }
    console.log(this.statusClass)
  }
}
