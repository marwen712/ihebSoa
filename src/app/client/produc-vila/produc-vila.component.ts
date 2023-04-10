import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-produc-vila',
  templateUrl: './produc-vila.component.html',
  styleUrls: ['./produc-vila.component.css']
})
export class ProducVilaComponent implements OnInit {

  loading=false
  tab:any=[]=[]
  title="Rent in dubai  "

  constructor(private http:HttpClient , private route:Router,private meta:Meta,private titl:Title) { }

  ngOnInit(): void {
    this.meta.addTags([
      {
        name: 'keywords',
        content:'apartments for rent in dubai  عقارات  دبي,منازل  في دبي, ابراج دبي' // Keywords

      },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Pick your Property with heartofcarthage and enjoy with our best offer  apartments for rent in dubai' },

    ]);
    this.titl.setTitle( this.title);
    this.loading=true
    this.http.get(environment.baseURL+"/rent/").subscribe(res=>{
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
  this.route.navigate(["/Rent",this.tab[i]._id])
}

}
