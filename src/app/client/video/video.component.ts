import { Component, OnInit,Renderer2} from '@angular/core';
import { HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';
import { Meta, Title } from '@angular/platform-browser';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
affBut=true

id:any
video:any
public sections = 4;
myVideo:any
cot:any
scroll:any
  constructor(private render:Renderer2 ,public crud:CrudService,private titl:Title , private  route:ActivatedRoute,private sanitizer: DomSanitizer) { }
  Navigate(elem: HTMLElement ) {
    elem.scrollIntoView({ behavior: 'smooth' });
    this.affBut=false
    }
  ngOnInit(): void {
   
    this.myVideo=document.getElementById("myVideo")
    this.cot=document.getElementById("cot")
    this.cot.style.height=this.myVideo.style.height
    this.render.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
      console.log(this.scroll,"pp")
   })
   console.log(this.route.snapshot.paramMap.get('id'))
  this.crud.id2=Number(this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')).id)
  this.titl.setTitle( this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')).title);
  this.id=Number(this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')).id)

  this.video= this.sanitizer.bypassSecurityTrustResourceUrl(this.crud.rev[this.id].video);
  console.log(this.video,"video")
  }
  // @HostListener('window:scroll', ['$event'])
  // track(event) {
   
  // }
}
