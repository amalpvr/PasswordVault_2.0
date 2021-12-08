import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogindetailsComponent } from './logindetails/logindetails.component';
import { ShowLogComponent } from './logindetails/show-log/show-log.component';
import { AddEditLogComponent } from './logindetails/add-edit-log/add-edit-log.component';
import { DelLogComponent } from './logindetails/del-log/del-log.component';
import { CarddetailsComponent } from './carddetails/carddetails.component';
import { ShowCardComponent } from './carddetails/show-card/show-card.component';
import { AddEditCardComponent } from './carddetails/add-edit-card/add-edit-card.component';
import { DelCardComponent } from './carddetails/del-card/del-card.component';
import { SharedService } from './shared.service';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LogindetailsComponent,
    ShowLogComponent,
    AddEditLogComponent,
    DelLogComponent,
    CarddetailsComponent,
    ShowCardComponent,
    AddEditCardComponent,
    DelCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
