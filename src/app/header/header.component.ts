import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public serve:ServiceService,private route:Router) { }

  ngOnInit(): void {
  }

  logout()
  {
    if(window.confirm("Are you  sure to logout ?"))
    {
this.serve.scheduleThisBus=null;
      this.serve.myRegisteredBuses=null;
      this.serve.username=null;
      this.serve.isLoggedIn=0;
      this.route.navigate([""])
    }

  }
}
