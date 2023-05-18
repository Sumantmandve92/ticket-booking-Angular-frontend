import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassangerModule } from './passanger/passanger.module';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FormsModule } from '@angular/forms';
import { BusHomeComponent } from './bus-home/bus-home.component';
import { MovieHomeComponent } from './Movie/movie-home/movie-home.component';
import { BusModule } from './bus/bus.module';
import { MovieModule } from './Movie/movie.module';
import { MSRTCModule } from './msrtc/msrtc.module';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
 
    BusHomeComponent,
    MovieHomeComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PassangerModule,
    HttpClientModule,
    FormsModule,
    BusModule,
    MovieModule,
    MSRTCModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
