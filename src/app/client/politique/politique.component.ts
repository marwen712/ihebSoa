import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politique',
  templateUrl: './politique.component.html',
  styleUrls: ['./politique.component.css']
})
export class PolitiqueComponent implements OnInit {

  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: any = "";
  constructor() {
    this.myAngularxQrCode = 'Heart Of carthage Real Estate   Main license N 889868  in Real Estate Buying&selling From Dubai Land Department with  ID 46079'
   }

  ngOnInit(): void {
  }

   onChangeURL(url:any) {
    this.qrCodeDownloadLink = url;
  }

}
