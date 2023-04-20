import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/services/crud.service';
import * as  AOS from 'aos';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form-conslutation',
  templateUrl: './form-conslutation.component.html',
  styleUrls: ['./form-conslutation.component.css']
})
export class FormConslutationComponent implements OnInit {
  changeCont=""
  public phone_number_standard :any
  dateId=""
  timeId=""
  affCodeEmail=true
  affDateRendevous=false
  baseUrl=environment.baseURL
  public myAngularxQrCode: string = "";
  public qrCodeDownloadLink: any = "";
  images = [
    {path: 'assets/img/IMG-20221117-WA0012.jpg'},
    {path: 'assets/img/IMG-20221117-WA0014.jpg'},
    {path: 'assets/img/IMG-20221107-WA0016.jpg'},
    {path: 'assets/img/IMG-20221107-WA0015.jpg'},
  ]
  affQr=false
  //agm
  funTime(e:any){
    this.timeId=e.target.value
  }
  funDate(e:any){
    this.dateId=e.target.value
  }
  countryChange(country: any) {
    this.changeCont=country.dialCode
   console.log(country.dialCode,"ee");
  //  if(country.dialCode === undefined){
  //   console.log(5)
  //   this.user.get("phone")?.setValue( "+" )
  //  }
  //  else{
  //   this.user.get("phone")?.setValue( "+"+country.dialCode)
  //  }
  
  }
  getNumber(event:any){
    console.log(event.target.value);
    console.log(this.phone_number_standard )
  }
   getNumber2(event:any){
    console.log(event.target.value);
   

  }
    user= new FormGroup({
   
      name: new FormControl('',[Validators.required ]),
     
      lastName: new FormControl(''),
      phone: new FormControl('',Validators.required),
      email: new FormControl('',[Validators.required,Validators.email]),
      typRef:new FormControl(""),
      project:new FormControl(""),
      typM:new FormControl(""),
      typB:new FormControl(""),
      date:new FormControl(""),
      DateN:new FormControl(""),
      country:new FormControl(""),
      
    
    })
    affValid=false
    Title_off=''
    disable=false
    affichEtape2=false
    countrySelcted="dubai"
      sk=true
      al=false
      affichDF=false
      crid=false
      affDate=false
      date="حاليا"
      bud=false
      budj=false
      affForm=false
      affDat=false
      
      typRef='صالة وغرفة'
      typM='كاش' 
      typB="AED 1000000 -> AED 2000000"
      tabMony:string[]=["Payment method ",'Cash ','Financement bancaire',"cryptocurrency"]
      tabsaken:string[]=["Property Type ","bedroom with living room ","2 bedroom with living room","3 bedroom with living room ","sales office"] 
      //tabIsthmar:string[]=["محل تجاري","شركة","عمارة " ] 
      tabBudjet:string[]=["your budget","AED 500000-> AED 1000000","AED 1000000 -> AED 2000000","more than AED 2000000"]
      tabDate:string[]=["When do you want to buy",'now ','after 1 month',"after 3 months","after 3 months"]
  
  constructor(private http:HttpClient , public crud:CrudService ,private route:Router) {  AOS.init();}
       onChangeURL(url:any) {
    this.qrCodeDownloadLink = url;
    
    this.affValid=true
  }
  back(){
    this.route.navigate([this.crud.rootingUrl])
  }
      ngOnInit(): void {
       
  //       const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8',"aut":""});
    
  // const requestOptions = { headers: headers };
  // this.http
  //     .post('http://localhost:8001/events.php', requestOptions)
  //     .subscribe((res: any) => {
  //         console.log(res);
  //     });
       /* AOS.init();
        AOS.refresh();*/
      //   this.cokis.set('Test', 'Hello World');
  
      //  console.log(this.cokis.getAll(),"fff") 
      }
      // Navigate(elem: HTMLElement ) {
      //   elem.scrollIntoView({ behavior: 'smooth' });
      //   }
   
