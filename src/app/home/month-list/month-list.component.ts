import { Component, OnInit } from '@angular/core';

import { Month } from '../../models/month';

@Component({
  selector: 'app-month-list',
  templateUrl: './month-list.component.html',
  styleUrls: ['./month-list.component.css']
})
export class MonthListComponent implements OnInit {
  months: Month[] = [];

  constructor() { }

  ngOnInit(): void {
    this.setMonths();
  }

  setMonths() {
    const date: Date = new Date();
    const months = {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December"
    };

    for (let i = 0; i < date.getMonth() + 1; i++) {
      this.months.push({
        id: i,
        name: months[i],
        year: 2020
      });
    }
  }

}
