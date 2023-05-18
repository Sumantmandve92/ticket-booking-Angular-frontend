import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusHomeComponent } from './bus-home/bus-home.component';
import { HomeComponent } from './home/home.component';
import { MovieHomeComponent } from './Movie/movie-home/movie-home.component';
import { BusOwnerLoginComponent } from './msrtc/bus-owner-login/bus-owner-login.component';

const routes: Routes = [


  {
    path:"msrtclogin",
    component:BusOwnerLoginComponent
  }, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
