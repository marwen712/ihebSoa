
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { ImgService } from 'src/app/services/img.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-rent',
  templateUrl: './rent.component.html',
  styleUrls: ['./rent.component.css']
})
export class RentComponent implements OnInit {

  loadingImag=false
  formCatigorie:any //etape  1 : 
  selectF:any
  imgCat=""
  taher="habib"
 urlCreat="/rent/creat/"
  urlDelet="/rent/Delet/"

 tabrent:any[]=[]
  rent:any
   
  constructor(public crud:CrudService , public serIm:ImgService,private http:HttpClient) { 
    this.crud.loading=true
    
    // this.crud.getSingle(url).subscribe(res=>{
    // if(res.valueOf()){
    //   var ob:any
    //   ob=res.valueOf()
    //   this.tabrent=ob
    //   this.crud.loading=false
    
    // }
    // })^

 this.http.get(environment.baseURL+"/rent/").subscribe(res=>{
  if(res.valueOf()){
    console.log(res.valueOf())
    var ob:any
     ob=res.valueOf()
     this.tabrent=ob
     this.crud.loading=false
  }
  
 })
  }

  ngOnInit(): void {
    this.rent={
      title:"",
      stitle:"",
      desc:"",
      prix:"",
      imageProfil:"",
      prixFinal:"",
      video:"",
      imgs:[]
     }
  }
  selectFile(e:any){
     console.log("aaa")
    this.loadingImag=true
    this.selectF=<File>e.target.files[0]
    this.serIm.registreImage(this.selectF)
    
  }
 ajout(){
  
  console.log(this.rent)
  this.rent.imgs=this.serIm.tabImages
   this.rent.imageProfil=this.serIm.tabImages[0]
   this.crud.ajout(this.rent,this.urlCreat)

 }
 sup(i:any){
  console.log(5)
  this.crud.loading=true
  
  console.log(this.tabrent[i])
 this.crud.delet(this.tabrent[i]._id,this.urlDelet).subscribe(res=>{
  if(res.valueOf()){
    var ob:any
     ob=res.valueOf()
     this.tabrent=ob
     this.crud.loading=false
    alert("secssful delet")
  }
 })
 }

}
