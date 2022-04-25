import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.scss']
})
export class FlightsearchComponent implements OnInit {
  @Input() rendering: ComponentRendering;
  showbookingpagebutton:any;
  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    this.showbookingpagebutton = this.rendering.params.showbookingpagebutton;
    console.log('flightsearch component initialized with component data', this.rendering);
  }
}
