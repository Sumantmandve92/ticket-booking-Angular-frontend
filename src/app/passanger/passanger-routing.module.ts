import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PassangerLoginComponent } from './passanger-login/passanger-login.component';

const routes: Routes = [
  {
    path:"passangerLogin",
    component:PassangerLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassangerRoutingModule { }
