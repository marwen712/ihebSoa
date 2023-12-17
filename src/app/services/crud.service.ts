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
        "https://heart-of-carthage-dubai.com/backend/uploads/16755625067961668403583.jpg",
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
    brochure:'/assets/brochure/arada.pdf',
    video: "/assets/video/arada.mp4",//"https://www.youtube.com/embed/XMygk9inR6w?rel=0&modestbranding=1&autohide=1&mute=1&showinfo=0&controls=0&autoplay=1",
    catigorie:"Villas",  
    prencentage:"20%",
    plan:"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery2.jpg", 
    sTitle:"Let life begin at Jouri Hills, the latest phase in the hugely popular Jumeirah Golf Estates mega community.A stylish enclave of 294 luxury home",
    price:"from $1M USD",
    pyement:"7 yrs",
   title:"ARADA JOURI HILLS",
  location:"Jumeriah Golf Estates, Dubai",
 
  titleHtml1:"ARADA",
  titleHtml2:'JOURI HILLS',   
  descFinale:"Launched in 2017 and headquartered in the UAE, Arada is the region’s fastest-growing and most progressive developer. Arada was created to build communities and experiences that enrich, engage and inspire people Our homes are exceptionally designed and are complemented with bestin-class amenities, all provided at an accessible price point. Our prime focuses are on the intersection of community, technology and sustainability – all critical and fastmoving issues in the world today - and how these three themes can improve the lives of residents, workers and visitors in Arada’s developments.",
  desc:"Our homes are exceptionally designed and are complemented with bestin-class amenities, all provided at an accessible price point. Our prime focuses are on the intersection of community, technology and sustainability – all critical and fastmoving issues in the world today - and how these three themes can improve the lives of residents, workers and visitors in Arada’s developments..",


  images:[

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery4.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery5.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery8.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery9.jpg",
"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery1.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery2.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery3.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery7.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery9.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery1.jpg",

"https://www.dubai-sales-office.com/Projects/Arada/JOURI-HILLS-Dubai/images/gallery3.jpg",

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
