import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title ,Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-product-off-plan',
  templateUrl: './product-off-plan.component.html',
  styleUrls: ['./product-off-plan.component.css']
})
export class ProductOffPlanComponent implements OnInit {

  loading=false
  tab:any=[]=[]
  title="Off Plan "

  constructor(private http:HttpClient , private route:Router,private meta:Meta,private titl:Title) { }

  ngOnInit(): void {
       this.meta.addTags([
      {
        name: 'keywords',
        content:'estate dubai ,real estate, villas dubai, damac dubai,off-palan real  estate dubai,real estate developers dubai, azizi,estate dubai ,apartments for sale in dubai,apartments for rent in dubai  عقارات  دبي,منازل  في دبي, ابراج دبي' // Keywords

      },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Pick your Property with  for sale in dubai,apartments for sale in dubai,apartments for rent in dubai' },

    ]);
    
    this.loading=true
    this.http.get(environment.baseURL+"/off/").subscribe(res=>{
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
navRent(i:any){
  this.route.navigate(["/Off-Plan",this.tab[i]._id])
}

}