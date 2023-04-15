import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  devlopper:any
 loading=true
 tab:any[]=[]

constructor(public crud:CrudService,private http:HttpClient ,private route:ActivatedRoute  ) { }

  ngOnInit(): void {
    this.devlopper =this.route.snapshot.paramMap.get('id')
    this.http.get(environment.baseURL+"/off/").subscribe(res=>{
      if (res.valueOf()){
        var   ob:any
        ob=res.valueOf()
  
        this.tab=ob
        this.tab= this.tab.reverse().filter(ele=>ele.dev==this.route.snapshot.paramMap.get('id'))
        this.loading=false
       
        console.log(this.tab)
       
      }
    })
  }

}
