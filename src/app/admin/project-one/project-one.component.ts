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
 selectF:any
  constructor(public crud :CrudService, public serIm:ImgService,private http:HttpClient ) { }
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
 selectBrochure(e:any){
    this.serIm.loadingImagSingle=true
    this.selectF=<File>e.target.files[0]
     this.serIm.registreImageSingleProject(this.selectF).subscribe(res=>{
      var image :any
     image=res.valueOf()
      console.log(image)
     this.project.brochure= environment.baseURL+"/uploads/"+ image.name
    
     })
    
   
  }
  selectVideo(e:any){
    this.serIm.loadingImagSingle=true
    this.selectF=<File>e.target.files[0]
    this.serIm.registreImageSingleProject(this.selectF).subscribe(res=>{
      var image :any
     image=res.valueOf()
      console.log(image)
     this.project.video= environment.baseURL+"/uploads/"+ image.name
    
     })
   
   }
  sup(i:any){
    this.affModif=true
this.project=this.rev[i]
var a="/one/Delet/"
this.crud.delet(this.project._id,a).subscribe(res=>{
  alert("element supprimer")
 })

   }
  selectImage(e:any,i:any){
    console.log(i)
    this.serIm.loadingImagSingle=true
    this.selectF=<File>e.target.files[0]
    
    this.serIm.registreImageSingleProject(this.selectF).subscribe(res=>{
      var image :any
     image=res.valueOf()
      console.log(image)
     this.project.images.splice(i,1, environment.baseURL+"/uploads/"+ image.name); 
      console.log(environment.baseURL+"/uploads/"+ image.name,55)
     })   
  }
  modifierProject(){
    this.http.put(environment.baseURL+'/one/' +this.project._id+"/" , this.project).subscribe((res:any)=>{
      if(res.message==true){
        alert("modif secsseful")
      }
       })
  }

   modif(i:any){
    this.affModif=true
this.project=this.rev[i]
console.log(this.project)
   
   }

}

