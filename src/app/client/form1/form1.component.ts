import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrudService } from 'src/app/services/crud.service';

//import * as  AOS from 'aos';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component implements OnInit {
 
  baseUrl=environment.baseURL
  
  images = [
    {path: 'assets/img/IMG-20221117-WA0012.jpg'},
    {path: 'assets/img/IMG-20221117-WA0014.jpg'},
    {path: 'assets/img/IMG-20221107-WA0016.jpg'},
    {path: 'assets/img/IMG-20221107-WA0015.jpg'},
  ]
  //agm
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
      tabMony:string[]=["Payment method ",'Cash ','Financement bancaire']
      tabsaken:string[]=["apartment or sales office ","bedroom with living room ","2 bedroom with living room","3 bedroom with living room ","sales office"] 
      //tabIsthmar:string[]=["محل تجاري","شركة","عمارة " ] 
      tabBudjet:string[]=["your budget","AED 500000-> AED 1000000","AED 1000000 -> AED 2000000","more than AED 2000000"]
      tabDate:string[]=["When do you want to buy",'now ','after 1 month',"after 3 months","after 3 months"]
  
  constructor(private http:HttpClient , private crud:CrudService) { }
    
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
        this.user.get("typB")?.setValue(this.typB)
        this.user.get("typRef")?.setValue(this.typRef)
        this.user.get("DateN")?.setValue(Date())
        this.user.get("country")?.setValue(this.countrySelcted)
        this.user.get("typM")?.setValue(this.typM)
        this.user.get("project")?.setValue(this.crud.project)
        console.log(this.user.value)
        this.al=true
        this.http.post(this.baseUrl +'/todo/c/',this.user.value).subscribe(res=>{
         
          console.log(res.valueOf())
        })
       
        this.http.post(this.baseUrl +'/email/send-mail1/',this.user.value).subscribe(res=>{
          console.log(res)})
        
    }
    funcaffichEtape2(){
      this.affichEtape2=true
    }
    country(e:any){
      this.countrySelcted=e.target.value
    }
  
    }
  