import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from 'src/app/services/crud.service';
import { ImgService } from 'src/app/services/img.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-project-one',
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.css']
})
export class ProjectOneComponent implements OnInit {
 rev:any[]=[]
 project:any
 affModif=false
  constructor(public crud :CrudService, public img:ImgService,private http:HttpClient ) { }
  add() {
    this.http.post(environment.baseURL+'/one/creat/' ,{nn:'aa'}).subscribe((res:any)=>{
    
       })
  }
  ngOnInit(): void {
    this.http.get(environment.baseURL+"/one/").subscribe(res=>{
      console.log(res.valueOf(),"rev")
    var ob:any
    ob=res.valueOf()
    this.rev=ob
    })
  }
   modif(i:any){
    this.affModif=true
this.project=this.rev[i]
console.log(this.project)
   
   }
  sup(i:any){
    this.affModif=true
this.project=this.rev[i]
var a="/one/Delet/"
this.crud.delet(this.project._id,a).subscribe(res=>{
  
 })
   
   }
}
