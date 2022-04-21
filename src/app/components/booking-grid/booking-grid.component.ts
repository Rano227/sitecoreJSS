import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering, getFieldValue } from '@sitecore-jss/sitecore-jss-angular';
import{DatePipe} from '@angular/common';
@Component({
  selector: 'app-booking-grid',
  templateUrl: './booking-grid.component.html',
  styleUrls: ['./booking-grid.component.scss'],
  providers: [DatePipe]
})
export class BookingGridComponent implements OnInit {
  @Input() rendering: ComponentRendering;
BookingInr:any;
BookingLoc:string;
BookingArrival: string;
BookingDeparture: string;
myDate :any;
url: any;
id:any;
  constructor(private datePipe: DatePipe) {
    this.myDate = this.datePipe.transform(new Date(), 'MMM d, y');
    console.log(this.myDate);
    this.BookingInr = Math.floor(1000 + Math.random() * 9000);
console.log(this.BookingInr);

   }

  ngOnInit() {
    // remove this after implementation is done
    this.id = this.rendering.params.bid;
this.url='/booking-result/'+this.id;
    console.log('bookingGrid component initialized with component data', this.rendering);
//this.BookingInr= getFieldValue(this.rendering, 'heading');
this.BookingLoc= getFieldValue(this.rendering, 'content');
this.BookingDeparture= getFieldValue(this.rendering, 'departureTime');
this.BookingArrival= getFieldValue(this.rendering, 'arrivalTime');

localStorage.setItem('BookingInr', this.BookingInr );
localStorage.setItem('BookingLoc', this.BookingLoc );
localStorage.setItem('BookingDate', this.myDate );
localStorage.setItem('BookingDeparture', this.BookingDeparture );
localStorage.setItem('BookingArrival', this.BookingArrival );
   
   // console.log(this.id + 'id');
  }
}
