import { Component } from '@angular/core';
import { MessagingService } from './services/messaging.service';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
//import { SeoService } from './services/seo.service';
import { Meta, Title } from '@angular/platform-browser';
import { CrudService } from './services/crud.service';
import { PixelService } from 'ngx-pixel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heart Of Carthage Real Estate Dubai';
  message:any
  public phone = "+971 58 218 9263"
 public messg = "My Real Estate Needs";
 video2:any

  constructor(private  messagingService:MessagingService ,private http:HttpClient,private meta:Meta ,public titl:Title, public crud:CrudService, private pixel: PixelService ){

  }
  openForm(){
    this.crud.timeForm=10
    this.crud.affForm=false
    this.crud.affForm=true

  }
  customNavBar:any

  ngOnInit() {
    // if(!(window.location.pathname === "/" || window.location.pathname === "/rev" )){

    //   this.crud.isCustomNavBar = true

    // }else{
    //   this.crud.isCustomNavBar = false
    // }
    this.video2=document.querySelector("video")


    this.video2.play()

   this.crud.rootingUrl= window.location.pathname
  
   
 
    this.pixel.initialize();
    this.meta.addTags([
      {
        name: 'keywords',
        content:'estate dubai ,real estate, villas dubai, real estate developers dubai, azizi,estate dubai ,property buy dubai,properties for sale in dubai,real estate, villas dubai, real estate developers dubai, azizi,luxury villas in dubai,luxury villas for sale in dubai,luxury villas for sale in dubai,houses for sale in dubai,apartments for sale in dubai,apartments for rent in dubai  عقارات  دبي,منازل  في دبي, ابراج دبي' // Keywords

      },
      { name: 'robots', content: 'index, follow' },
      { name: 'description', content: 'Pick your Property with heartofcarthage and enjoy with our best offer   Find your Perfect Property in dubai with us.  Luxuary Properties, Wonderful Views , the comfortable life in waiting for you ,property buy dubai,properties for sale in dubai,luxury villas in dubail,uxury villas for sale in dubai,luxury villas for sale in dubai,houses for sale in dubai,apartments for sale in dubai,apartments for rent in dubai' },

    ]);
    this.titl.setTitle( this.title);
    this.messagingService.requestPermission()
    this.messagingService.receiveMessage()
    this.message = this.messagingService.currentMessage
  //   const headers = new HttpHeaders({'Content-Type':'application/json','Authorization':"czEAEx7YWFnCC8Ei3wBBdv:APA91bEOyuQ0J4h2oD_OM2n292PsNI4bZX4pe1C2wTpg0ExGiecP3j"});
  //  var noti=  {notification: {
  //   title: "Hey there",
  //   body: "Subscribe to mighty ghost hack youtube channel"
  //  },
  //  to : "uFvjswjLphkOzCEO0OcgM7yQGmzCZ7pKaFZ3iBhGJH4IxDlw9VIagvCVqFtFJ1a1esQqkKJG4jBtI58foa7CnB"
  // }
    // const requestOptions = { headers: headers };
    // this.http
    //     .post('https://fcm.googleapis.com/fcm/send/',noti, requestOptions )
    //     .subscribe(res => {
    //       console.log(res);
    //     });
   ;


}

}