      selectS(i:any){
        
        this.typRef=this.tabsaken[i.target.value]
      
        console.log(5)
        this.budj=true
      }
      selectB(i:any){
        
        this.typB =this.tabBudjet[i.target.value]
       
        console.log(5)
        this.crid=true
      }
      selectM(i:any){
        
        this.typM=this.tabMony[i.target.value]
       
        
        console.log(5)
        this.affDate=true
      }
      selectD(i:any){
        
        this.date=this.tabDate[i.target.value]
       
        console.log(5)
        this.affForm=true
      }
      enregisterClient(){
        // this.user.get("typB")?.setValue(this.typB)
        // this.user.get("typRef")?.setValue(this.typRef)
        // this.user.get("DateN")?.setValue(Date())
        // this.user.get("country")?.setValue(this.countrySelcted)
        // this.user.get("typM")?.setValue(this.typM)
        // this.user.get("project")?.setValue(this.crud.project)
        // console.log(this.user.value)
        if(this.dateId !="" && this.timeId!="" )
{
  this.crud.userConsultation.name  ="" +this.user.get("name")?.value
  this.crud.userConsultation.phone  ="" +this.user.get("phone")?.value
  this.crud.userConsultation.email="" +this.user.get("email")?.value
  this.crud.userConsultation.project=this.crud.project
  this.crud.userConsultation.dateMeet=this.dateId
  this.crud.userConsultation.timeMeet=this.timeId
  console.log(this.crud.userConsultation,"message") // this.http.post(this.baseUrl +'/todo/c/',this.user.value).subscribe(res=>{
 
  this.myAngularxQrCode= "Heart Of carthage Real Estate   Main license N 889868  in Real Estate Buying&selling From Dubai Land Department with  ID 46079" +this.user.get("name")?.value + " " +this.user.get("phone")?.value + " " +this.user.get("email")?.value + " " + this.dateId + " " + this.timeId
  // })

this.al=true
 console.log(this.crud.userConsultation,'rt')
 
  this.http.post(this.baseUrl +'/email/send-mail1/',this.crud.userConsultation).subscribe(res=>{
    console.log(res)})
    this.http.post(this.baseUrl +'/email/send-mailRendevous/',this.crud.userConsultation).subscribe(res=>{
      console.log(res)})
    this.affQr=true
}  else{
  alert("choose date meet !")
}     
    }
 funStep1(){
if( this.changeCont === undefined ){
  alert("! code country of phone not exacly example phone:+971 xxxx")
}
else {
  console.log(this.crud.userConsultation,"message2")
  if(this.changeCont !=""){
    if(this.user.value.phone?.split("")[0] !="+"){
     var phone= this.user.get("phone")?.value
       this.user.get("phone")?.setValue( "+"+this.changeCont+phone)
    }
 }
 if(this.changeCont ==""){

var phone= this.user.get("phone")?.value
       this.user.get("phone")?.setValue( "+"+"971"+phone)
 }
 
    this.http.post(this.baseUrl +'/email/send-mail/',{email:this.user.value.email,
     code:"G9p8"}).subscribe(res=>{
      console.log(res)
      this.affCodeEmail=false
      alert("Open your email and find the verification code.  enter the verification code")
    })
}  
  
 console.log(this.user.get("phone")?.value,"valeur")

   

 }

  step_counter = 1

  btnSteps:any
  step1:any
  step2:any
  step3:any
  
  nextStep(){

    this.btnSteps = document.getElementById("btn-next-step")
    this.step1 = document.getElementById("step-1")
    this.step2 = document.getElementById("step-2")
    this.step3 = document.getElementById("step-3")

    if(this.step_counter === 3){
      alert("saved")
    }

    if(this.step_counter === 2){
      this.btnSteps.style.innerText = "submit"
      this.step2.style.transform = "translateX(-200%)"
      this.step3.style.transform = "translateX(-200%)"
      this.step_counter++
    }

    if(this.step_counter === 1){
      this.step1.style.transform = "translateX(-100%)"
      this.step2.style.transform = "translateX(-100%)"
      this.step_counter++
    }
  

  }


    funcaffichEtape2(){
      this.affichEtape2=true
    }
    country(e:any){
      this.countrySelcted=e.target.value
    }
    validCode(e:any){
    if(e.target.value=="G9p8"){
      this.affDateRendevous=true
     
      
      
    }
    }
    }
  