import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoComponent } from '../video/video.component';
import { AccordComponent } from '../accord/accord.component';
const routes: Routes = [{
  path:"",component: VideoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LundProjectRoutingModule { }
