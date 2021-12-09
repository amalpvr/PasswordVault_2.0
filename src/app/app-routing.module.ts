import { AddEditLogComponent } from './logindetails/add-edit-log/add-edit-log.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarddetailsComponent} from './carddetails/carddetails.component';
import{AddEditCardComponent}from './carddetails/add-edit-card/add-edit-card.component'


const routes: Routes = [
  {path:'login',component:LogindetailsComponent},
  {path:'carddetails',component:CarddetailsComponent},
  {path:'addlogin',component:AddEditLogComponent},
  {path:'addcard',component:AddEditCardComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
