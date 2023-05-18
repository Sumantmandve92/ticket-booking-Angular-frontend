import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusHomeComponent } from '../bus-home/bus-home.component';
import { SearchedBusesComponent } from './searched-buses/searched-buses.component';

const routes: Routes = [
 {
  path:"searchedBuses",
  component:SearchedBusesComponent
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusRoutingModule { 
  
}
