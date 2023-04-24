import { Component, OnInit } from '@angular/core';
import { CarouselSlideDirective, OwlOptions } from 'ngx-owl-carousel-o';
import { CrudService } from 'src/app/services/crud.service';
@Component({
  selector: 'app-accord',
  templateUrl: './accord.component.html',
  styleUrls: ['./accord.component.css']
})
export class AccordComponent implements OnInit {
  pass=""
  log=""
tabImages:any=[]
images:any=[]
 public  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    center: true,
    dots: false,
    autoHeight: true,
    autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  }
  constructor(public crud:CrudService) { }

  ngOnInit(): void {
    this.crud.affForm=false
   this.tabImages=this.crud.rev[this.crud.id2].images
   this.images=this.crud.rev[this.crud.id2].images.slice(0,4)
    this.crud.isCustomNavBar = false
  }
  
}
