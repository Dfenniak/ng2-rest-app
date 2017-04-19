import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.css']
})

export class WidgetsComponent implements OnInit {
  ngOnInit() {
    this.widgets = [
      {id: 1, name: "widget 1"},
      {id: 2, name: "widget 2"},
      {id: 3, name: "widget 3"},
      {id: 4, name: "widget 4"},
      {id: 5, name: "widget 5"}
    ];
  }
  uclikmuhwidgey(widge: Object) {
    this.selectedWidget = widge
  };
  widgets: Array<Object>;
  selectedWidget: Object;
}
