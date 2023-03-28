import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
affBut=true
  constructor() { }
  Navigate(elem: HTMLElement ) {
    elem.scrollIntoView({ behavior: 'smooth' });
    this.affBut=false
    }
  ngOnInit(): void {
 
  }
  // @HostListener('window:scroll', ['$event'])
  // track(event) {
   
  // }
}
