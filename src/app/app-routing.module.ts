import { LogindetailsComponent } from './logindetails/logindetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarddetailsComponent} from './carddetails/carddetails.component';

const routes: Routes = [
  {path:'login',component:LogindetailsComponent},
  {path:'carddetails',component:CarddetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
