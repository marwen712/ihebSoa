import { Component, OnInit,Renderer2} from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
affBut=true
public sections = 4;
scroll:any
  constructor(private render:Renderer2) { }
  Navigate(elem: HTMLElement ) {
    elem.scrollIntoView({ behavior: 'smooth' });
    this.affBut=false
    }
  ngOnInit(): void {
    this.render.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
      console.log(this.scroll,"pp")
   })
 
  }
  // @HostListener('window:scroll', ['$event'])
  // track(event) {
   
  // }
}
