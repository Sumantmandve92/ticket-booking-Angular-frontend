import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MSRTCGuard } from '../msrtc.guard';
import { AddBusComponent } from './add-bus/add-bus.component';
import { MSRTCHomeComponent } from './msrtchome/msrtchome.component';
import { ScheduleYourBusComponent } from './schedule-your-bus/schedule-your-bus.component';

const routes: Routes = [
  {
    path:"addNewBus",
    component:AddBusComponent,
    canActivate:[MSRTCGuard]
  },
  {
    path:"scheduleYourBus",
    component:ScheduleYourBusComponent,
    canActivate:[MSRTCGuard]
  },
  {
    path:"msrtcHomePage",
    component:MSRTCHomeComponent,
    canActivate:[MSRTCGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MSRTCRoutingModule { }
