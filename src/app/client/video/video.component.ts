import { Component, OnInit, ViewChild, ElementRef,Renderer2} from '@angular/core';
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
   @ViewChild('videoPlayer', { static: false }) videoPlayerRef!: ElementRef;
   load="false"
  YT: any;
  video2:any
  images:any[]=[]
  private player: any;
  private videoId: string = 'VIDEO_ID_HERE';
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
    console.log(this.route.snapshot.paramMap.get('id'),"id de page")
   this.crud.timeForm=20000
    this.crud.id2=Number(this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')).id)
  console.log(this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')),'id2')
  this.titl.setTitle( this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')).title);
  this.id=Number(this.crud.rev.find(ele=>ele.title == this.route.snapshot.paramMap.get('id')).id)
this.crud.project=this.crud.rev[this.id].title
this.images=this.crud.rev[this.crud.id2].images.slice(0,4)
this.video= this.sanitizer.bypassSecurityTrustResourceUrl(this.crud.rev[this.id].video);
  // this.fun()
 
  //  const videoPlayer = this.videoPlayerRef.nativeElement as HTMLVideoElement;
    
    // setTimeout(()=>{
    //   //vid.contentWindow?.postMessage('play','*')
    //   videoPlayer.load();
    // },3000)
//  this.crud.isCustomNavBar=false
    // this.myVideo=document.getElementById("myVideo")
    // this.cot=document.getElementById("cot")
  
    // this.cot.style.height=this.myVideo.style.height
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
  
   this.video2= document.querySelector("video")
 //  var vid=this.myVideo as HTMLIFrameElement
  
 setTimeout(()=>{
  //vid.contentWindow?.postMessage('play','*')
 this.video2.play()
},2000)
 }
}
