import { Component, OnInit } from '@angular/core';

import { MonthOverview } from '../../models/month-overview';

@Component({
  selector: 'app-month-list',
  templateUrl: './month-list.component.html',
  styleUrls: ['./month-list.component.css']
})
export class MonthListComponent implements OnInit {
  months: MonthOverview[] = [];

  constructor() { }

  ngOnInit(): void {
    this.months.push({
      name: "zack"
    });

    this.months.push({
      name: "Emily"
    });
  }

}
