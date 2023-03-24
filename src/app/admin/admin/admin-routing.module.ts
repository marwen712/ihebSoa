import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from '../dash/dash.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  { path:"", component: DashComponent },
    { path:"login", component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
