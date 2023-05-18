import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bus } from './classes/bus';
import { BusRoutes } from './classes/bus-routes';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http:HttpClient) { }
  url:string="http://13.231.217.255:8080/IRCTC-0.0.1-SNAPSHOT/";
  isLoggedIn:number=0;
  allBusesOnThisRoute:BusRoutes[];
  
  // ===============================================================================================
  username:string;
  tokan:string;
  myRegisteredBuses: Bus[];
  scheduleThisBus:Bus;
 
  homepage:number=0;//0 for bus home page,1 for movie home page

}
