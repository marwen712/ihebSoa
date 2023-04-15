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
    this.myAngularxQrCode = 'heart of carthage dubai';
   }
   onChangeURL(url:any) {
    this.qrCodeDownloadLink = url;
  }

  ngOnInit(): void {
    
  }

}
