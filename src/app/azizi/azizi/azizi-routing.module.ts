import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LundingPageAziziComponent } from '../lunding-page-azizi/lunding-page-azizi.component';

const routes: Routes = [{path:'' ,component:LundingPageAziziComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AziziRoutingModule { }
