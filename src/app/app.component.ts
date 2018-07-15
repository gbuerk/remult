import { GridSettings, Column } from './../utils/utils';
import { Component } from '@angular/core';
import * as models from './models';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  x = new GridSettings(new models.Orders(), {
    allowUpdate: true,
    allowDelete: true,
    allowInsert: true,
    knowTotalRows: true,
    numOfColumnsInGrid: 4,
    get: { limit: 100 },
    hideDataArea: true
  });
  test() {
    let y = this.x.columns.items[2];
    this.x.columns.items.splice(2, 1);
    this.x.columns.items.splice(this.x.columns.items.length,0,y);
    this.x.columns.colListChanged();
    

  }
  filterColumn: Column<any>;

}
