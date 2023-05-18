import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { KeyWithStatus } from 'src/app/classes/key-with-status';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-passanger-login',
  templateUrl: './passanger-login.component.html',
  styleUrls: ['./passanger-login.component.css']
})
export class PassangerLoginComponent implements OnInit {



  url: string = "http://localhost:8080/";

  


  constructor(public serve:ServiceService, private router: Router) {
    console.warn("hi from customer login constr");

  }

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
  registerNewPassanger(reg: NgForm) {


    this.serve.http.post(this.serve.url + "registerPassanger", reg).subscribe(
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
  // Seller login
 
  login(log: NgForm) {

    this.serve.http.post(this.serve.url + "passangerLogin", log).subscribe(
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

        
    console.warn(keyWithStatus.tokan);
          window.alert("login successfully");
        }
        else {
          window.alert("Internate connection Error.....!!!")
        }
      }
    );

  }

}


