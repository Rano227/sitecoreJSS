import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  @Input() rendering: ComponentRendering;
BookingLoc: any;
BookingINR: any;
BookingDate:any;
BookingDeparture:any;
BookingArrival:any;
  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
  this.BookingINR=localStorage.getItem('BookingInr');
  this.BookingLoc=localStorage.getItem('BookingLoc');
  this.BookingDate=localStorage.getItem('BookingDate');
  this.BookingDeparture=localStorage.getItem('BookingDeparture');
  this.BookingArrival=localStorage.getItem('BookingArrival');
    console.log('bookingDetail component initialized with component data', this.rendering);
  }
}
