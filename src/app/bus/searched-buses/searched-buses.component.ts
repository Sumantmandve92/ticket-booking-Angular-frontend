import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/classes/bus';
import { BusRoutes } from 'src/app/classes/bus-routes';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-searched-buses',
  templateUrl: './searched-buses.component.html',
  styleUrls: ['./searched-buses.component.css']
})
export class SearchedBusesComponent implements OnInit {

  constructor(public serve: ServiceService, private route: Router) { }

  ngOnInit(): void {
  }
  // ===================================================================================================
  busSeats: string[];

  busRoute: BusRoutes;
  showAvailableSeats(busSeats: string[], busRoute: BusRoutes) {
    this.busSeats = busSeats;
    this.busRoute = busRoute;
  }
  // ==================================================================================================
  bookYourSeat(seatnumber: number, busRoute: BusRoutes) {
    let registeredEmail = window.prompt("Enter Your Registered Email");
    let gender = window.prompt("Enter Gender M/F/O");
    console.warn(seatnumber);
    console.warn(busRoute);
    console.warn(registeredEmail);
    console.warn(gender);
    this.serve.http.get(this.serve.url + "confirmbyotp/" + registeredEmail).subscribe(
      (num1: number) => {
        if (num1 == 1) {
          let otp = window.prompt("Enter OTP here send on registered email:" + registeredEmail);
          this.serve.http.get(this.serve.url + "bookTicket/" + seatnumber + "/" + busRoute.id + "/" + registeredEmail + "/" + otp).subscribe(
            (num2: number) => {
              if (num2 == 1) {
                window.alert("Your ticket is sent to " + registeredEmail);
              }
              else if (num2 == -1) {
                window.alert("Wrong otp");
              }
              else {
                window.alert("SWR");
              }
            }
          );

        }
        else if (num1 == -1) {

          if (window.confirm("register your email")) {
            this.route.navigate(["passangerLogin"]);
          }

        }
        else {
          window.alert("SWR");

        }

      }
    );

  }
}
