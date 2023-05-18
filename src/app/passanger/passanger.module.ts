import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassangerRoutingModule } from './passanger-routing.module';
import { PassangerLoginComponent } from './passanger-login/passanger-login.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { MyTicketComponent } from './my-ticket/my-ticket.component';
import { PaymentComponent } from './payment/payment.component';


@NgModule({
  declarations: [
    PassangerLoginComponent,
    ProfileComponent,
    MyTicketComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    PassangerRoutingModule,
    FormsModule
  ],
 

})
export class PassangerModule { }
