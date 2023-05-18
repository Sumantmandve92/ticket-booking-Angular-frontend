import { Component, OnInit } from '@angular/core';
import { BusRoutes } from 'src/app/classes/bus-routes';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-schedule-your-bus',
  templateUrl: './schedule-your-bus.component.html',
  styleUrls: ['./schedule-your-bus.component.css']
})
export class ScheduleYourBusComponent implements OnInit {

  constructor(public serve:ServiceService) { }

  ngOnInit(): void {
  }
 

	fromstation:string;
	takeoffat:string;
	droppingstation:string;//time/station/time/station like this
	boardingstation:string;//time/station/time/station like this
	landon:string;
  ticketprice:number;
	tostation:string;
	date:string;

  scheduleThisBus()
  {
    let passanger:string[] = [];
    for (let index = 0; index < this.serve.scheduleThisBus.seats; index++) {
      passanger.push(null);

    }
    let busRoute={
      fromstation:this.fromstation,
      takeoffat:this.takeoffat,
      ticketprice:this.ticketprice,
      landon:this.landon,
      tostation:this.tostation,
      date:this.date,
      passangers:passanger
    }

    console.warn(busRoute);
    this.serve.http.post(this.serve.url+"r2outeOfThisBus/"+this.serve.scheduleThisBus.busnumber+"/"+this.serve.tokan,busRoute).subscribe(
      (num:number)=>
      {
        if(num==1)
        {
          window.alert("Done");

        }
        else if(num==-1)
        {
          window.alert("This bus is on route");
        }
        else
        {
          window.alert("SWR");
        }
      }
    );
  }

  timeTableOfThisBus:BusRoutes[]
  showSchedule(busnumber:string)
  {
    this.serve.http.get(this.serve.url+"g2etTimeTableOfThisBus/"+busnumber+"/"+this.serve.tokan).subscribe(
      (timeTableOfThisBus:BusRoutes[])=>
      {
        if(timeTableOfThisBus!=null)
        {
          if(timeTableOfThisBus.length!=0)
          {
            this.timeTableOfThisBus=timeTableOfThisBus;
          }
          else
          {
            window.alert("No any schedule");
          }
        }
        else
        {
          window.alert("SWR");
        }
        console.warn(timeTableOfThisBus);
      }
    );
  }
}
