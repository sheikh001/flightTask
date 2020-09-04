import { Component, OnInit } from '@angular/core';
import { Flight } from '../services/flightInfo';
import { FlightInfoServices } from '../services/flightInfo.service';
import { MyOrderByPipe } from '../services/sort.pipe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public pricetoggle_menu: boolean = true;
  public Durationtoggle_menu: boolean = true;
  public flightDetails: any;
  public key = 'price';
  public reverse: boolean = true;
  constructor(private flightService: FlightInfoServices, private orderPipe: MyOrderByPipe) { }

  ngOnInit() {
    this.getFlightDetails();
  }
  getFlightDetails() {
    this.flightService.findFlightDetails().subscribe(res => {
      this.flightDetails = res;
    });
  }
  sortByPrice(type) {
    if (this.reverse) {
      this.orderPipe.transform(this.flightDetails.FlightRow, type, this.reverse);
      this.reverse = false;
    }
    else {
      this.orderPipe.transform(this.flightDetails.FlightRow, type, this.reverse);
      this.reverse = true;
    }
    return this.pricetoggle_menu = !this.pricetoggle_menu;
  }

  sortBytime(type){
    if (this.reverse) {
      this.orderPipe.transform(this.flightDetails.FlightRow, type, this.reverse);
      this.reverse = false;
    }
    else {
      this.orderPipe.transform(this.flightDetails.FlightRow, type, this.reverse);
      this.reverse = true;
    }
    return this.Durationtoggle_menu = !this.Durationtoggle_menu;
  }

}
