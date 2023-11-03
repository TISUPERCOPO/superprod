import { MessageService } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeNgModule } from './primeng.module';
import { CommonModule } from '@angular/common';
import {  HttpClientModule} from '@angular/common/http'
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeNgModule,
    HttpClientModule,
    NgxSpinnerModule

  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [MessageService],

  bootstrap: [AppComponent]
})
export class AppModule { }
