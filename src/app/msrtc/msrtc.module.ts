import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MSRTCRoutingModule } from './msrtc-routing.module';
import { BusOwnerLoginComponent } from './bus-owner-login/bus-owner-login.component';
import { AddBusComponent } from './add-bus/add-bus.component';
import { ScheduleYourBusComponent } from './schedule-your-bus/schedule-your-bus.component';
import { FormsModule } from '@angular/forms';
import { MSRTCHomeComponent } from './msrtchome/msrtchome.component';


@NgModule({
  declarations: [
    BusOwnerLoginComponent,
    AddBusComponent,
    ScheduleYourBusComponent,
    MSRTCHomeComponent
  ],
  imports: [
    CommonModule,
    MSRTCRoutingModule,
    FormsModule
  ]
})
export class MSRTCModule { }
