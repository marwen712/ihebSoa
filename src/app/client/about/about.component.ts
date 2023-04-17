import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: any = "";
  constructor() {
    this.myAngularxQrCode = 'Heart Of carthage Real Estate   Main license N 889868  in Real Estate Buying&selling From Dubai Land Department with  ID 46079'
 
   
   }
   onChangeURL(url:any) {
    this.qrCodeDownloadLink = url;
  }

  ngOnInit(): void {
    
  }

}
