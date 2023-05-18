import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { SearchedBusesComponent } from './searched-buses/searched-buses.component';


@NgModule({
  declarations: [
    SearchedBusesComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule
  ]
})
export class BusModule { }
