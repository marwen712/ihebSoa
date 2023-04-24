import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { environment } from 'src/environments/environment';
import { HttpClient ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user:any
  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: any = "";
  constructor(private crud:CrudService ,private http:HttpClient ) {
    this.myAngularxQrCode = 'Heart Of carthage Real Estate   Main license N 889868  in Real Estate Buying&selling From Dubai Land Department with  ID 46079'
 
   
   }
   onChangeURL(url:any) {
    this.qrCodeDownloadLink = url;
  }
   registre(){
    this.http.post(environment.baseURL +'/email/send-mail1/',this.user).subscribe(res=>{
          
      console.log(res.valueOf())
    })
  
   }
  ngOnInit(): void {
    this.user={
      email:"",
      name:''
    }
    this.crud.consulAff=true
    
  }

}
