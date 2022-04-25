import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';

@Component({
  selector: 'app-formmaterial',
  templateUrl: './formmaterial.component.html',
  styleUrls: ['./formmaterial.component.css']
})
export class FormmaterialComponent implements OnInit {
  @Input() rendering: ComponentRendering;

  constructor() { }

  ngOnInit() {
    // remove this after implementation is done
    console.log('formmaterial component initialized with component data', this.rendering);
  }
}
