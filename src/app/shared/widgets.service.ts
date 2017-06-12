import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class WidgetsService {
  widgets: Object[] = [
      {id: 1, name: "widget 1"},
      {id: 2, name: "widget 2"},
      {id: 3, name: "widget 3"},
      {id: 4, name: "widget 4"},
      {id: 5, name: "widget 5"}
    ];
}
