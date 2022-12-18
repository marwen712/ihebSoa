import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './client/header/header.component';
import { FooterComponent } from './client/footer/footer.component';
import { HomeComponent } from './client/home/home.component';
import { AboutComponent } from './client/about/about.component';
import { ProductsComponent } from './client/products/products.component';
import { ContactUsComponent } from './client/contact-us/contact-us.component';
import { SingleProductComponent } from './client/single-product/single-product.component';
import { DashComponent } from './admin/dash/dash.component';
import { OffPlanComponent } from './admin/off-plan/off-plan.component';
import { Lunding2Component } from './client/lunding2/lunding2.component';
import { Lund3Component } from './client/lund3/lund3.component'
import { ProducVilaComponent } from './client/produc-vila/produc-vila.component';
import { PrudcApparComponent } from './client/prudc-appar/prudc-appar.component';

const routes: Routes = [
  { path:"", component:HomeComponent },
  { path:"about", component:AboutComponent },
  { path:"vila", component:ProductsComponent },
  { path:"rent", component:ProducVilaComponent },
  { path:"appr", component:PrudcApparComponent },
  { path:"single-product/:id", component:SingleProductComponent },
  { path:"contact-us", component:ContactUsComponent },
  { path:"admin", component: DashComponent },
  { path:"off", component: OffPlanComponent },
  { path:"single-product2/:id", component:Lunding2Component },
  { path:"single-product3/:id", component:Lund3Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
