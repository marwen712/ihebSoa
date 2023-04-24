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
  YT: any;
  video2:any
  private player: any;
  private videoId: string = 'VIDEO_ID_HERE';
affBut=true

id:any
video:any
public sections = 4;
myVideo:any
cot:any
scroll:any
  constructor(private render:Renderer2 ,public crud:CrudService,private titl:Title , private  route:ActivatedRoute,private sanitizer: DomSanitizer) { 
  
  
  }
  Navigate(elem: HTMLElement ) {
    elem.scrollIntoView({ behavior: 'smooth' });
   
    this.affBut=false
    }
  ngOnInit(): void {
    this.myVideo=document.getElementById("myVideo")
    this.cot=document.getElementById("cot")
      console.log(this.route.snapshot.paramMap.get('id'))
    this.crud.id2=Number(this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')).id)
    this.titl.setTitle( this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')).title);
    this.id=Number(this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')).id)
    this.video2=document.querySelector("video")
    this.crud.project=this.crud.rev[this.id].title

    this.video2.play()
    this.fun
  //  this.crud.affForm=false
  
    
    this.cot.style.height=this.myVideo.style.height
    this.render.listen(window, 'scroll', ($event) => {
      this.scroll = (window.scrollY / this.sections);
   console.log(this.scroll,"pp")
   
     
   })


 
  //  var vid=this.myVideo as HTMLIFrameElement
  //  vid.contentWindow?.postMessage('play','*')
  // console.log(this.crud.rev[this.id].video)
  // console.log(this.video,"video")
  // this.player = new YT.Player('videoFrame', {
  //   videoId: this.crud.rev[this.id].video,
  //   playerVars: {
  //     autoplay: 1,
  //     controls: 0,
  //     showinfo: 0
  //   },
  //   events: {
  //     'onReady': this.onPlayerReady.bind(this)
  //   }
  // });
  // }
  // // @HostListener('window:scroll', ['$event'])
  // // track(event) {
   
  // // }
  // onPlayerReady(event) {
  //   event.target.playVideo();
  // }
  }
 async fun(){
  this.video= await this.sanitizer.bypassSecurityTrustResourceUrl(this.crud.rev[this.id].video);
  var vid=this.myVideo as HTMLIFrameElement
  vid.contentWindow?.postMessage('play','*')

 }
}
