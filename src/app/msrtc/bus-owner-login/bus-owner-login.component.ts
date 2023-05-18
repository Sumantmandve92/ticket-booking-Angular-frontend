import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { KeyWithStatus } from 'src/app/classes/key-with-status';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-bus-owner-login',
  templateUrl: './bus-owner-login.component.html',
  styleUrls: ['./bus-owner-login.component.css']
})
export class BusOwnerLoginComponent implements OnInit {

  constructor(public serve:ServiceService,private route:Router) { }

  ngOnInit(): void {
  }
// =====================================================================================
  // toggel register and login form
  newAccount: number = 0
  showNewAccountForm(num: number) {
    this.newAccount = num;
  }
  // =====================================================================================
  // New registration
  registerNewBusOwner(reg: NgForm) {


    this.serve.http.post(this.serve.url + "busOwnerRegistration", reg).subscribe(
      (num:number) => {
        if(num==-1)
        {
          window.alert("Already registered");
        }
        else if(num==1)
        {
          window.alert("registered successfully");
          this.newAccount=0;
        }
        else
        {
          window.alert("SWR");
        }

      }
    );
  }
  // ====================================================================================
  // Bus Owner login
 
  login(log: NgForm) {

    this.serve.http.post(this.serve.url + "busOwnerLogin", log).subscribe(
      (keyWithStatus:KeyWithStatus) => {
        console.warn(keyWithStatus.tokan);

        if (keyWithStatus.status == -1) {
          // this.listOfitemPurchased(reg);
          window.alert("Wrong password");

        }
        else if (keyWithStatus.status == -2) {
          window.alert("Wrong username");
        }
        else if (keyWithStatus.status == 0) {
          window.alert("something went wrong");
        }
        else if (keyWithStatus.status == 1) {

          this.serve.isLoggedIn=1
 this.serve.tokan=keyWithStatus.tokan
          window.alert("login successfully");
          this.route.navigate(["msrtcHomePage"])
        }
        else {
          window.alert("Internate connection Error.....!!!")
        }
      }
    );

  }
}
