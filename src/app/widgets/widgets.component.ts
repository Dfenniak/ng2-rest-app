import { Component, OnInit } from '@angular/core';
import { WidgetsService } from '../shared';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent implements OnInit {
  constructor(
    private widgetsService: WidgetsService
  ) {}
  ngOnInit() {
    this.widgets = this.widgetsService.widgets
  }
  uclikmuhwidgey(widge: Object) {
    this.selectedWidget = widge
  };
  widgets: Array<Object>;
  selectedWidget: Object;
}
