import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ImgService } from 'src/app/services/img.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-update-offplan',
  templateUrl: './update-offplan.component.html',
  styleUrls: ['./update-offplan.component.css']
})
export class UpdateOffplanComponent implements OnInit {
  api=environment.baseURL
  selectF:any
  constructor(public crud:CrudService,public http: HttpClient,public image:ImgService) { }

  ngOnInit(): void {
   
  }
  modifier(){
    this.crud.offPlanModif.imgs=this.image.tabImages
    if(this.crud.testUpdate==""){
      this.http.put(this.api+'/off/'+this.crud.offPlanModif._id+"/" , this.crud.offPlanModif).subscribe((res:any)=>{
        if(res.message==true){
          alert("modif secsseful")
        }
         })
    }
    if(this.crud.testUpdate=="vila"){
      this.http.put(this.api+'/vila/'+this.crud.offPlanModif._id+"/" , this.crud.offPlanModif).subscribe((res:any)=>{
        if(res.message==true){
          alert("modif secsseful")
        }
         })
    }
    if(this.crud.testUpdate=="appr"){
      this.http.put(this.api+'/appr/'+this.crud.offPlanModif._id+"/" , this.crud.offPlanModif).subscribe((res:any)=>{
        if(res.message==true){
          alert("modif secsseful")
        }
         })
    }
    if(this.crud.testUpdate=="rent"){
      this.http.put(this.api+'/rent/'+this.crud.offPlanModif._id+"/" , this.crud.offPlanModif).subscribe((res:any)=>{
        if(res.message==true){
          alert("modif secsseful")
        }
         })
    }
    }
    supCarc(i){
      this.image.tabImages.splice(i,1);
    }
    selectFile(e:any){
      console.log("aaa")
     
     this.selectF=<File>e.target.files[0]
     this.image.registreImage(this.selectF)
     
   }
}
