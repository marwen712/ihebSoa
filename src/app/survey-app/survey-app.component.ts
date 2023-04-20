import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';
import { FormBuilder, FormControl, Validators, FormGroup, FormGroupDirective, NgForm, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-survey-app',
  templateUrl: './survey-app.component.html',
  styleUrls: ['./survey-app.component.css']
})
export class SurveyAppComponent implements OnInit {

  constructor(private crud:CrudService , private route:Router ) { }

  elementSurvey:any
  phoneScreen:any
  step = 0
  user:any
  questions = [

    {
      question:"Heart Of Carthage Real Estate is an award winning full service  in Rent and Sale since 2015 in Dubai.Whatever Your Real Estate Needs, Our team Can Help You source the Land You Need.",
      type:"default",
      choices:[],
    },
    {
      question:"What is the subject of the consultation?",
      type:"plans",
      choices:[

        {
          image:"https://cdn-icons-png.flaticon.com/512/4660/4660757.png",
          title:"Sale",
        },
        {
          image:"https://cdn-icons-png.flaticon.com/512/1040/1040986.png",
          title:"Rent",
        },
        {
          image:"https://cdn-icons-png.flaticon.com/512/3749/3749977.png",
          title:"Investment",
        }

      ],
    },
    {
      question:"What type of property do you want?",
      type:"budget",
      choices:[

        {
          image:"assets/images/images-survey/villa.png",
          title:"Villa",
        },
        {
          image:"assets/images/images-survey/apprt.png",
          title:"Appartement",
        },
        {
          image:"assets/images/images-survey/market-place.png",
          title:"Market Place",
        }

      ],
    },
 
    {
      question:"type of consultation?",
      type:"payment",
      choices:[

        {
          image:"https://w7.pngwing.com/pngs/551/579/png-transparent-whats-app-logo-whatsapp-logo-whatsapp-cdr-leaf-text-thumbnail.png",
          title:"Whatsapp ",
        },
        {
          image:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Circle-icons-phone.svg/800px-Circle-icons-phone.svg.png",
          title:"Phone",
        },
        {
          image:"https://cdn-icons-png.flaticon.com/512/3003/3003075.png",
          title:"Videoconference",
        }

      ],
    },
   

  ]

  currentQuestion:any = [this.questions[0]]

  choiceId = ""

  answers:any = []

  getBgItemChoices(title:any){

    if(this.choiceId === title){
      return "#9c855f"
    }else{
      return "transparent"
    }

  }

  selectChoice(title:any){

    this.choiceId = title

    var i=0
    i=i+1
    console.log(title,i,"ee")
    if(i==1){
     this.crud.userConsultation.q1= title
    }
    if(i==2){
      this.crud.userConsultation.q2=title
    }
    if(i==3){
      this.crud.userConsultation.q3=title
    }

  }

    
  surveyCLOpen(){

    this.elementSurvey = document.getElementById("surveyCtnCL")
    this.elementSurvey.style.display="flex"

  }

  surveyCLClose(){

    // this.elementSurvey = document.getElementById("surveyCtnCL")
    // this.elementSurvey.style.display="none"
this.crud.affForm=false
  }

  choices = "default"
  plans:any = [this.questions[1]]
  payment:any = [this.questions[3]]
  budget:any = [this.questions[2]]
  // estimate:any = [this.questions[4]]


  nextQuestionCL(ans:any){

    var checkAnswer = false
    var formOpen = ""
  if(ans == "no"){
    this.crud.affForm=false
  }
    if(ans === "yes" ||  ans === "yes-form"){
      
      this.answers.push({question:this.currentQuestion[0].question,answer:ans+""})
      checkAnswer = true
      formOpen = ans

    }
    else{

      if(this.choiceId != ""){
        this.answers.push({question:this.choiceId+""})
        console.log(this.answers ,"aze")
        checkAnswer = true
      }

    }

    if(checkAnswer){
      
      this.elementSurvey = document.getElementById("progressBarSteps")


      this.elementSurvey.style.width = (this.answers.length / this.questions.length)*100+"%"

      this.step++
      if(this.step < this.questions.length){

        this.currentQuestion = [this.questions[this.step]]
      
        this.choices = this.currentQuestion[0].type


      }else{

        this.elementSurvey = document.getElementById("contentQuestions")

        this.elementSurvey.style.display="none"

        if(this.questions.length === this.step){
          this.crud.project="consultation"
          // this.crud.userConsultation.q1=this.answers[1].question
          // this.crud.userConsultation.q2=this.answers[2].question
          // this.crud.userConsultation.q3=this.answers[3].question
          this.crud.affForm=false

           this.route.navigate(["/consultation"])

        }else{

          this.elementSurvey = document.getElementById("finishedSurvey")

          this.elementSurvey.style.display="block"

        }

      }

    }

    this.choiceId = ""
    
  }

  finishFormClient(){
    this.crud.sendEmail({
      email:"heartofcarthagedubai@gmail.com",
      text:JSON.stringify( JSON.stringify( this.answers)) + " " +JSON.stringify( JSON.stringify( this.user)) 
    })
    this.elementSurvey = document.getElementById("formClient")

    this.elementSurvey.style.display="none"

    this.elementSurvey = document.getElementById("finishedSurvey")

    this.elementSurvey.style.display="block"
console.log(this.answers,"ee")
  }

