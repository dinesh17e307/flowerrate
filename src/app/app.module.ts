import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './appRouting.module';

import { MatListModule } from '@angular/material/list';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import{MatToolbarModule} from '@angular/material/toolbar';
import { YouTubePlayerModule } from "@angular/youtube-player";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FootComponent } from './foot.component';
import { HeadComponent } from './head.component';
import { VedioComponent } from './vedio.component';
import { HeaderComponent } from './header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule,MatListModule
  ,MatButtonModule,MatToolbarModule ,YouTubePlayerModule,AppRoutingModule],
  declarations: [ AppComponent, HelloComponent,FootComponent,HeadComponent ,
  VedioComponent,HeaderComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
