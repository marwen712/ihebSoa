import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title ,Meta } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-prudc-appar',
  templateUrl: './prudc-appar.component.html',
  styleUrls: ['./prudc-appar.component.css']
})
export class PrudcApparComponent implements OnInit {
  loading=false
  tab:any=[]=[]
  title="Apartments &  Retails "

  constructor(private http:HttpClient , private route:Router,private meta:Meta,private titl:Title) { }

  ngOnInit(): void {
       this.meta.addTags([
      {
        name: 'keywords',
        content:'estate dubai ,real estate, villas dubai, real estate developers dubai, azizi,estate dubai apartments for sale in dubai,apartments for rent in dubai  عقارات  دبي,منازل  في دبي, ابراج دبي' // Keywords

      },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Pick your Property with  for sale in dubai,apartments for sale in dubai,apartments for rent in dubai' },

    ]);
    this.titl.setTitle( this.title);
    this.loading=true
    this.http.get(environment.baseURL+"/appr/").subscribe(res=>{
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
navAppr(i:any){
  this.route.navigate(["/Appr",this.tab[i]._id])
}
}
