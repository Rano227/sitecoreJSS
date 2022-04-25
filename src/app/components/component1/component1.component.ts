import { Component, OnInit, Input } from '@angular/core';
import { ComponentRendering } from '@sitecore-jss/sitecore-jss-angular';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
  @Input() rendering: ComponentRendering;
  color: string;
  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.queryParams
    .subscribe(params => {
      console.log(params); // { orderby: "price" }
      this.color = params.color;
      console.log(this.color); // price
    }
  );
    this.color = this.rendering.params.color;
   // console.log(this.color +'hello');
    // remove this after implementation is done
    console.log('component1 component initialized with component data', this.rendering);
  }
}
