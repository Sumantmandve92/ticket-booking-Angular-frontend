import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public serve: ServiceService, public route: Router) { }

  ngOnInit(): void {
  }

  


  // ==================================================================================================
  // bus section
  showHomePage(num: number) {
    this.serve.homepage = num;
    if(num==1)
    {

      this.route.navigate(["busHome"]);
    }
    else if(num==2)
    {
      this.route.navigate(["movieHome"]);
    }
  }

}
