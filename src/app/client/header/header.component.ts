import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 aff(value){
  console.log(value)
  this.crud.affChoose=false
 }
  constructor(public crud:CrudService) { }

  ngOnInit(): void {
  }

}
