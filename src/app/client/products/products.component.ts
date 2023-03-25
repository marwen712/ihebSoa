import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title ,Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  loading=false
  tab:any=[]=[]
  title="Villas & Townhouses<  "

  constructor(private http:HttpClient , private route:Router,private meta:Meta,private titl:Title) { }

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
    this.loading=true
    this.http.get(environment.baseURL+"/vila/").subscribe(res=>{
      if (res.valueOf()){
        var   ob:any
        ob=res.valueOf()
  
        this.tab=ob
        this.tab= this.tab.reverse()
        this.loading=false
       
        console.log(this.tab)
       
      }
     
  })
}
nav2(i:any){
  this.route.navigate(["/Vila",this.tab[i]._id])
}

}
