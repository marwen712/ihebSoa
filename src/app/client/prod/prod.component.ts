import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

  constructor(public crud:CrudService ,private route:Router) { }

  ngOnInit(): void {
    
  }
  nav2(i:any){
    this.route.navigate(["/Vila",this.crud.tabVilaProd[i]._id])
   }
   nav3(i:any){
    this.route.navigate(["/Appr",this.crud.tabApprProd[i]._id])
   }
   nav4(i:any){
    this.route.navigate(["/Rent",this.crud.tabRentProd[i]._id])
   }
  
  
}
