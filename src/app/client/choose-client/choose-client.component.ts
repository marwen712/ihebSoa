import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-choose-client',
  templateUrl: './choose-client.component.html',
  styleUrls: ['./choose-client.component.css']
})
export class ChooseClientComponent implements OnInit {
  nav(e){
    this.crud.isCustomNavBar=true
    this.route.navigate([e])
  }
  constructor(public crud:CrudService ,private route:Router) { }

  ngOnInit(): void {
  }

}
