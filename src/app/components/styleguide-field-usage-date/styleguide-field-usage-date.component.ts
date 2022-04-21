import { Component, Input } from '@angular/core';
import{DatePipe} from '@angular/common';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

/**
 * Demonstrates usage of date and time content field types within JSS.
 * NOTE: Usage of the *scDate directive is necessary to enable inline editing
 * of the date values in the Sitecore Experience Editor. The date value (as an ISO string)
 * is still available using the `getFieldValue()` helper if the raw value is needed.
 */
@Component({
  selector: 'app-styleguide-field-usage-date',
  templateUrl: './styleguide-field-usage-date.component.html',
  providers: [DatePipe]
})
export class StyleguideFieldUsageDateComponent {
  @Input() rendering: ComponentRendering;
  myDate :any;
  isoDateFormat = 'y-MM-ddTHH:mm:ss\'Z\'';
  utcTimezone = '+0000';

constructor(private datePipe: DatePipe){
  this.myDate = this.datePipe.transform(new Date(), 'MMM d, y');
  console.log(this.myDate);
}
}
