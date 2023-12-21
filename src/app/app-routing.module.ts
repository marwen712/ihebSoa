import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { HomeComponent } from './client/home/home.component';
import { AboutComponent } from './client/about/about.component';
import { ProductsComponent } from './client/products/products.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { SingleProductComponent } from './client/single-product/single-product.component';

import { Lunding2Component } from './client/lunding2/lunding2.component';
import { Lund3Component } from './client/lund3/lund3.component'
import { ProducVilaComponent } from './client/produc-vila/produc-vila.component';
import { PrudcApparComponent } from './client/prudc-appar/prudc-appar.component';
import { Lunding4Component } from './client/lunding4/lunding4.component';
import { Form2Component } from './client/form2/form2.component';
import { ProductOffPlanComponent } from './client/product-off-plan/product-off-plan.component';
import { Home1Component } from './client/home1/home1.component';

import { AccordComponent } from './client/accord/accord.component';
import { HomeModule } from './client/home/home.module';

import { LundProjectModule } from './client/lund-project/lund-project.module';
import { FormConslutationComponent } from './client/form-conslutation/form-conslutation.component';
import { PolitiqueComponent } from './client/politique/politique.component';
import { Blog3Component } from './client/blog3/blog3.component';
const routes: Routes = [
 
  { path:"" , loadChildren:() => import('./client/home/home.module').then(x => x.HomeModule) },
 
  {path:'real-estate/:id' , loadChildren:() => import('./client/lund-project/lund-project.module').then(x => x.LundProjectModule) },
  { path:"about", component:AboutComponent },
   { path:"blog", component:Blog3Component },
  { path:"vila", component:ProductsComponent },
  { path:"rent", component:ProducVilaComponent },
  { path:"appr", component:PrudcApparComponent },
  { path:"Off-Plan/:id", component:SingleProductComponent },
  { path:"contact-us", component:ContactUsComponent },
  { path:"politique", component:PolitiqueComponent},

  { path:"Vila/:id", component:Lunding2Component },
  { path:"Appr/:id", component:Lund3Component },
  { path:"Rent/:id", component:Lunding4Component },
  { path:"form", component:Form2Component },
  { path:"offs", component:ProductOffPlanComponent },
  { path:"devlopper/:id", component:Home1Component },

  { path:"consultation", component: FormConslutationComponent },
  
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled', // Add options right here
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
