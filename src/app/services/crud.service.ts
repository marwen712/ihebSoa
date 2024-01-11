import { HttpClient } from '@angular/common/http';
import { TmplAstRecursiveVisitor } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  rootingUrl=""
  affProjectOne=false
 consulAff=true
 timeForm=10
  userConsultation={
    name:"",
    email:"",
   phone:"",
   q1:"", 
   q2:"",
   q3:"",
   dateMeet:"",
   project:'',
   timeMeet:''
  
  }
  id2:any
  rev:any[]=[{ id:0,
      price:"from $230k USD",
      brochure:'/assets/brochure/rivPdf.pdf',
      catigorie:"Studio & Apartments",
      prencentage:"10%",
      plan:"https://riviera-meydan.ae/wp-content/uploads/2020/10/5-300x200.jpg",
      title:"RIVIERA",
      video: "/assets/video/rev2.mp4",//"https://www.youtube.com/embed/pxEWiz40xBo?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1" ,
      titleHtml1:"RIVIERA",
      titleHtml2: "VILLE MBR",
      location:"DUBAÏ  MEYDAN ONE",
      pyement:"4 yrs",
      sTitle:"The concept of Azizi Riviera is borrowed from the French Riviera. The buildings and spaces around them have been designed to emulate Mediterranean contemporary living",
      desc:"azizi riviera is a residential development consisting of 69 mid-rise residential buildings and two hotels situated alongside the dubai canal in meydan one. the residential blocks will contain a total of 16,000 studios and one- and two-bedroom apartments.",
      descFinale:"Riviera is one of Azizi’s flagship developments located in Meydan at the heart of Mohammed Bin Rashid City (MBR City) in Dubai. In a prime location, close to Meydan Racecourse, the home of The Dubai World Cup and a variety of sports and leisure facilities, Riviera offers a desirable address and is within close proximity to Downtown Dubai and Dubai International Airport. Inspired by the French Riviera, the iconic mixed-use community will be home to residential apartments, retail outlets and a variety of onsite amenities. Riviera comprises of various mid-rise residential buildings with a variety of retail outlets at ground floor level. Each individual building will benefit from a swimming pool, landscaped gardens and a gym. Key attractions will include a beautiful crystal lagoon and beach spanning 2km, a beautiful palm tree lined boulevard and numerous community parks. Residential properties include studios, one, two and three bedroom apartments offering a variety of different views ranging from orientation towards Downtown Dubai and Burj Khalifa to community pool and canal views. Riviera will also feature a wide variety of cafes and restaurants, convenience stores and shops.",
      images:[
        "https://thumb.tildacdn.com/tild3139-3961-4561-b161-653738613266/-/format/webp/photo_2022-05-18_12-.jpg",
        "https://azizidevelopments.com/assets/images/properties/beach-oasis/1665579700748337076.jpg",

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcodO8Jx9ppT20QXF7V0mnNdAlHxpe5NRLJHutvduDlEuvBlKOsvMWO2Z7yqRD6UmTpRE&usqp=CAU",
"https://heart-of-carthage-dubai.com/backend/uploads/167556250311316462266821501584749.jpg",       
"https://riviera-meydan.ae/wp-content/uploads/2020/10/5-300x200.jpg",
       
      "https://heart-of-carthage-dubai.com/backend/uploads/16755625067961668403583.jpg",
      "https://riviera-meydan.ae/wp-content/uploads/2020/10/2-1.jpg",
      "https://riviera-meydan.ae/wp-content/uploads/2020/10/1579530258517307613.jpg",
      "https://riviera-meydan.ae/wp-content/uploads/2020/10/1583822440816180962.jpg",
      "https://riviera-meydan.ae/wp-content/uploads/2020/10/1554366097545239867.jpg",
      "https://riviera-meydan.ae/wp-content/uploads/2020/10/15543660971850878787.jpg",
      "https://riviera-meydan.ae/wp-content/uploads/2020/10/1579530258434495137.jpg",
      "https://riviera-meydan.ae/wp-content/uploads/2020/10/15838224401319217530.jpg",
      "https://riviera-meydan.ae/wp-content/uploads/2020/10/4-768x513.jpg",
      "https://heart-of-carthage-dubai.com/backend/uploads/16755625067961668403583.jpg",



    ]
  
  
  },
  { id:1,
    brochure:'https://venicedubai-9f692.web.app/assets/brochure.pdf',
    video: "/assets/video/v1.mp4",//"https://www.youtube.com/embed/XMygk9inR6w?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1",
    catigorie:"Studio & Apartments",  
    prencentage:"10%",
    plan:"https://riviera-meydan.ae/wp-content/uploads/2020/10/5-300x200.jpg", 
    sTitle:"In the Dubai South, a waterfront residential development of Azizi Venice offers luxurious studios, 1, 2 & 3 bedroom apartments",
    price:"from $150K USD",
    pyement:"5 yrs",
   title:"Venice Dubai",
  location:"South, Dubai",
 
  titleHtml1:"Venice",
  titleHtml2:'Dubai',   
  descFinale:"Moreover, its proximity to the stunning 18 km lagoon, comprising sweet water with artificial waves, provides a truly unique waterfront lifestyle",
  desc:" Moreover, its proximity to the stunning 18 km lagoon, comprising sweet water with artificial waves, provides a truly unique waterfront lifestyle",


  images:[

"https://d35bjgc7jbzjxh.cloudfront.net/venice/s3fs-public/2023-09/g4.webp",

"https://d35bjgc7jbzjxh.cloudfront.net/venice/s3fs-public/2023-09/about_.webp",

"https://d35bjgc7jbzjxh.cloudfront.net/venice/s3fs-public/2023-09/g5.webp",

"https://d35bjgc7jbzjxh.cloudfront.net/venice/s3fs-public/2023-09/g3mob.webp",
"https://d35bjgc7jbzjxh.cloudfront.net/venice/s3fs-public/2023-09/g6mob.webp",

"https://www.wresidencesdubai.com/wp-content/uploads/2019/12/Interior-of-a-luxury-panorama-penthouse-1266x844-c-default.jpg",

"https://d35bjgc7jbzjxh.cloudfront.net/venice/s3fs-public/2023-09/g3.webp",

"https://d35bjgc7jbzjxh.cloudfront.net/venice/s3fs-public/2023-09/g2.webp",

"https://d35bjgc7jbzjxh.cloudfront.net/venice/s3fs-public/2023-09/g1.webp",

"data:image/jpeg;base64,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",

"https://gulfbusiness.com/wp-content/uploads/2023/09/azizi-venice-1.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery1.jpg",




]


},
{ id:2,
  brochure:'/assets/brochure/studio.pdf',
  video: "/assets/video/sport.mp4",//"https://www.youtube.com/embed/WOY1Fnw2R0I?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1",
  prencentage:"10%",
  plan:"https://riviera-meydan.ae/wp-content/uploads/2020/10/5-300x200.jpg",
  catigorie: "STUDIO",
  location:"DUBAÏ  MEYDAN ONE",
  pyement:"4 yrs",
  sTitle:"Beach oasis in dubai STUDIO CITY Dubai Studio City is not only the hub for cutting-edge facilities and services to companies across the media and entertainment",
  price:"from $97k USD",
  title:"Studio City",
titleHtml1:"Studio",
titleHtml2:" City",
descFinale:"Dubai Studio City is not only the hub for cutting-edge facilities and services to companies across the media and entertainment sector but is also in vicinity to some of the emirate’s most sensational leisure and lifestyle options. Beach Oasis is a stylish address destined for the free-spirited seeking thrilling outdoor experiences and memories. Connect, innovate, and re-energise in your space of maximised comfort, convenience, and possibilities.",
desc:"Dubai Studio City is not only the hub for cutting-edge facilities and services to companies across the media and entertainment sector but is also in vicinity to some of the emirate’s most sensational leisure and lifestyle options.",


images:[

"https://azizidevelopments.com/assets/images/properties/beach-oasis/1665579700748337076.jpg",

"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcodO8Jx9ppT20QXF7V0mnNdAlHxpe5NRLJHutvduDlEuvBlKOsvMWO2Z7yqRD6UmTpRE&usqp=CAU",

"https://manage.tanamiproperties.com/Gallery/1126/Thumb/7859.webp",

"https://cms.propjunction.com/Gallery/772/Thumb/5769.webp",
"https://riviera-meydan.ae/wp-content/uploads/2020/10/1579530258517307613.jpg",
"https://riviera-meydan.ae/wp-content/uploads/2020/10/1583822440816180962.jpg",
"https://riviera-meydan.ae/wp-content/uploads/2020/10/1554366097545239867.jpg",
"https://riviera-meydan.ae/wp-content/uploads/2020/10/15543660971850878787.jpg",
"https://riviera-meydan.ae/wp-content/uploads/2020/10/1579530258434495137.jpg",
"https://riviera-meydan.ae/wp-content/uploads/2020/10/15838224401319217530.jpg",
"https://riviera-meydan.ae/wp-content/uploads/2020/10/4-768x513.jpg",
"https://heart-of-carthage-dubai.com/backend/uploads/16755625067961668403583.jpg",



]


}]
//rev:any[]=[]
  isCustomNavBar = true
  testUpdate=""
  affConst=true
  affNoteArabe=false
  affNoteEnglish=true
   affForm=false
  affChoose=true
  tabApprProd:any[]=[]
  tabVilaProd:any[]=[]
  tabRentProd:any[]=[]
