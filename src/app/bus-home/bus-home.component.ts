import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/service.service';
import { BusRoutes } from '../classes/bus-routes';
@Component({
  selector: 'app-bus-home',
  templateUrl: './bus-home.component.html',
  styleUrls: ['./bus-home.component.css']
})
export class BusHomeComponent implements OnInit {

  constructor(public serve: ServiceService,private route:Router) { }

  ngOnInit(): void {
  }

  searchbus(fromstation: string, tostation: string, date: string) {
    this.serve.http.get(this.serve.url + "getTodaysBuses/" + fromstation + "/" + tostation + "/" + date).subscribe(
      (allBusesOnThisRoute:BusRoutes[]) => {
       
      if(allBusesOnThisRoute!=null)
      {
        if(allBusesOnThisRoute.length!=0)
        {
          this.serve.allBusesOnThisRoute=allBusesOnThisRoute;
          console.warn(allBusesOnThisRoute);
          this.route.navigate(["searchedBuses"]);
        }
        else
        {
          window.alert("Sorry...!, There is no bus on this route.");
        }
      }
      }
    );
  }
}
