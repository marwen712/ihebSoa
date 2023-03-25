import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prod',
  templateUrl: './prod.component.html',
  styleUrls: ['./prod.component.css']
})
export class ProdComponent implements OnInit {

 title = 'Heart Of Carthage Real Estate Dubai';
  constructor(public crud:CrudService ,private route:Router ,private titl:Title,private meta:Meta) { }

  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'keywords',
        content:'estate dubai ,real estate, villas dubai, real estate developers dubai, azizi,estate dubai ,property buy dubai,properties for sale in dubai,real estate, villas dubai, real estate developers dubai, azizi,luxury villas in dubai,luxury villas for sale in dubai,luxury villas for sale in dubai,houses for sale in dubai,apartments for sale in dubai,apartments for rent in dubai  عقارات  دبي,منازل  في دبي, ابراج دبي' // Keywords

      },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Pick your Property with heartofcarthage and enjoy with our best offer   Find your Perfect Property in dubai with us.  Luxuary Properties, Wonderful Views , the comfortable life in waiting for you ,property buy dubai,properties for sale in dubai,luxury villas in dubail,uxury villas for sale in dubai,luxury villas for sale in dubai,houses for sale in dubai,apartments for sale in dubai,apartments for rent in dubai' },

    ]);
    this.titl.setTitle( this.title);
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