//affiche Global
public  lat: number = 51.673858;
  public lng: number = 7.815982;
  offPlanModif:any
  affAd=true
project=""
baseUrl=environment.baseURL
affUser=false
affVila=false
affRent=false
affOff=false
affAppr=false
public loading=false
public lod=false
loadingAppr=false
loadingRent=false
loadingOff=false
loadingVila=false
tabCarc:any[]=[]

//affiche local
aj=false
ac=false
loadingDelete=false

  constructor(private http:HttpClient) {
    // this.http.get(environment.baseURL+"/one/").subscribe(res=>{
    //   console.log(res.valueOf(),"rev")
    // var ob:any
    // ob=res.valueOf()
    // this.rev=ob
    // })
   }
  ajout(obj:any,url:string){
    this.http.post(this.baseUrl+url,obj).subscribe(res=>{
      this.loading=true
    if(res.valueOf()){
    this.loading=false
    alert("secssful registre !!")
    }
    })

  }
  getSingle(url:string){
    this.loading=true
    console.log(this.baseUrl+url)
    var Url=this.baseUrl+url
   
   return  this.http.get(Url.toString())
  }
  delet(id:any,url:string){
  this.loading=true
 return this.http.delete(this.baseUrl+url+id+"/")
 

  }

  afficheOff(){
    this.affOff=true
    this.affRent=false
    this.affVila=false
   this.affAppr=false
   this.affUser=false
   this.affProjectOne=false
  } 
  afficheVila(){
    this.affOff=false
    this.affRent=false
    this.affVila=true
   this.affAppr=false
   this.affUser=false
   this.affProjectOne=false
  } 
  afficheApp(){
    this.affOff=false
    this.affRent=false
    this.affVila=false
   this.affAppr=true
   this.affUser=false
   this.affProjectOne=false
   this.affProjectOne=false
  }
  afficheRent(){
    this.affOff=false
    this.affRent=true
    this.affVila=false
   this.affAppr=false
   this.affUser=false
   this.affProjectOne=false
   this.affProjectOne=false
  } 
  affProject(){
    this.affOff=false
    this.affRent=false
    this.affVila=false
   this.affAppr=false
   this.affUser=false 
   this.affProjectOne=true
  }
  afficheUser(){
    this.affOff=false
    this.affRent=false
    this.affVila=false
   this.affAppr=false
   this.affUser=true
   this.affProjectOne=false
  } 
 
  funcAj(){
 this.ac=false
 this.aj=true
  }
  funcAff(){
   this.ac=true
   this.aj=false
  }
  public sendEmail(form:any){
    this.http.post('https://heart-of-carthage-dubai.com/backend/email/send-mail-ichkel/',form).subscribe(res=>{
      console.log(res)})
  }
}
