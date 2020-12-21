import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MatListModule } from '@angular/material/list';
import{BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import{MatToolbarModule} from '@angular/material/toolbar';
import { YouTubePlayerModule } from "@angular/youtube-player";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';


import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FootComponent } from './foot.component';
import { HeadComponent } from './head.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,BrowserAnimationsModule,MatListModule
  ,MatButtonModule,MatToolbarModule ,YouTubePlayerModule,MatSidenavModule,MatIconModule],
  declarations: [ AppComponent, HelloComponent,FootComponent,HeadComponent ,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
