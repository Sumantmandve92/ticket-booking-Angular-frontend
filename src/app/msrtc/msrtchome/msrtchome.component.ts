import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from 'src/app/classes/bus';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-msrtchome',
  templateUrl: './msrtchome.component.html',
  styleUrls: ['./msrtchome.component.css']
})
export class MSRTCHomeComponent implements OnInit {

  constructor(public serve: ServiceService,private route:Router) { }

 
  ngOnInit(): void {

// get buses of busowner
    this.serve.http.get(this.serve.url + "g2etMyAllBuses/" + this.serve.tokan).subscribe(
      (registeredBuses: Bus[]) => {
        this.serve.myRegisteredBuses = registeredBuses;
        console.warn(registeredBuses);
      }
    );
  }
  scheduleThisBus(bus:Bus)
  {
this.serve.scheduleThisBus=bus;
this.route.navigate(["scheduleYourBus"]);
  }

}