  animationEleSurvey(){

    this.elementSurvey = document.getElementById("surveyContainer")
    this.elementSurvey.style.display="block"

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("logoSurvey")
      this.elementSurvey.style.transform="scale(1)"
      this.elementSurvey.style.top="5%"
      this.elementSurvey.style.left="2%"
    },1200)

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("nameLogo")
      this.elementSurvey.style.display="block"

    },2600)

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("questionSurvey")
      this.elementSurvey.style.display="block"

    },3600)

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("btnYes")
      this.elementSurvey.style.display="block"
      this.elementSurvey = document.getElementById("btnNo")
      this.elementSurvey.style.display="block"

    },4000)

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("skipBtn")
      this.elementSurvey.style.opacity="1"
      this.elementSurvey.style.pointerEvents="all"

    },5600)



  }

  finishedSurveyAnimation(){

    this.elementSurvey = document.getElementById("nameLogo")
    this.elementSurvey.style.display="none"
    this.elementSurvey = document.getElementById("logoSurvey")
    this.elementSurvey.style.transform="scale(2)"
    this.elementSurvey.style.top="22%"
    this.elementSurvey.style.left="42%"

  }

  nextQuestion(ans:any,isChoicesNext:any){

    var checkAnswer = false

    var formOpen = ""
  if(ans === "no"){
   this.crud.affForm=false
  }
    if(ans === "yes"  || ans === "yes-form"){
      
      this.answers.push({question:this.currentQuestion[0].question,answer:ans+""})
      checkAnswer = true
      formOpen = ans

    }
    else{

      if(this.choiceId != ""){
        this.answers.push({question:this.currentQuestion[0].question,answer:this.choiceId+""})
        checkAnswer = true
      }

    }

    if(checkAnswer){

      this.elementSurvey = document.getElementById("progressBarSteps")

      this.elementSurvey.style.width = (this.answers.length / this.questions.length)*100+"%"

      this.elementSurvey = document.getElementById("questionSurvey")

      this.elementSurvey.style.display="none"

      this.elementSurvey = document.getElementById("btnYes")

      this.elementSurvey.style.display="none"

      this.elementSurvey = document.getElementById("btnNo")

      this.elementSurvey.style.display="none"

      this.step++

      if(this.step < this.questions.length){

        this.currentQuestion = [this.questions[this.step]]
      
        this.choices = this.currentQuestion[0].type

        setTimeout(()=>{

          this.elementSurvey = document.getElementById("questionSurvey")

          this.elementSurvey.style.display="block"

          this.elementSurvey = document.getElementById("btnYes")

          this.elementSurvey.style.display="block"

          if(!isChoicesNext){
            this.elementSurvey = document.getElementById("btnNo")

            this.elementSurvey.style.display="block"
          }

        },300)

      }
      else{

        this.choices = ""

        this.elementSurvey = document.getElementById("skipBtn")

        this.elementSurvey.style.opacity="0"

        this.elementSurvey.style.pointerEvents="none"

        this.finishedSurveyAnimation()

        this.elementSurvey = document.getElementById("contentQuestions")

        this.elementSurvey.style.display="none"

        if(this.step==this.questions.length){
          this.crud.project="consultation"
          // this.crud.userConsultation.q1=this.answers[1].question
          // this.crud.userConsultation.q2=this.answers[2].question
          // this.crud.userConsultation.q3=this.answers[3].question
          this.crud.affForm=false
          
           this.route.navigate(["/consultation"])
          
          // this.elementSurvey = document.getElementById("formClientMobile")

          // this.elementSurvey.style.display="flex"


        }else{

          this.elementSurvey = document.getElementById("thankText")

          this.elementSurvey.style.display="block"

          setTimeout(()=>{
            this.elementSurvey = document.getElementById("backBtn")
            this.elementSurvey.style.display="block"

          },2000)


        }

      }
    }
  }

  finishFormClientMobile(){
    this.crud.sendEmail({
      email:"heartofcarthagedubai@gmail.com",
      text:JSON.stringify( JSON.stringify( this.answers)) + " " +JSON.stringify( JSON.stringify( this.user)) 
    })
    this.elementSurvey = document.getElementById("formClientMobile")
    
    this.elementSurvey.style.display="none"

    this.elementSurvey = document.getElementById("thankText")
    
    this.elementSurvey.style.display="block"

    setTimeout(()=>{
      this.elementSurvey = document.getElementById("backBtn")
      this.elementSurvey.style.display="block"

    },800)    

  }

  backFromSurvey(){

    // this.elementSurvey = document.getElementById("surveyContainer")
    
    // this.elementSurvey.style.display="none"   

    this.crud.affForm=false
  }

  ngOnInit(): void {

    this.phoneScreen = window.matchMedia('(max-width: 700px)')
    this.user={
      name:"",
      email:"",
      phone:""
    }

    if(this.phoneScreen.matches){  
      setTimeout(()=>{
        this.animationEleSurvey()
      },3000)

    }else{

      setTimeout(()=>{
        this.surveyCLOpen()   
      },3000)

    }
  }

}